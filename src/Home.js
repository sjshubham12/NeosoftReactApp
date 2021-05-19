import Carousel from "./Caursoel";
import Card from "./Card";
import axios from "axios"
import { useState ,useEffect } from "react";
import { error } from "jquery";
function Home(){
    let [cakes, setCakes] = useState([])
    let [loading,SetLoading] = useState(false)
    var baseurl = process.env.REACT_APP_BASE_URL;
    useEffect(()=>{
        axios({
            method : "get",
            url : baseurl+'/api/allcakes',
        }).then((response)=>{
            SetLoading(true)
            setCakes(response.data.data)
        },(error)=>{
            console.log("error from all cakes api",error)
        })
    }, [])
    return (
        <div>
            <Carousel />
            {loading?(
            <div className="row">
           
            {cakes?.length>0 && cakes.map((each,index)=>{
                return (<Card cakedata={each} index={index} />)
            })}
            </div>

            ):(
                <div class="d-flex justify-content-center">
             <div class="spinner-border text-primary m-5"  style = {{width: "200px" ,height: "200px"}} role="status">
                <span class="sr-only">Loading...</span>
                </div>
              </div>
            )}
            
        </div>
    )
}

export default Home
