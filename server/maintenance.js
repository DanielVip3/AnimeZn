const constants = require('./constants.js');
const router = constants.router;
const fs = require('fs');
const configFile = JSON.parse(fs.readFileSync('config.json'));
const maintenance_url = configFile['maintenance_url'];

/*
Per attivare
POST api/maintenance/
PARAMETRI x-www-form-urlencoded
password: 4@DKegEH=B27W9&*Fjf^z+7Qc2c+CUDb$P^eQYnGSs#sA+y^8h@-jWh79@@_*je@HNeXuXCjvSCq_ng99Y4Y?z2KHUp$TePvF$9CC=QMh_&p2bn=WzMXTNhF&a%x85p^nCxn#@3m&R27vM+_HH+QZ#wur$2FRg$LD*R%8v?LDN_r#@yETQ@z3qQskH@MrYsc-4=nVj7HC2cy5h_jRq!ndd+Dx=QzC9$sD*ZYLT*DAzkhG7FDR-gMrkHG5J5ukKKa

Per disattivare
DELETE api/maintenance
PARAMETRI x-www-form-urlencoded
password: 4@DKegEH=B27W9&*Fjf^z+7Qc2c+CUDb$P^eQYnGSs#sA+y^8h@-jWh79@@_*je@HNeXuXCjvSCq_ng99Y4Y?z2KHUp$TePvF$9CC=QMh_&p2bn=WzMXTNhF&a%x85p^nCxn#@3m&R27vM+_HH+QZ#wur$2FRg$LD*R%8v?LDN_r#@yETQ@z3qQskH@MrYsc-4=nVj7HC2cy5h_jRq!ndd+Dx=QzC9$sD*ZYLT*DAzkhG7FDR-gMrkHG5J5ukKKa
*/
router
    .post(maintenance_url, function(req, res) {
        if (req.body.password !== constants.adminPass) {
            res.status(403).send(
                {
                    type: 'error',
                    message: "Wrong password."
                }
            );
            return;
        }

        try {
            configFile['maintenance'] = true;
            fs.writeFileSync('config.json', JSON.stringify(configFile));
            res.status(200).send(
                {
                    type: 'success',
                    message: "API is now in maintenance."
                }
            );
            console.log("Maintenance started.");
        } catch(err) {
            res.status(500).send(
                {
                    type: 'error',
                    message: "Uh oh! Something went wrong. API isn't in maintenance."
                }
            );
        }
    })
    .delete(maintenance_url, function(req, res) {
        if (req.body.password !== constants.adminPass) {
            res.status(403).send(
                {
                    type: 'error',
                    message: "Wrong password."
                }
            );
            return;
        }

        try {
            configFile['maintenance'] = false;
            fs.writeFileSync('config.json', JSON.stringify(configFile));
            res.status(200).send(
                {
                    type: 'success',
                    message: "API isn't in maintenance anymore. Yay!"
                }
            );
            console.log("Maintenance stopped.");
        } catch(err) {
            res.status(500).send(
                {
                    type: 'error',
                    message: "Uh oh! Something went wrong. API is in maintenance."
                }
            );
        }
    });


