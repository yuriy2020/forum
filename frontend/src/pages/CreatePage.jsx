import React, { useState, useEffect, useContext } from 'react'

export const CreatePage = () => {

    // хуки
    const [form, setForm] = useState({
        newSection: ''
    })

    const changeHandler = event => {
        console.log('>>>', event.target)
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <h1>Create Page</h1>
            <form>
                <input type="text" name="newSection" onChange={changeHandler} />
                <button onClick={()=>createNewSection(form)}>Создать раздел</button>
            </form>
        </div>
    )
}  

const createNewSection = async (form) => fetch('article/newSection', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(form)
  });