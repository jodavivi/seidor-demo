const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("GETTTTTT");
    res.json( {listaMascotas: "Aquí irán todas las mascotas"})
});
router.get('/demo', (req, res) => {
    console.log("GETTTTTT dmeo");
    res.json( {listaMascotas: "Aquí irán todas las mascotas"})
});
  // With middleware
  router.get('/portal', function (req, res) {
    console.log("Redirect");
    console.log(req.query.code); 
    res.redirect('/'); 
});



module.exports = router;