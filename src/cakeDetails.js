
import {useParams} from "react-router-dom"
import {connect} from 'react-redux'
import {useEffect, useState} from 'react';
import axios from 'axios'



function CakeDetails(props){

//to add data to cart
let addtoCake = (cakedetails) =>{
    var baseurl = process.env.REACT_APP_BASE_URL;
    var token = localStorage.token
        axios({
            method:"post",
            url : baseurl+'/api/addcaketocart',
            data:{
                cakeid:cakedetails.cakeid,
                name:cakedetails.name,
                image:cakedetails.image,
                price:cakedetails.price,
                weight:cakedetails.weight
            },

            headers:{
                authtoken:token
              }
        }).then((response)=>{
            if(response.data.data){
           
            props.dispatch({
                type:"UPDATE_CART",
                payload:false
            })
          props.history.push("/cart")
        }else{
            alert("Please Login")
        }


        },(error)=>{
            console.log("error", error)
        })
    
}

    let [cakedetails, setCakedetails] = useState({})
    let params = useParams()
    useEffect(()=>{
        let cakedetailsapi="https://apifromashu.herokuapp.com/api/cake/"+params.cakeid
        axios({
            method:"get",
            url:cakedetailsapi
        }).then((response)=>{
            setCakedetails(response.data.data)
        },(error)=>{
            console.log("error", error)
        })
    },[])

    

    return (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
            <img style ={{width:"300px" , height:"350px"}} className="singleimage" src={cakedetails.image? cakedetails.image: ''} />
            </div>
            <div className="col-md-6">
            <h1 className="display-4">{cakedetails.name}</h1>
        
        <hr className="my-4"/>
        <p><b>Price:</b> {cakedetails.price} </p>
        <p><b>Description:</b>{cakedetails.description} </p>
        <p><b>Weight:</b>{cakedetails.weight} Kg</p>
       
        <button className="btn btn-primary" onClick={()=>addtoCake(cakedetails)}>Add to Cart</button>
            </div>
          </div>
       
      </div>

    )
}

//export default CakeDetails;

export default connect(function(state,props)
{

}
)(CakeDetails)