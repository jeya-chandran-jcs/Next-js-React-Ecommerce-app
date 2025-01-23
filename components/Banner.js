import React, { useEffect, useState } from 'react'
import styles from "../styles/Banner.module.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function Banner() {
    const [products,setProducts]=useState(null)
    const [selectedProduct,setSelectedProduct]=useState(null)
    const [index,setIndex]=useState(0)

  console.log(products)
    const getProducts=()=>{
      fetch("https://dummyjson.com/products")
    .then((response)=>response.json())
    .then((data)=>{
      setProducts(data.products.slice(0,5));
      setSelectedProduct(data.products[2])
    })
 }

 useEffect(()=>{
    getProducts()
 },[])
  
 const handleNextArrow=()=>{
  if(index==products.length-1){
    setSelectedProduct(products[0])
    setIndex(0)
    return
  }
  setSelectedProduct(products[index])
  setIndex(index+1)
 }

 const handlePreviousArrow=()=>{
  if(index==0){
    setSelectedProduct(products[products.length-1])
    setIndex(products.length-1)
    return;  // prevent going out of array bounds
  }
  setIndex(index-1)
  setSelectedProduct(products[index])
 }

    return (
    <div className={styles.banner}>
      <ArrowBackIosIcon onClick={handlePreviousArrow}/>
      <img  className={styles.banner_image} src={selectedProduct?.thumbnail}/>
      <ArrowForwardIosIcon onClick={handleNextArrow}/>
    </div>
  )
}
