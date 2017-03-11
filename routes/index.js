const express		= require('express');
const router		= express.Router();

router.get('/', (req, res) => {
	res.send('Welcome!');
});

router.get('/recent', (req, res) => {
	res.send('Latest');
});

router.get('/search/:query', (req, res) => {
	res.send('Your search');
});

module.exports = router;