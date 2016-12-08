var express = require('express');
var cors = require('cors');
var massive = require('massive');
var bodyParser = require('body-parser');
var config = require('./../config');
var session = require('express-session');
var client = require('twilio')(config.accountSid, config.authToken);
var stripeKey = require('./stripeSecretKeys');

var stripe = require('stripe')(stripeKey.secretKey);

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + './../public'));
var port = config.port;

var sdrDatabase = massive.connectSync({
	connectionString: config.massiveUri
});
app.set('db', sdrDatabase);
var db = app.get('db');

//CONTROLLERS//
var authCtrl = require('./controllers/userCtrl');
var userCtrl = require('./controllers/userCtrl');
var orderCtrl = require('./controllers/orderCtrl');
var productCtrl = require('./controllers/productsCtrl');

var girlsCtrl = require('./controllers/girlsCtrl');
var womensCtrl = require('./controllers/womensCtrl');

var mensCtrl = require('./controllers/mensCtrl');
var boysCtrl = require('./controllers/boysCtrl');



//POLICIES//
var passport = require('./services/passport');
var isAuthed = function(req, res, next) {
	if (!req.isAuthenticated()) return res.status(401)
		.send();
	return next();
};

var isAdmin = function(req, res, next) {
	if (req.user.admin) {
		next();
	} else {
		return res.status(401)
			.send();
	}
};

// Session and passport //
app.use(session({
	secret: config.SESSION_SECRET,
	saveUninitialized: false,
	resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Passport Endpoints //
app.post('/api/login', passport.authenticate('local', {
	successRedirect: '/api/me'
}));
app.get('/api/logout', function(req, res, next) {
	req.logout();
	return res.status(200)
		.send('logged out');
});
app.post('/api/register', authCtrl.register);
app.get('/api/me', isAuthed, authCtrl.me);
app.put('/api/user/current', isAuthed, authCtrl.update);
// app.get('/api/logout', authCtrl.logout);



// USER //
app.post('/api/user', userCtrl.createUser);
app.get('/api/user', userCtrl.getUsers);
// ORDER //
app.post('/api/order/:userid', orderCtrl.createOrder);
app.put('/api/order/complete', orderCtrl.completeOrder, orderCtrl.createOrder);
app.get('/api/order', isAuthed, orderCtrl.getUserOrder);
app.get('/api/order/completed/:userid', orderCtrl.getUserHistory);
// PRODUCTS //
app.get('/api/products', productCtrl.getProducts);
app.get('/api/products/:id',productCtrl.getProductById);
// CART //
app.get('/api/in/cart/:orderid',isAuthed,productCtrl.getInCart);
app.post('/api/add/item/cart',isAuthed,productCtrl.addToCart);
app.put('/api/update/qty/:productid', productCtrl.updateProductInCart);
app.delete('/api/delete/item/cart/:productid', productCtrl.deleteCartItem);

// GIRLS //
app.get('/api/girls', girlsCtrl.getGirlsShoes);
app.get('/api/girls/basketball', girlsCtrl.getGirlsBasketball);
app.get('/api/girls/jordan', girlsCtrl.getGirlsJordan);
app.get('/api/girls/lifestyle', girlsCtrl.getGirlsLifestyle);
app.get('/api/girls/running', girlsCtrl.getGirlsRunning);
app.get('/api/girls/soccer', girlsCtrl.getGirlsSoccer);
// WOMENS //
app.get('/api/womens', womensCtrl.getWomensShoes);
app.get('/api/womens/lifestyle', womensCtrl.getWomensLifestyle);
app.get('/api/womens/running', womensCtrl.getWomensRunning);
app.get('/api/womens/training', womensCtrl.getWomensTraining);

// MENS //
app.get('/api/mens', mensCtrl.getMensShoes);
app.get('/api/mens/basketball', mensCtrl.getMensBasketball);
app.get('/api/mens/jordan', mensCtrl.getMensJordan);
app.get('/api/mens/running', mensCtrl.getMensRunning);
app.get('/api/mens/soccer', mensCtrl.getMensSoccer);
app.get('/api/mens/sportswear', mensCtrl.getMensSportswear);
app.get('/api/mens/training', mensCtrl.getMensTraining);
// BOYS //
app.get('/api/boys', boysCtrl.getBoysShoes);
app.get('/api/boys/basketball', boysCtrl.getBoysBasketball);
app.get('/api/boys/jordan', boysCtrl.getBoysJordan);
app.get('/api/boys/lifestyle', boysCtrl.getBoysLifestyle);
app.get('/api/boys/running', boysCtrl.getBoysRunning);
app.get('/api/boys/soccer', boysCtrl.getBoysSoccer);

// PAYMENT //
app.post('/api/payment',function(req, res, next){
	console.log(req.body);

	//convert amount to pennies
	var chargeAmt = req.body.amount;
	var amountArray = chargeAmt.toString().split('');
	var pennies = [];
	for (var i = 0; i < amountArray.length; i++) {
		if(amountArray[i] === ".") {
			if(typeof amountArray[i + 1] === "string") {
				pennies.push(amountArray[i + 1]);
			} else {
				pennies.push("0");
			}
			if(typeof amountArray[i + 2] === "string") {
				pennies.push(amountArray[i + 2]);
			} else {
				pennies.push("0");
			}
			break;
		} else {
			pennies.push(amountArray[i])
		}
	}
	var convertedAmt = parseInt(pennies.join(''));
	console.log('Pennies: ');
	console.log(convertedAmt);

	var charge = stripe.charges.create({
		amount: convertedAmt, //amount in cents, again
		currency: 'usd',
		source: req.body.payment.token,
		description: 'Test charge for NikeClone.com'
	}, function(err, charge) {
		res.sendStatus(200);
		//if (err && err.type === 'StripeCardError') {
		//The card has been declined
		// }
	
	});
});



// TWILIO //
app.get('/testtwilio', function(req, res) {
	client.sendMessage({
		to:'+18016945874',
		from: '+13857071154',
		body: 'Yo what up, booooiiiissss'
	}, function(err, data) {
		if(err) {
			console.log(err);
		} else {
			console.log(data);
		}
	})
})




app.listen(port, function() {
	console.log('Listening on port ' + port);
});
