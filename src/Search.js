import Carousel from './Caursoel';
import Card from './Card';
import {useEffect, useState} from "react"
import axios from "axios"
import queryString from "query-string";

function Search(props){
    const parsed = queryString.parse(props.location.search);
   let [cakes, setCakes] = useState([])
   let [loading,SetLoading] = useState(false)
   
    useEffect(()=>{ 
      
        let apiurl="https://apifromashu.herokuapp.com/api/searchcakes?q="+parsed.searchtext
        axios({
                 url: apiurl,
                 method:"get"
             }).then((response)=>{
                SetLoading(true)
                
                 setCakes(response.data.data)
             }, (error)=>{
                 console.log("error ", error)
             })

    },[props.location.search])

    var [cakedata, setCakeData] = useState();
    function getCakeData (data) {
        setCakeData(data)
    }

    return(
        <div>
            <Carousel></Carousel>

            <div className="row">
                {/* must be pass key */}
                {cakes?.length>0 && cakes.map((each, index)=>{
                    return (<Card cakedata={each} key={index} getDetail={getCakeData} />) 
                })}
            </div>

          
        </div>
    )
}


export default Search