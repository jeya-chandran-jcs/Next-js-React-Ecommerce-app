import React from "react"
import styles from "../styles/Navbar.module.css"
import Link from "next/link"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbar=()=>{
    // const item=JSON.parse(sessionStorage.getItem("items"))
    const item = typeof window !== "undefined" 
    ? JSON.parse(sessionStorage.getItem("items") || "[]") 
    : [];

    return(
        <div className={styles.navbar}>
            <div>
               <Link href="/homepage">Logo</Link>
            </div>

            <div className={styles.navbar_right}>
                <Link href="/my-account" className={styles.navbar_links}>My Aaccount</Link>
                <Link href="/cart" className={styles.navbar_links}>
                <div className={styles.navbar_links_cart}>
                    <ShoppingCartIcon />
                    <p>{item.length}</p>
                </div>
                </Link>
                <Link href="/about" className={styles.navbar_links}>About</Link>
                <Link href="/login" className={styles.navbar_links}>Login</Link>
            </div>
        </div>
    )
}
export default Navbar