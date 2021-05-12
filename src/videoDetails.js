
import {useParams} from "react-router-dom"
import {connect} from 'react-redux'
import {useEffect, useState} from 'react';
import axios from 'axios'



function VideoDetails(props){

//to add data to cart

    let [videodetails, setvideodetails] = useState({})
    let params = useParams()
  
    

    return (
        <div className="container">
            
    <video controls muted autoPlay crossOrigin="anonymous">
    <source src={`http://localhost:5000/api/playvideo?filename=${params.videoid}`} type="video/mp4"></source>
    <track label="English" kind="captions" srcLang="en" src={videodetails} default></track>
    </video>
      
      </div>

    )
}

//export default CakeDetails;

export default VideoDetails