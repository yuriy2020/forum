const express = require('express');
const router = express.Router();
const Section = require('../models/Section')

// create / 
router.post('/', async (req, res) => {
  const sections = await Sections.find()
console.log('>>>', sections)
res.end()
}
)


module.exports = router;
