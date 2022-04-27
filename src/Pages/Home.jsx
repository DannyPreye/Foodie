import React from "react";
import { Link } from "react-router-dom";
import chef from "../images/chef.png";

import "../css/style.css"


function Home() {
    console.log("api-key", process.env.API_KEY)
    const time = new Date();

    const hours = time.getHours();
    function determineTime() {
        if (hours < 12) {
            return ("Good Morning, Ready for Breakfast!");
        } else if (hours => 12 && hours < 18) {
            return ("Good Afternoon, Ready for Lunch!")
        } else if (hours > 18 && hours < 24) {
            return ("Good Night, Ready for Dinner!")
        }

    }
    return (



        <header className="header">

            <div className="header-texts">
                <h1 className="greeting">{determineTime()}</h1>
                <h1 className="home-texts"><strong className="colored">Eat Today, <br></br> <strong className="second-line"> <strong className="colored-white">Live</strong> another day! </strong> </strong></h1>
                <p className="home-p">We provide the best and the most delicious food, based on high quality ingredients that are
                    produced and maintained by high tech machines, and cooked by our very best.</p>
                <h3 className="home-btn" > <Link to="/products">ORDER NOW</Link></h3>
            </div>

            <div className="header-img">
                <img className="home-img" src={chef} alt="home-img"></img>
            </div>
        </header>

    );
}

export default Home;