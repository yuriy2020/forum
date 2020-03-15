var express = require('express');
var router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//   /auth/register
router.post('/register', async (req, res) => {
  try {
    const { login, password } = req.body
    const candidate = await User.findOne({ login: login })
    if (candidate) {
      res.status(400).json({ message: '>>>Такой пользователь уже существует' })
    }
    //хеширование пароля
    const hashedPassword = await bcrypt.hash(password, 12);

    //создание нового пользователя
    const user = new User({ login, password: hashedPassword })
    await user.save()
    res.status(201).json({ message: '>>>User created !' })

  } catch (e) {
    res.status(500).json({ message: '>>>Что-то пошло не так...' })
  }
});



//  /auth/login
router.post('/login', async (req, res) => {
  try {
    const { login, password } = req.body
    const user = await User.findOne({ login })
    if (!user) {
      return res.status(400).json({ message: ">>>User didn't found" })
    }

    // сравнение хешированых паролей
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: "Uncorrect password" })
    }

    //token
    const token = jwt.sign(
      { userId: user.id },
      "some secret frase",
      { expiresIn: '1h' }
    )
    res.json({ token, userId: user.id })

    
  } catch (e) {
    res.status(500).json({ message: '>>>Что-то пошло не так...' })
  }
});


module.exports = router;
