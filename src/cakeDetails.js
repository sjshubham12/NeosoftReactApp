/* import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar, faHeart} from '@fortawesome/free-solid-svg-icons' */
import {useParams} from "react-router-dom"
import {connect} from 'react-redux'
import {useEffect, useState} from 'react';
import axios from 'axios'



function CakeDetails(props){

//to add data to cart
let addtoCake = (cakedetails) =>{
    console.log("cake details...",cakedetails)

    var token = localStorage.token
        let addcakeapi="https://apibyashu.herokuapp.com/api/addcaketocart/"
        axios({
            method:"post",
            url:addcakeapi,
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
            
            console.log(response)

            props.dispatch({
                type:"UPDATE_CART",
                payload:false
            })
          props.history.push("/cart")


        },(error)=>{
            console.log("Error form cakedetail api", error)
        })
    
}

    let [cakedetails, setCakedetails] = useState({})
    let params = useParams()
    console.log("Params are ", params)
    //alert(params.cakeid)
    useEffect(()=>{
        let cakedetailsapi="https://apibyashu.herokuapp.com/api/cake/"+params.cakeid
        axios({
            method:"get",
            url:cakedetailsapi
        }).then((response)=>{
            setCakedetails(response.data.data)
            //console.log(response.data.name)
        },(error)=>{
            console.log("Error form cakedetail api", error)
        })
    },[])

    

    return (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
            <img style ={{width:"400px" , height:"350px"}} className="singleimage" src={cakedetails.image? cakedetails.image: ''} />
            </div>
            <div className="col-md-6">
            <h1 className="display-4">{cakedetails.name}</h1>
        
        <hr className="my-4"/>
        <p><b>Price:</b> {cakedetails.price} </p>
        <p><b>Description:</b>{cakedetails.description} </p>
        <p><b>Weight:</b>{cakedetails.weight} Kg</p>
        {/* <p><b>Eggless:</b>{cakedetails.eggless === true? 'Yes' : 'No'} </p>
        <p><b>ratings:</b>{cakedetails.ratings} </p>
        <p><b>flavour:</b>{cakedetails.flavour} </p> */}
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