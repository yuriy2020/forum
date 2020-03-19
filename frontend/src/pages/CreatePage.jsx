import React from 'react'

export const CreatePage = () => {

const createNewSection =(e)=>{
    e.preventDefault()

}

    return (
        <div>
            <h1>Create Page</h1>
            <form>
                <input type="text" name="newSection"/>
                <button onClick={createNewSection}>Создать раздел</button>
            </form>
        </div>
    )
}