"use strict";

const express = require('express');
const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator');
const d3 = require('d3');
const router = express.Router();
const KickStarter = mongoose.model('KickStarter');

let categories = []
KickStarter.distinct( "category" )
    .then( (cat) => { categories = cat } )
    .catch( (err) => { console.log(err) } )
router.get('/', (req, res) => {
    categories.forEach(element => {
        router.get('/'+element , (req, res) => {
            KickStarter.find( { category: element } ).limit(10000)
                .then( (result) => {
                    res.render('category', { title : element, result });
                })
                .catch( () => {
                     res.status(404).send("Une erreur est survenue.");
                });
        });
    });
    res.render("home", { title: 'Choix des catégories' });
});

router.get('/categories', (req, res) => {
    KickStarter.distinct( "category" )
        .then( (KickStarters) => {
            res.render('categories', { title: "Catégories", KickStarters });
        })
        .catch( () => {
            res.status(404).send("Une erreur est survenue.");
        });
});

router.get('/about', (req, res) => {
    res.render('about', { title: "À propos"} );
});


router.get('/example', (req, res) => {
    KickStarter.find().limit(500)
        .then( (KickStarters) => {
            res.render('index', { title: "Exemple", KickStarters });
        })
        .catch( () => {
            res.status(404).send("Une erreur est survenue.");
        });
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
            console.log("Seems cool");
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