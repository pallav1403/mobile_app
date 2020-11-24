import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom'
export default function ShowMobile() {

  let [value1,setValue1]=useState(true)
  let [value2,setValue2]=useState(true)
  const [value3,setValue3]=useState(true)
  const [value4,setValue4]=useState(true)
  const rep=  <div class="card1"><h1>1</h1><h5 className="card-title">Samsung A21</h5><p className="card-text"> price:100$</p></div>
  const rep2=<div class="card1"><h1>2</h1><h5 className="card-title">Micromax h1</h5><p className="card-text"> price:67$</p></div>
  const rep3=<div class="card1"><h1>3</h1><h5 className="card-title">iphone x</h5><p className="card-text"> price:200$</p></div>
  const rep4=<div class="card1"><h1>4</h1><h5 className="card-title">Nokia 31 </h5><p className="card-text"> price:98$</p></div>
useEffect(()=>{
  const ele=document.getElementById('copy')
  if(!value1){
  ReactDOM.render(rep,ele)
setValue1(true)}
})
useEffect(()=>{
  const ele=document.getElementById('copy')
  if(!value2){
  ReactDOM.render(rep2,ele)
  setValue2(true)
}
})

useEffect(()=>{
  const ele=document.getElementById('copy')
  if(!value3){
  ReactDOM.render(rep3,ele)
  setValue3(true)
}
})
useEffect(()=>{
  const ele=document.getElementById('copy')
  if(!value4){
  ReactDOM.render(rep4,ele)
  setValue4(true)
}
})

  


  

    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="#"><b>Mobile App</b></Link>
  
  <div className ="collapse navbar-collapse" id="navbarText">
    <ul className ="navbar-nav mr-auto">
      <li className ="nav-item active">
        <Link className ="nav-link" to="/showmobile"> Show Mobile</Link>
      </li>
     
    </ul>
    <span className="navbar-text">
     <ul className="navbar-nav mr-auto">
     <li className="nav-item">
        <Link className="nav-link" to="/logout">Logout</Link>
      </li>
     </ul>
    </span>
  </div>
</nav>
<div  >
</div>


{/* //=========================================================================== */}


<div className="container-fluid mb-30" id="copy" >
  <div className="row gy-10">
      
</div>
</div>

{/* ========================================================================================== */}







<div class="row">
  <div class="column"  >
    <div class="card" value={value1} onClick={()=>setValue1(false)}>
    <h1>1</h1>
   <h5 className="card-title">Samsung A21</h5>
   <p className="card-text"> Lorem ipsum dolor sit amet </p>
    </div>
  </div>
  <div class="column">
    <div class="card" onClick={()=>setValue2(false)}><h1>2</h1>
   <h5 className="card-title">Micromax h1</h5>
   <p className="card-text"> Lorem ipsum dolor sit amet </p></div>
  </div>
  <div class="column">
    <div class="card" onClick={()=>setValue3(false)}><h1>3</h1>
   <h5 className="card-title">iphone x</h5>
   <p className="card-text"> Lorem ipsum dolor sit amet </p></div>
  </div>
  <div class="column">
    <div class="card" onClick={()=>setValue4(false)}><h1>4</h1>
   <h5 className="card-title">Nokia 31</h5>
   <p className="card-text"> Lorem ipsum dolor sit amet </p></div>
  </div>
</div>



        </div>
    )
}

