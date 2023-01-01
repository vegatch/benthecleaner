
import React from "react";
// import background from '../pics/house-cleaning.jpg'
import { HomeContent } from "../Components/homeContent";
// import '../CSS/home.css';

const Home = () => {
  return (
    <div>     
      {/* <h1> Welcome to our home page</h1> */}
        <div>
            <h1>
                <HomeContent/>
                {/* <img src={background} alt="Benjaskya Logo" /> */}
            </h1>
        </div>
    </div>
  );
};
  
export default Home;