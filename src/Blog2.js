import React from "react";
import './style.css';
import { NavLink } from "react-router-dom";
function Blog2(){
  const style3={fontSize : "13px"};
    return(
        <div>
            <div class="container1">
  <div class="row">
    <div class="cart">
      <img src="image3.PNG" alt="Image 1" />
      <div class="description">
        <h2>This is How cosMiTIK can Rejuvenate your Appearance...</h2>
        <NavLink to='plus1'>
        <a href="<Blog3/>">PLUS<span class="glyphicon glyphicon-play" style={style3}></span></a>
        </NavLink>
      </div>
    </div>
    <div class="cart">
      <img src="image4.PNG" alt="Image 2" />
      <div class="description">
        <h2>Hidden Advantages of cosMITIK for Healthy Skin...</h2>
          <NavLink to='/plus2'>
          <a href="">PLUS<span class="glyphicon glyphicon-play" style={style3}></span></a>
          </NavLink>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="cart">
      <img src="image5.PNG" alt="Image 3" />
      <div class="description">
        <h2>The 6 Characteristics of a Perfect Serum the cosMITIK...</h2>
        <NavLink to='plus3'>
        <a href="<Blog5/>">PLUS<span class="glyphicon glyphicon-play" style={style3}></span></a>
        </NavLink>
      </div>
    </div>
    <div class="cart">
      <img src="image6.PNG" alt="Image 4" />
      <div class="description">
        <h2>Protect Your Skin With cosMITIK...</h2>
        <NavLink to='plus4'>
        <a href="<Blog6/>">PLUS<span class="glyphicon glyphicon-play" style={style3}></span></a>
        </NavLink>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
export default Blog2;