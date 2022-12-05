import Link from "next/link"

import styles from '../styles/Navbar.module.css'

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.link_items}>
                <li>
                    <Link href="/">Home</Link>
                </li>

                <li>
                    <Link href="/allUserData">Clientes</Link>
                </li>

                <li>
                    <Link href="/about">Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}