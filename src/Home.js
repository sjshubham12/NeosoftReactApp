import Carousel from "./Caursoel";
import {useEffect } from "react";
import {connect} from "react-redux"
import { Link } from "react-router-dom";
import Loader from "./Loader";

function Home(props){
    useEffect(()=>{
        props.dispatch({
            type:"ALLCAKES",
            payload:false
        })
    }, [])

    return (
    <div>
        <Carousel />
        {props.is_fetch== false ?(
        <div className="row">
            {props.allcakes?.length>0 && props.allcakes.map((each,index)=>{
                return (
                <div class="card col-md-3" style={{width:"20.4rem" ,marginTop:"25px"}}>
                    <Link to={'cake/'+each.cakeid}>
                    <img src={each.image} style={{height : "200px"}} class="card-img-top" alt="..."/></Link>
                    <div class="card-body">
                        <h5 class="card-title">{each.name}</h5>
                    </div>
                </div>
                )
            })}
        </div>
        ):(
        <Loader/>
        )} 
    </div>
    )
}

export default connect((state,props)=>{
    return {
        allcakes:state?.allcakes,
        is_fetch:state?.is_fetch,
    }
})(Home)