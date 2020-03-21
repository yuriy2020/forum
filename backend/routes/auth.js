const express = require('express');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


router.post('/register', async (req, res) => {
  try {
   
    const { login, password } = req.body
    const candidate = await User.findOne({ login: login })

    
    if (candidate) {
     
      res.status(201).json({ message: 'Такой пользователь уже существует' })
    }
    else {
      //хеширование пароля
    const hashedPassword = await bcrypt.hash(password, 10);
   
    //создание нового пользователя
    const user = new User({ login, password: hashedPassword })
    
    await user.save()
    
    res.status(201).json({ message: 'Новый аккаунт создан !' })
    }
    
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так...' })
  }
});



//  /auth/login
router.post('/login', async (req, res) => {
  try {
    const { login, password } = req.body
    const user = await User.findOne({ login })
    if (!user) {
      return res.status(400).json({ message: "Пользователь не найден" })
    }

    // сравнение хешированых паролей
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: "Uncorrect password" })
    }

    //token
    const token = jwt.sign(
      { userId: user.id },
      "any secret frase",
      { expiresIn: '1h' }
    )
    res.json({ token, userId: user.id })

    
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так...' })
  }
});


module.exports = router;
