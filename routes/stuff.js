const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer =require('../middleware/mult-config')

const stuffCtrl = require('../controllers/stuff');


router.post('/',auth, multer, stuffCtrl.createThing );
router.put('/:id' ,auth,multer, stuffCtrl.modifyThing);
router.get('/:id', auth,stuffCtrl.getOneThing);
router.delete('/:id', auth,stuffCtrl.deleteThing);
router.get('/', auth,stuffCtrl.getAllStuff);

  module.exports = router;