



import {useParams} from "react-router-dom"
import {connect} from 'react-redux'
import {useEffect, useState} from 'react';
import axios from 'axios'

function CakeDetails(props){
        let params = useParams()
        
        useEffect(()=>{

        props.dispatch({
            type :"CAKEDETAILS",
            payload:{params:params.cakeid}
        })
    },[])

    let addtoCart = () =>{
        
        if(localStorage.token){
           
            props.dispatch({
                type :"ADDTOCART",
                payload:{cakeid:props?.allcakesdetails.cakeid,name:props?.allcakesdetails.name,image:props?.allcakesdetails.image,weight:props?.allcakesdetails.weight,price:props?.allcakesdetails.price}
            })
            props.dispatch({
            type:"UPDATE_CART",
                payload:false
            })
            props.history.push("/cart")
        }else{
            alert('please login')
        }
            
        }
    return (
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                <img style ={{width:"300px" , height:"350px"}} className="singleimage" src={props?.allcakesdetails?.image} />
            </div>
            <div className="col-md-6">
                <h1 className="display-4">{props?.allcakesdetails?.name}</h1>
                <hr className="my-4"/>
                <p><b>Price:</b> {props?.allcakesdetails?.price} </p>
                <p><b>Description:</b>{props?.allcakesdetails?.description} </p>
                <p><b>Weight:</b>{props?.allcakesdetails?.weight} Kg</p>
                <button className="btn btn-primary" onClick={addtoCart}>Add to Cart</button>
            </div>
            </div>
        </div>
    )
}

export default connect(function(state,props){
   
    return{
        allcakesdetails:state?.allcakesdetails,
        cartdata:state?.cartdata,
    }
}
)(CakeDetails)