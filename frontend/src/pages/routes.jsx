import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
// import { LinksPage } from './LinksPage'
import Account from './Account'
import HomePage from './HomePage'
import Auth from './Auth'
import { CreatePage } from './CreatePage'


export const useRoutes = isAuthenticated => {
    console.log("IsAuth >>>",isAuthenticated)
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path='/' exact>
                    <HomePage />
                </Route>
                <Route path='/account' exact>
                    <Account />
                </Route>
                <Route path='/create' exact>
                    <CreatePage />
                </Route>
                <Redirect to='/' />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path='/' exact>
                <Auth />
                <HomePage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}
