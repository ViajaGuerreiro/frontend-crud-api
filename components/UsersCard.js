import styles from '../styles/UsersCard.module.css'

import {BsPencil, BsFillTrashFill} from 'react-icons/bs'

import Link from 'next/link'

export default function usersCard({id, name, email, celular, handleRemove}) {
    function remove(e) {
        e.preventDefault()
        handleRemove(id)
    }

    return (
        <div className={styles.users_Card}>
            <h4>{name}</h4>
            <p>
                <span>Email:</span>{email}
            </p>
            <p>
                <span>Celular:</span> {celular}
            </p>
            <div className={styles.user_Card_actions}>
                <Link href={`/editUserData/${id}`}>
                    <BsPencil /> Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill /> Excluir
                </button>

            </div>
        </div>
    )
}