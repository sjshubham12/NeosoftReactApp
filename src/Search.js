import Carousel from './Caursoel';
import Card from './Card';
// import cakes from './data';
import {useEffect, useState} from "react"
import axios from "axios"
import queryString from "query-string";

function Search(props){
    const parsed = queryString.parse(props.location.search);
   let [cakes, setCakes] = useState([])
    useEffect(()=>{ 
        //alert("Mounted and Updated")
        //let apiurl="https://apibyashu.herokuapp.com/api/searchcakes?q=chees"
        let apiurl="https://apibyashu.herokuapp.com/api/searchcakes?q="+parsed.searchtext
        axios({
                 url: apiurl,
                 method:"get"
             }).then((response)=>{
                
                 setCakes(response.data.data)
             }, (error)=>{
                 console.log("error ", error)
             })

    //},[]) //We want to prevent the call of componentdidupdate()
    },[props.location.search])

    var [cakedata, setCakeData] = useState();
    function getCakeData (data) {
        console.log("...... getCakeData" , data)
        setCakeData(data)
    }

    //console.log("cakes", cakes)
    return(
        <div>
            <Carousel></Carousel>

            <div className="row">
                {/* must be pass key */}
                {cakes?.length>0 && cakes.map((each, index)=>{
                    return (<Card cakedata={each} key={index} getDetail={getCakeData} />) 
                })}
            </div>

            {/* {cakedata && 
                <div style={{marginTop: "150px", border:"2px solid", padding:"5px"}}>
                    <CakeDetail cakedata={cakedata} />
                </div>
            } */}
        </div>
    )
}


export default Search