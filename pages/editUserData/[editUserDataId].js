import { useState, useEffect } from "react" 

import styles from '../../styles/Home.module.css'

import UserForm from '../../components/UserForm'

export async function getStaticProps(context) {

    const { params } = context
    
    const api = `http://localhost:3001/users/${params.editUserDataId}`

    const data = await fetch(api)

    const user = await data.json()

    return {
        props: { user }
    }
}

export async function getStaticPaths() {
    const api = "http:localhost:3001/users"

    const response = await fetch(api)

    const userData = await response.json().then( data => data.data)

    const paths = userData.map((user) => {
        return {
            params: {
                editUserDataId: user.id
            }
        }
    })

    return {
        paths,
        fallback: false
    }
    
}

export default function editUserData({ user }) {

    function updateUser(userEditData) {
        fetch(`http://localhost:3001/users/${user.data.id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userEditData)
        }).then(() => {
            alert("dados atualizados")
        })
        .catch( err => console.log(err))
    }

    return (
        <div className={styles.newUser_container}>
            <h1>Meus Dados</h1>
            <p>Atualizar Perfil</p>

            <UserForm userData={user.data.attributes} handleSubmit={updateUser} btnText="Atualizar"/>

        </div>
    )
}