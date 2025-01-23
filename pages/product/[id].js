import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import styles from "../../styles/ProductDetails.module.css"

const Product=()=>{
    const [productData,setProductData]=useState([])
    const router=useRouter()

    const getProduct=()=>{
        fetch(`https://dummyjson.com/products/${router.query.id}`)
        .then(response=>response.json())
        .then(data=>setProductData(data))
    }
    // console.log(">>>>>>>>>>",productData)
    useEffect(()=>{
        if(router.isReady){
            getProduct()
        }
    },[])

    const handleAddToCart=()=>{
        const getItem=JSON.parse(sessionStorage.getItem("items")) || []
        console.log(getItem)
        const data={
            id:productData.id,
            title:productData.title,
            category:productData.category,
            description:productData.description,
            price:productData.price,
            discountPercentage:productData.discountPercentage,
            stock:productData.stock,
            image:productData?.thumbnail,
            quantity:1,
            rating:productData.rating,
            
        }
        getItem.push(data)
        sessionStorage.setItem("items",JSON.stringify(getItem))
    
        const item=JSON.parse(sessionStorage.getItem("items"))
        console.log(item)
    }

    return(
        <div className={styles.product_details}>
            <div className={styles.product_details_data}>
                <p className={styles.product_details_data_title}>{productData.title}</p>
                <p className={styles.product_details_data_category}>{productData.category}</p>
                <p className={styles.product_details_data_description}>{productData.description}</p>
              
                <div className={styles.product_details_data_pricing}>
                <p className={styles.product_details_data_price}>Price : ${productData.price}</p>
                <p className={styles.product_details_data_discount}>Discount : %{productData.discountPercentage}</p>
                </div>
              
                <p className={styles.product_details_data_rating}>{productData.rating}</p>
                <p className={styles.product_details_data_stock}>Items left - {productData?.stock}</p>

                <button className={styles.product_details_data_button}
                    onClick={handleAddToCart}
                >
                    Add to Cart</button>
            </div>
            
            <div>
                <img src={productData.thumbnail}/>
            </div>
        </div>
    )
}

export default Product