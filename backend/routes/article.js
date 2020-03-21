const express = require('express');
const router = express.Router();
const Section = require('../models/Section')
const jwt = require('jsonwebtoken')

//   article/newSection
router.post('/newSection', async function(req, res, next) {
  const {newSection, userId} = req.body
  console.log('NewSection>>>',newSection)
  const findSection = await Section.findOne({name:newSection}) 
  if (findSection) {
     res.status(201).json({ message: 'Такой раздел уже существует' })
  }
  else {
  //создание нового раздела
  const section = new Section({ name: newSection, owner: userId})
  
  await section.save()
  console.log('1')
  res.status(201).json({ message: 'Новый раздел создан !' })

  }
});


module.exports = router;
