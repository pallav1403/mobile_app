import React from 'react'
import NavComp from './NavComp'

export default function Home() {
    return (
        <>
        <NavComp/>
        <div className="my-5">
          <h1>Welcome!!</h1>
          
            <h1 className="text-center"  id="brand" >Get 30% discount On each product</h1>
 
 
        </div>
 <div className="container-fluid mb-5" >
  <div className="row gy-10">
   <div className="col-10 mx-auto">
    <div className="row gy-10">
     
     <div className="col-md-4 col-10 mx auto">
 
       <div className="card" >
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnyDo5wjaqDwVlr9vfT2atFsC48-t0yt9NDw&usqp=CAU" alt=""/>
       <div className="card-body">
         <h5 className="card-title">Samsung A21</h5>
         <p className="card-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, veritatis!</p>
         <p><i class="fa fa-star-o" aria-hidden="true"></i></p>
         
       </div>
       </div>
   </div>
 
 
   <div className="col-md-4 col-10 mx auto">
 
       <div className="card" >
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJLAC60It4dP_q7gS048ddTan66bpc0ehfg&usqp=CAU" alt=""/>
       <div className="card-body">
         <h5 className="card-title">Samsung A51</h5>
         <p className="card-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, veritatis!</p>
         <p><i class="fa fa-star-o" aria-hidden="true"></i></p>
       </div>
       </div>
 </div>
 
 <div className="col-md-4 col-10 mx auto">
 
 <div className="card" >
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqTHpdie26REudetmiokNTteo4HGZBu9DugA&usqp=CAU" alt=""/>
 <div className="card-body">
   <h5 className="card-title">Samsung M21</h5>
   <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, veritatis! </p>
   <p><i class="fa fa-star-o" aria-hidden="true"></i></p>
 </div>
 </div>
 </div>
 
 <div className="col-md-4 col-10 mx auto">
 
 <div className="card" >
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS959wmGOMdxEyt-XEYJOeZw0ZQegZtpxRnug&usqp=CAU" alt=""/>
 <div className="card-body">
   <h5 className="card-title">Samsung M41</h5>
   <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, veritatis! </p>
   <p><i class="fa fa-star-o" aria-hidden="true"></i></p>
 </div>
 </div>
 </div>
 
 <div className="col-md-4 col-10 mx auto">
 
 <div className="card" >
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx1OgLjvhLw0iALq-A4jT8UzPbvq439X-K0Q&usqp=CAU" alt=""/>
 <div className="card-body">
   <h5 className="card-title">Nokia A21</h5>
   <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, veritatis! </p>
   <p><i class="fa fa-star-o" aria-hidden="true"></i></p>
 </div>
 </div>
 </div>
 
 <div className="col-md-4 col-10 mx auto">
 
 <div className="card" >
   <img src="data:image/jpeg;base64,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" alt=""/>
 <div className="card-body">
   <h5 className="card-title">iphone Xs</h5>
   <p className="card-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, veritatis!</p>
   <p><i class="fa fa-star-o" aria-hidden="true"></i></p>
 </div>
 </div>
 </div>
 
 
 
 
 
 
 
 
 
 
  </div>
   </div>
    </div>
     </div>
 
      </>
    )
}
