import styles from '../styles/AllUsersData.module.css'

import UsersCard from "../components/UsersCard"
import Container from '../components/Container'

export async function getStaticProps() {
    const api = "http://localhost:3001/users"

    const data = await fetch(api)

    const allUsers = await data.json()

    return {
        props: { allUsers }
    }
}

export default function userData({ allUsers }) {

    function removeUser(id) {
        fetch(`http://localhost:3001/user/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        }).then((resp) => resp.json)
        .then(() => {
            setUsers(users.filter((user) => user.id !== id))
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className={styles.allUsersData_container}>
            <h1>Todos os clientes</h1>
            <p>Altere ou exclua seu perfil</p>

            <Container customClass="start">
                {allUsers.data.map((user) => (
                        <UsersCard id={user.id}
                        key={user.id}
                        name={user.attributes.name}
                        email={user.attributes.email}
                        celular={user.attributes.tel}
                        handleRemove={removeUser} />
                     ))}    
            </Container>         
                
        </div>
    )
}