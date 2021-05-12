import { Link } from "react-router-dom";
function Video(props){
    console.log("props of data in shubham",props)
    return (
        <div style={{paddingTop:"30px",paddingLeft:"30px"}}>
              <div class="card" style={{width:"20.4rem"}}>
             <img src="extraction-movie-poster-thumbnail.png" style={{height : "200px"}} class="card-img-top" alt="..."/>
             
            </div>
            <div class="card-body">
            <h5 class="card-title">{props.videodata}</h5>
            <Link to={'videoplay/'+props.videodata}><button className="btn btn-primary" >Play</button></Link>

            </div>  


        </div>
          
        
        
    )
}
export default Video