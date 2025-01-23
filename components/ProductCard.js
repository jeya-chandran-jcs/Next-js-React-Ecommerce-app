import React from "react";
import styles from "../styles/ProductCard.module.css";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {useRouter} from "next/router";

const ProductCard = ({ id, title, brand, image, price, rating }) => {
    const router = useRouter()

    const handleClick=()=>{
        router.push(`/product/${id}`)
    }
  
    return (
        <div className={styles.product_card} onClick={handleClick}>
            <img src={image} alt={title} />
           
            <div className={styles.product_card_details}>
                <p className={styles.product_brand}>Brand:{brand}</p>
                <p className={styles.product_title}>{title}</p>
    
                <div className={styles.product_card_footer}>
                    <p className={styles.product_price}>$ : {price}</p>
                    <div className={styles.product_card_footer_rating}>
                        <p className={styles.product_price}>{rating}</p>
                        <StarBorderIcon />
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default ProductCard