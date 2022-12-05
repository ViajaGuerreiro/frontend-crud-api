import { useState } from "react"

import styles from '../styles/UserForm.module.css'
import Input from "./form/Input"
import SubmitButton from "./form/SubmitButton"

export default function userForm({handleSubmit, btnText, userData}) {

    const [usersData, setUsersData] = useState(userData || {})
    
    function submit(e) {
        e.preventDefault()
        handleSubmit(usersData)
    }

    function handleChange(e) {
        setUsersData({...usersData, [e.target.name]: e.target.value})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input name="name"
                text="nome"
                type="text"
                placeholder="digite seu nome"
                handleOnChange={handleChange}
                value={usersData.name ? usersData.name : ""}
            />

            <Input name="tel"
                text="celular"
                type="number"
                placeholder="digite seu celular"
                handleOnChange={handleChange}
                value={usersData.tel ? usersData.tel : ""}
            />

            <Input name="email"
                text="Email"
                type="email"
                placeholder="example@gmail.com"
                handleOnChange={handleChange}
                value={usersData.email ? usersData.email : ""}
            />

                <Input name="password"
                text="Senha"
                type="password"
                placeholder="crie uma senha"
                handleOnChange={handleChange}
                value={usersData.password ? usersData.password : ""}
            />

            <SubmitButton text={btnText} />
        </form>
    )
}