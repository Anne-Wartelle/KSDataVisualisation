"use strict";

const express = require('express');
const { check, validationResult } = require('express-validator');

const router = express.Router();

router.get('/', (req, res) => {
    res.render("form", { title: 'Choix des catégories' });
});

router.get('/first', (req, res) => {
    // :'(
    res.render('index', { title: 'Liste des catégorie' });
});

router.post('/', 
    [
        check('category')
            .isLength( { min: 1 } )
            .withMessage("Veuillez choisir une catégorie")
    ],
    (req, res) => {
        console.log(req.body);
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            // do something
            res.send("Test, bonne catégorie");
        } else {
            res.render("form", {
                title: "Registratiion form",
                errors: errors.array(),
                data:req.body,
            });
        }
    }
);

module.exports = router;