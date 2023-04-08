import { useState } from "react"
const Userlist=(props)=>{
//    const [id,setId]=useState("");
    const increment=(id)=>{
        props.onIncrementFire(id);
    }
    return(
        <><h3 style={{ color: "white" }}>All users</h3><div className="card mt-1">
            {props.users.map((user) => {
                return (<div className="border my-1" key={user.id}><div>Name:{user.name}</div><div>Age:{user.age}</div>
                    <button className="btn btn-primary my-1" style={{ backgroundColor: "purple" }} onClick={() => { increment(user.id); } }>increment</button>
                </div>);
            })}
        </div></>
    );

}
export default Userlist;