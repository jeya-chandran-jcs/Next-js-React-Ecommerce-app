import React from "react"
import styles from "../styles/CartItemCard.module.css"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const CartItemCard=({id,title,brand,description,image,rating,discountPercentage,
    category,price,handleQtyInc,quantity,handleQtyDec})=>{
    console.log(">>>",quantity)
    
    return(
        <div className={styles.cart_item_container}>
            <div className={styles.cart_item_firstbox}>
                <p className={styles.cart_item_title}>{title}</p>
                <p className={styles.cart_item_category}>Category: {category}</p>
                <p className={styles.cart_item_description}>{description}</p>
                
                <div className={styles.cart_item_pricing}>
                    <p className={styles.cart_item_price}>$ : {price *quantity}</p>
                    <p className={styles.cart_item_discountPercentage}>%-{discountPercentage}</p>
                </div>
                
                <div className={styles.cart_item_ratings}>
                    <StarBorderIcon /> 
                    <p className={styles.cart_item_rating}>{rating}</p>
                </div>
                <div className={styles.cart_item_adding}>
                    <div className={styles.cart_item_icon} onClick={()=>handleQtyInc(id)}>
                        <AddIcon />
                    </div>
                        <p>{quantity}</p>
                    <div className={styles.cart_item_icon} onClick={()=>handleQtyDec(id)}>
                        <RemoveIcon />
                    </div>
                </div>

            </div>

            <div>
                <img src={image} className={styles.cart_item_image}/>
            </div>
        </div>
    )
}

export default CartItemCard