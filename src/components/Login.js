import React,{useState} from 'react'
import NavComp from './NavComp'
import ReactDOM from 'react'
import {BrowserRouter, Link, Redirect} from 'react-router-dom';
import ShowMobile from './ShowMobile';

export default function Login() {
const [value,setValue]=useState(true)

function changePage(){
 setValue(false)
}

if(value){
 return (

        <>
        <NavComp/>
        <div className="container-fluid bg"  id="bg">
  <div className="row ">
   <div className="col-md-4 col-sm-4 col-xs-12"></div>  
    <div className="col-md-4 col-sm-4 col-xs-12">
     
    <form className="form-container" >
        <h1 className="text-center1">Login</h1>
   <div className="form-group">
     <label htmlFor="exampleInputEmail1">Email address</label>
     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email id" required/>
     
   </div>
   <div className="form-group">
     <label htmlFor="exampleInputPassword1">Password</label>
     <input type="password" className="form-control" id="exampleInputPassword1" placeholder="password"/>
   </div>
  
   <div className="form-group form-check">
     <input type="checkbox" className="form-check-input" id="exampleCheck1" />
     <label className="form-check-label" htmlFor="exampleCheck1">check me out</label>
   </div>
   <button type="submit" className="btn btn-success btn-block" onClick={changePage} >submit</button>
   
 </form>
            
         
     </div>
     </div>
         </div>
         </>
    )
 }
 else if(!value){
   return <Redirect to="/showmobile"/>
 }
}



