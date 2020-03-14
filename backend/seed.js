// Подключаем mongoose.
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/forum', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex:true});

const Entry = require('../backend/models/users');

const users = [
  {
    login: "qqq",
    password: "qqq"
  
  },
  {
    login: "aaa",
    password: "aaa"
  },
  {
    login: "zzz",
    password: "zzz"
  },
]

Entry.insertMany(users).then(() => {
  mongoose.connection.close();
});