const express = require('express');
const router = express.Router();
const Section = require('../models/Section')

//   article/newSection
router.post('/newSection', async function(req, res, next) {
  const {newSection} = req.body
  console.log('NewSection',newSection)
  const findSection = await Section.findOne({name:name}) 
  if (findSection) {
     
    res.status(201).json({ message: 'Такой раздел уже существует' })
  }
  else {
  //создание нового раздела
  const section = new Section({ name: newSection })
  
  await section.save()
  
  res.status(201).json({ message: 'Новый раздел создан !' })
  }


  

});

module.exports = router;
