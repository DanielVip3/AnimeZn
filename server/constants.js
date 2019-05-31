const adminPass = "4@DKegEH=B27W9&*Fjf^z+7Qc2c+CUDb$P^eQYnGSs#sA+y^8h@-jWh79@@_*je@HNeXuXCjvSCq_ng99Y4Y?z2KHUp$TePvF$9CC=QMh_&p2bn=WzMXTNhF&a%x85p^nCxn#@3m&R27vM+_HH+QZ#wur$2FRg$LD*R%8v?LDN_r#@yETQ@z3qQskH@MrYsc-4=nVj7HC2cy5h_jRq!ndd+Dx=QzC9$sD*ZYLT*DAzkhG7FDR-gMrkHG5J5ukKKa";
const fs = require('fs');
const Jikan = require('jikan-node');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const app = new express();
const MAL = new Jikan();

let corsOptions = {
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    'preflightContinue': true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const router = require('express').Router();

/* Middleware manutenzione */
app.use(function(req, res, next) {
    const configFile = JSON.parse(fs.readFileSync('config.json'));
    // Se è l'url per attivare o disattivare la manutenzione, o l'url contiene /isAdmin, allora il middleware non da errore, altrimenti da errore di manutenzione
    if (configFile['maintenance'] && (req.url.indexOf(configFile['maintenance_url']) === -1 && req.url.indexOf('isAdmin') === -1 && req.url.indexOf('isInMaintenance') === -1)) {
        res.status(503).send("503: API is in maintenance. Wait until it comes back online.");
    } else {
        next();
    }
});

/*app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if ('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
});*/

app.listen(2500, () => console.log("AnimeZn started."));

const apiRateLimit = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minuti
    max: 100
});

module.exports = {
    adminPass,
    app,
    router,
    apiRateLimit,
    MAL,
};