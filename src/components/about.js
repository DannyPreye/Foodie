import React from "react";
import Chef1 from "./Chef1.png"




function About(){
    
    return(
    <section className="about">
<div className="about-us">
<div className="about-info">
<h1 className="about-heading">About Us</h1>
    <p className="first-p">We are the resturant that provides a variety of food and beverages of the highest quality through a process
    of manufacture by experts and a professional way to utilize high technology and high qulaity of ingredients,
    and this is all prepared only for <strong className="colored">our customers</strong></p>
    <p className="second-p">In contrast to other side hustle's resturant, foodie' was made was the explicit expectaion to appear as
    something else. we realize numerous individuals love our special meal, yet a large number of them loathe
    or are unconcious of the regular unfortunate fixings that make run-of-the-mill foodie' nourishments <strong className="colored">tates so good</strong></p>

    
    </div>
<div className="about-img">
    <img className="about-chef" src={Chef1} alt=""></img>

    </div>
    
</div>
    
    
    </section>
    );
}

export default About;