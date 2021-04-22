import Carousel from "./Caursoel";
import Card from "./Card";
import axios from "axios"
import { useState ,useEffect } from "react";
import { error } from "jquery";
function Home(){
    let [cakes, setCakes] = useState([])
    let getAllCakes = "https://apibyashu.herokuapp.com/api/allcakes"
    useEffect(()=>{
        axios({
            method : "get",
            url : getAllCakes,
        }).then((response)=>{
           
            setCakes(response.data.data)
        },(error)=>{
            console.log("error from all cakes api",error)
        })
    }, [])
    return (
        <div>
            <Carousel />
            <div className="row">
           
            {cakes?.length>0 && cakes.map((each,index)=>{
                return (<Card cakedata={each} index={index} />)
            })}
            </div>


            
        </div>
    )
}

export default Home
