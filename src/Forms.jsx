import React, { useState } from 'react'
import bird from "./twitterBird.jpg"

function Forms(props) {
    const [key, setKey] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    
    const [data, setData] =useState([]);
    
    const handle = (e) =>{
        e.preventDefault();
        const newEntry = {
            id: key,
            email:email,
            password:password
        };
        setData([...data, newEntry])
        setKey(key + 1);
        console.log(data)
    }

    const clear =() =>{
        setEmail("");
        setPassword("");
    }

  return (
    <>
    <article className='p-5'><img className='bird' src={bird}/></article><br/>
    
    <b style={{fontSize:"60px",marginLeft:"40px",fontFamily:"Verdana",marginTop:"5px"}}>Happening now</b><br/>
    <div className='container mt-3'>
    <b style={{fontSize:"30px", marginLeft:"25px"}}>Join Twitter today.</b>
    </div>
    <br/>
    <div className="container" style={{marginTop:"25px",marginLeft:"25px"}}>
    <button style={{width:"50%",borderRadius:"30px",border:"2px solid #f1f1f1",fontWeight: "500"}} className="btn" type="button"><i className="fa fa-google mx-2" aria-hidden="true"></i>Sign up with Google</button><br/>
    <button style={{width:"50%",borderRadius:"30px",border:"2px solid #f1f1f1"}} className="btn my-3" type="button"><i className="fa fa-apple mx-2" aria-hidden="true"></i><b>Sign up with Apple</b></button>
    {/* <hr className='w-50'/> */}
    <p className='tag'><span style={{fontSize:"15px"}}>or</span></p>
    
    <button style={{width:"50%",borderRadius:"30px",border:"2px solid #f1f1f1",background:"dodgerblue",color:"white"}} className="btn my-3" type="button"><b>Sign up with phone or email</b></button>
    <p className='w-50' style={{fontSize:"11px"}}>By signing up, you agree to the <a className="btn-link" style={{textDecoration:"none"}}>Terms of Service</a> and <a style={{textDecoration:"none"}} className="btn-link">Privacy Policy</a>, including <a style={{textDecoration:"none"}} className="btn-link">Cookie Use.</a></p>
    </div>
    
 
    </>
  )
}

export default Forms