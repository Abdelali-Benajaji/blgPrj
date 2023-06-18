import React from "react";
import './style1.css';
import Blog2 from "./Blog2";


function Blog1() {
    const style1={width:"120px", borderRadius:"300px 300px 0 0px",height:"270px"}
    const style2={width:"120px",height:"410px"}
    const style3={width:"70px"}
    return (
      <div>
       <div class="container">
       <h1 class="title">The
              <br/>
              Well-being
             <br/>
             Journal
       </h1>
    <img class="image" src="image1.PNG" alt="Image 1" style={style3}></img>
    <img class="image" src="logo.jpg" alt="Image 2" style={style1}></img>
    <img class="image" src="image2.PNG" alt="Image 3" style={style2}></img>
  </div>
  <div>
    <br/>
    <br/>
    <br/>
    <br/>
  </div>
  <div>
    <Blog2/>
  </div>
      </div>
    );
  }
export default Blog1;