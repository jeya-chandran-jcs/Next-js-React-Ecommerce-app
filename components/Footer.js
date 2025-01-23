import React from "react"
import Link from "next/link"
import styles from "../styles/Footer.module.css"
const Footer=()=>{
    return(
        <div className={styles.footer}>   
            <div >
                <Link  className={styles.footer_logo} href="/homepage">logo</Link>
            </div>
            <div className={styles.footer_links_container}>
                <Link className={styles.footer_links} href="/my-account">My Account</Link>
                <Link className={styles.footer_links} href="/cart">Cart</Link>
                <Link className={styles.footer_links} href="/contact-us">Contact Us</Link>
            </div>
        </div>
    )
}

export default Footer