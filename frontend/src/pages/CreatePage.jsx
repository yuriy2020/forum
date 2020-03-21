import React, { useState, useEffect, useContext } from 'react'
import { useMessage } from '../hooks/message.hook'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'

export const CreatePage = () => {
    const message = useMessage()
    const { error, clearError } = useHttp()

    const auth = useContext(AuthContext)
    console.log('AUTH:', auth)
    // хуки
    const [form, setForm] = useState({ newSection: '' })
    const [sections, setSections] = useState({ sections: [] })

    const changeHandler = event => {
        event.preventDefault()
        console.log('>>>', event.target)
        setForm({ ...form, [event.target.name]: event.target.value, userId: auth.userId })
    }

    useEffect(() => {
        message()
        clearError()
    }, [error, message, clearError])



    return (
        <div className='container'>
            <h3>Create Page</h3>
            <form className="row">
                <input className=" input-field col s8" type="text" name="newSection"
                    onChange={changeHandler}
                />
                <div className="col s1"></div>
                <button className="col s3 waves-effect waves-light btn-large" onClick={() => createNewSection(form)}>Создать раздел</button>
            </form>
            <div>
                <ul>
                    <li className="col s6">list</li>
                    <li className="col s6">list</li>
                    <li className="col s6">list</li>
                    <li className="col s6">list</li>
                </ul>
            </div>
        </div>
    )
}

const createNewSection = async (form) => fetch('/article/newSection', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(form),

});

