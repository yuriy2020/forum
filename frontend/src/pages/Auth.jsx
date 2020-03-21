import React, { useState, useEffect, useContext } from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import { AuthContext } from '../context/AuthContext'

const Auth = () => {
    const auth = useContext(AuthContext)

    const message = useMessage()

    const { loading, request, error, clearError } = useHttp()

    // хуки
    const [form, setForm] = useState({
        login: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    // потребуется 2 метода для регистрации и для логина
    const registerHandler = async () => {
        try {
            const data = await request('/auth/register', 'POST', { ...form })
            message(data.message)
            console.log('registerHandler', data)
        } catch (error) {

        }
    }
    const loginHandler = async () => {
        try {
            const data = await request('/auth/login', 'POST', { ...form })
            message(data.message)
            auth.login(data.token, data.userId)
            console.log('loginHandler', data)
        } catch (error) {

        }
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div>
                            <div className="input-field">
                                <input
                                    id="login"
                                    type="text"
                                    className="validate"
                                    name="login"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="login">Login</label>
                            </div>
                            <div className="input-field">
                                <input id="password"
                                    type="password"
                                    className="validate"
                                    name="password"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            className="btn yellow darken-4 "
                            onClick={loginHandler}
                            //блокировка кнопки когда loading=true
                            disabled={loading}
                        >
                            Войти
                            </button>
                        <button
                            className="btn grey lighten-1 black-text"
                            onClick={registerHandler}
                            //блокировка кнопки когда loading=true
                            disabled={loading}
                        >
                            Регистрация
                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Auth;