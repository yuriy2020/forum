import React, { useState } from 'react'
import { useHttp } from '../hooks/http.hook'

const Auth = () => {
    const { loading, error, request } = useHttp()

    const [form, setForm] = useState({
        login: '', password: ''
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
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
                        <button className="btn yellow darken-4 ">Войти</button>
                        <button className="btn grey lighten-1 black-text">Регистрация</button>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Auth;