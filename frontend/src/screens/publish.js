import React, { useState } from "react"
import "./publish.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import 'filepond/dist/filepond.min.css';    
const Publish = () => {
    const history = useHistory()
    const [ product, setProduct] = useState({
        name: "",
        description:"",
        price:"",
        countInStock: "",
        imageUrl:"",
        file: "",        
    })
    const handleChange = e => {    
        const { name, value } = e.target
        console.log("name : "+ name);
        console.log("value : "+ value);
        setProduct({
            ...product,
            [name]: value
        })
    }
    const publish = () => {

        const { name, description, price, countInStock,imageUrl,file } = product
        if( name && description && price && countInStock && imageUrl && file){
            console.log(imageUrl);
            axios.post("http://localhost:3000/publish", product)
            .then( res => {
                alert(res.data.message)
                history.push("/")
            })            
        } else {
            alert("invlid input")
        }       
    }
    return (
        <div className="Publish">           
            <h1>Publish</h1>
            <input type="text" name="name" value={product.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="description" value={product.description} placeholder="Your description" onChange={ handleChange }></input>
            <input type="number" name="price" value={product.price} placeholder="Your price" onChange={ handleChange }></input>
            <input type="number" name="countInStock" value={product.countInStock} placeholder="count In the Stock" onChange={ handleChange }></input>
            <input type="file" name="imageUrl" value={product.imageUrl} placeholder="the Image Url" onChange={ handleChange } accept=".pdf,.doc,.png,.jpg,.jpeg" ></input>
            <input type="file" name="file" id="myFileInput" value={product.file} onChange={ handleChange } accept=".pdf,.doc,.png"></input>
            <div className="button" onClick={publish} >publish</div>
        </div>
    )
}
export default Publish