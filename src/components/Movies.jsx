import { useState } from "react";
import { Link } from "react-router-dom";
const Movies=(props)=>{
  console.log('https://image.tmdb.org/t/p/original/'+props.poster_path);
    return (
           <><div className="card mt-3 mx-3" style={{width: "18rem"}}>
                        <img className="card-img-top mt-3" src={'https://image.tmdb.org/t/p/original/'+props.poster_path} alt="Card image cap"/>
                        <div className="card-body">
                          <h5 className="card-title">{props.title}</h5>
                          <p className="card-text">{props.description}</p>
                          <Link to={`Movie/${props.id}`} className="btn btn-primary">Details</Link>
                        </div>
                      </div></>
    );
}
export default Movies;