import ProductCard from "@/components/ProductCard"
import React, { useEffect, useState } from "react"
import styles from "../styles/items.module.css"

const Items=()=>{
    const [items,setItems]=useState([])
    const getItems=()=>{
        fetch("https://dummyjson.com/products")
        .then(response=>response.json())
        .then(data=>setItems(data.products))
    }
    useEffect(()=>{
        getItems()
    },[])
    
    return(
        <div className={styles.items}>
            {items?.map((product)=>(
                    <ProductCard id={product.id}  
                    image={product?.thumbnail} 
                    price={product.price} 
                    brand={product.brand} 
                    title={product.title} 
                    rating={product?.rating}/>
                ))}

        </div>
    )
}

export default Items