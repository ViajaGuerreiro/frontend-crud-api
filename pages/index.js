import styles from '../styles/Home.module.css'

import UserForm from '../components/UserForm'

export default function Home() {

  const api = "http://localhost:3001/users"

  function addUser(user) {
    fetch(api, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    }).then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      alert("usuario cadastrado")
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className={styles.newUser_container}>
      <h1>Formulario de Cadastro</h1>
      <p>Insira seus dados</p>
      <UserForm handleSubmit={addUser} btnText="Cadastrar" />
    </div>
  )
}
