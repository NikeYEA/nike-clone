var express = require('express');
var cors = require('cors');
var massive = require('massive');
var bodyParser = require('body-parser');
var config = require('./../config');
var session = require('express-session');
var client = require('twilio')(config.accountSid, config.authToken);
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
app.put('/api/order/complete/:orderid/:userid', orderCtrl.completeOrder, orderCtrl.createOrder);
app.get('/api/order/:userid', orderCtrl.getUserOrder);
app.get('/api/order/completed/:userid', orderCtrl.getUserHistory);
// PRODUCTS //
app.get('/api/products', productCtrl.getProducts);
app.get('/api/products/:id',productCtrl.getProductById);
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

// CART //
app.get('/api/in/cart/:orderid', productCtrl.getInCart);
app.post('/api/add/item/cart/:orderid', productCtrl.addToCart);
app.put('/api/update/qty/:productid', productCtrl.updateProductInCart);
app.delete('/api/delete/item/cart/:productid', productCtrl.deleteCartItem);

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
