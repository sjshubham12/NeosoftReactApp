<<<<<<< HEAD
function * withYield(a) {
  let b = 5;
  yield a + b;
  b = 6; // it will be re-assigned after first execution
  yield a * b;
=======

import Video from "./Video";
import axios from "axios"
import Carousel from "./Caursoel";

import { useState ,useEffect } from "react";
import { error } from "jquery";
function Home(){
    let [videos, setVideo] = useState([])
    var baseurl = "http://localhost:5000"
    useEffect(()=>{
        axios({
            method : "get",
            url : baseurl+'/api/allassets',
        }).then((response)=>{
            console.log("response from all assets video",response.data)
            setVideo(response.data.videos)
        },(error)=>{
            console.log("error from all cakes api",error)
        })
    }, [])
    return (
        <div>
            <Carousel />
            <div className="row">
           
            {videos?.length>0 && videos.map((each,index)=>{
                return (<Video videodata={each} index={index} />)
            })}
            </div>


            
        </div>
    )
>>>>>>> 6f434fea7d6a366b15568abae4cdce6cad51b4e7
}

const calcSix = withYield(6);

console.log("shubham value",calcSix.next().value); // 11
console.log("value of jain",calcSix.next().value); // 36