import CartItemCard from "@/components/CartItemCard"
import React,{useState,useEffect} from "react"
import styles from "../styles/CartItemCard.module.css"

const Cart = () => {
    const [items,setItems]=useState([])
    
    const getItems=()=>{
        const cartItems=JSON.parse(sessionStorage.getItem("items"))
        setItems(cartItems)
    }
    
useEffect(()=>{
    getItems()
},[])

    const handleQtyInc=(productId)=>{
        
        const updatedItems=items.map((product)=>{
            if(product.id===productId){
                return {
                    ...product,
                    quantity:product.quantity+1,
                }
            }
            return product
        })
        setItems(updatedItems)
        sessionStorage.setItem("items",JSON.stringify(updatedItems))
    }

        const handleQtyDec=(productId)=>{
            const updatedItems=items.map((product)=>{
                if(product.id===productId){
                    return {
                        ...product,
                        quantity:product.quantity-1,
                    }
                }
                return product
            }).filter(product=>product.quantity>0)

            setItems(updatedItems)
            sessionStorage.setItem("items",JSON.stringify(updatedItems))
        }

    return (
        <div className={styles.cart}>
           {items.length>0 ? 
            <>
                 <p className={styles.cart_title}>Items</p>
            {items.map((product)=>(
               <CartItemCard 
               id={product?.id}
               title={product?.title} 
               brand={product?.brand}
               category={product?.category}
               description={product?.description} 
               image={product?.image} 
               discountPercentage={product?.discountPercentage}
               rating={product.rating}
               price={product.price}
               handleQtyInc={handleQtyInc}
               quantity={product?.quantity}
               handleQtyDec={handleQtyDec}
               /> 
            ))}
            </> 
            :
            <p>please ad some items</p>  
        }
        </div>
    )
}

export default Cart