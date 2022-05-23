// Dependancies
const router = require('express').Router();

//Api Routes
const apiRoutes = require('./api');

// add prefix of `/api` to all of the api routes
router.use('/api', apiRoutes);

// 404 Status error message
router.use((req, res) => {
    res.status(404).send('<h1>404 Something is not quite right... </h1>');
});


module.exports = router;