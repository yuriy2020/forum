import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = (event) => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <nav>
            <div className="nav-wrapper blue lighten-1">
                <a href="/" className="brand-logo">Forum</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/account">Аккаунт</NavLink></li>
                    <li><NavLink to="/create">Создать</NavLink></li>
                    <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
                </ul>
            </div>
        </nav>
    )
}