module.exports = (app) => {
    const express = require('express');
    const router = express.Router();

    router.get('/hello', (req, res) => {
        res.send('Can you hear me?');
    });

    router.get('/:id', (req, res) => {
        res.send('p1+' + req.params.id);
    });

    return router;
};