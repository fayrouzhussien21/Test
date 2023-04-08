import React from 'react';
import { useParams ,useState} from 'react-router-dom';
const Moviesdetails = (props) => {
    const {id}= useParams();
    // const [isExist,setisExist] = useState("false")
    return (
        <div>
          <h2 style={{color:"white"}}>Movie ID is {id}</h2>
        </div>
    );
};

export default Moviesdetails;