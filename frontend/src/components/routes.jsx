import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { LinksPage } from './LinksPage'
import { Account } from './Account'

export const useRoute = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path='/links' exact>
                    <LinksPage />
                </Route>
                <Route path='/account' exact>
                    <Account />
                </Route>
                <Redirect to='/' />
            </Switch>
        )
    } 
    return (
        <Switch>
            <Route path='/'>
                <HomePage/>
            </Route>
                    </Switch>
    )
}