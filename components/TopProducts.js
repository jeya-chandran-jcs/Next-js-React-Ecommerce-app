import React, { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import styles from "../styles/ProductCard.module.css"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useRouter } from "next/router";
const TopProduct=()=>{
    const [products,setProducts]=useState([])
    const router=useRouter()
    
    const getProducts=()=>{
        fetch("https://dummyjson.com/products")
        .then(response=>response.json())
        .then((data)=>setProducts(data.products.slice(0,12)))
    }

    useEffect(()=>{
        getProducts()
    },[])

    const handleALlItems=()=>{
        router.push("/items")
    }

    return(
        <div>
            <p className={styles.product_card_title} >Top Proucts</p>
            <div className={styles.top_product_card}> 
                {products?.map((product)=>(
                    <ProductCard id={product.id}  
                    image={product?.thumbnail} 
                    price={product.price} 
                    brand={product.brand} 
                    title={product.title} 
                    rating={product?.rating}/>
                ))}
            </div>
            
            <div className={styles.product_card_view}>
                <p onClick={handleALlItems}>View All</p>
                <ArrowRightAltIcon />  
            </div>
            
        </div>
    )
}

export default TopProduct