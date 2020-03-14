import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apiResponse: ''
        }
    }
    
    render() {
        return (
            <div>
                <form className="form" action='/account' method='POST'>
                    <input type="text" name="login" placeholder="login"></input>
                    <input type="password" name="password" placeholder="password"></input>
                    <button>send</button>
                </form>
            </div>
        )
    }
}
export default Login;