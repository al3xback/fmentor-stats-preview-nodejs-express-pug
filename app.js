const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const mainRoutes = require('./routes/main');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRoutes);

app.use((req, res, next) => {
	res.status(404).render('404', { title: 'Page Not Found' });
});

app.listen(3000);
