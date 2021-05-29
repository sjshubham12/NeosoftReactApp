
import {useParams} from "react-router-dom"
import {connect} from 'react-redux'
import {useEffect, useState} from 'react';
import Loader from "./Loader";

function CakeDetails(props){
    var token = localStorage.token
    let addtoCake = () =>{
        props.dispatch({
            type : "ADDTOCART",
            payload: props?.cakedetail

        })
        if(token){
        props.history.push("/cart")

        }else{
            alert("Please Login")
        }
       
    }

    let params = useParams()
    useEffect(()=>{
        props.dispatch({
            type : "CAKEDETAIL",
            payload: {params:params.cakeid}
        })
    },[])

    return (
        <div className="container">
            {props?.is_fetch== false ?(
        <div className="row">
            <div className="col-md-6">
                <img style ={{width:"300px" , height:"350px"}} className="singleimage" src={props?.cakedetail?.image? props?.cakedetail?.image: ''} />
            </div>
            <div className="col-md-6">
                <h1 className="display-4">{props?.cakedetail?.name}</h1>
                <hr className="my-4"/>
                <p><b>Price:</b> {props?.cakedetail?.price} </p>
                <p><b>Description:</b>{props?.cakedetail?.description} </p>
                <p><b>Weight:</b>{props?.cakedetail?.weight} Kg</p>
                <button className="btn btn-primary" onClick={()=>addtoCake()}>Add to Cart</button>
            </div>
        </div>
        ):(
        <Loader/>
        )} 
        </div>
    )
}

export default connect(function(state,props)
{
    return {
        cakedetail:state?.cakedetail,
        is_fetch:state?.is_fetch,
    }
    
}
)(CakeDetails)