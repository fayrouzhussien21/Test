import { useState } from "react";

const Adduser=(props)=>{
    const [userName,setuserName]=useState("");
    const [userAge,setUserAge]=useState("");
    const setUserNameHandler=(e)=>
    {
        setuserName(e.target.value);
    }
    const setAgeNameHandler=(e)=>
    {
        setUserAge(e.target.value);
    }
   const addUserHandler=(e)=>{
e.preventDefault();
if(+userAge<1)return;
if(userName.trim().length==0||userAge.trim().length==0)return;
props.onAddUser(userName,userAge);
setUserAge('');
setuserName('');
    }
    return(
        <><h3 style={{ color: "white" }}>Enter your name and age :</h3><div className="card" style={{ width: "500px" }}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="name" className="col-11">Name</label>
                <input id="name" className="col-11 rounded" value={userName} onChange={setUserNameHandler} />
                <label htmlFor="age" className="col-11">Age</label>
                <input id="age" className="col-11 rounded" value={userAge} onChange={setAgeNameHandler} />
                <button type="submit" className="btn btn-success my-3" style={{ backgroundColor: "purple" }}>submit</button>
            </form>
        </div></>
    );

}

export default Adduser;