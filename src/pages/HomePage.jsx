import React from "react";
import Navbar from "../components/navbar";
import "../style/home.css";
import Graph from "../components/Graph";
import GreenCirlce from '../assets/material-symbols_check-circle-green.svg'
import YellowCircle from '../assets/material-symbols_check-circle-yellow.svg'


const HomePage = () => {
  return (
    <div>
      <Navbar />

      <div className="body">
        <div className="user-container">
          <div className="user-info">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "40px",
                marginTop: "50px",
              }}
            >
              <div style={{ display: "flex", color: "white" }}>
                <h3>👋 Welcome Suresh garu, </h3>
                <svg
                  width="35"
                  height="31"
                  viewBox="0 0 35 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginTop: "17px", marginLeft: "10px" }}
                >
                  <path
                    d="M21.4065 0.237263C20.6068 -0.131814 19.7456 -0.0702992 19.0075 0.421803L9.22692 7.6188H2.27597C1.04572 7.6188 0 8.66452 0 9.89478V20.2289C0 21.4592 1.04572 22.5049 2.27597 22.5049H9.16541L19.0075 29.7634C19.438 30.071 19.8686 30.194 20.3607 30.194C20.7298 30.194 21.0374 30.1325 21.4065 29.9479C22.1446 29.5789 22.6367 28.7792 22.6367 27.918V2.26719C22.6367 1.40601 22.2061 0.60634 21.4065 0.237263ZM1.29176 20.2289V9.89478C1.29176 9.34116 1.78386 8.84906 2.33748 8.84906H8.85784V21.2746H2.27597C1.72236 21.2746 1.29176 20.7825 1.29176 20.2289ZM21.4065 27.918C21.4065 28.3486 21.2219 28.6562 20.8528 28.8407C20.4838 29.0253 20.1147 28.9637 19.7456 28.7792L10.0881 21.6437V8.54149L19.7456 1.40601C20.0532 1.15996 20.4838 1.15996 20.8528 1.3445C21.2219 1.52903 21.4065 1.89811 21.4065 2.26719V27.918Z"
                    fill="#F7C35F"
                  />
                  <path
                    d="M24.6039 18.2605C24.2348 18.2605 23.9888 18.5066 23.9888 18.8756C23.9888 19.2447 24.2348 19.4908 24.6039 19.4908C27.0644 19.4908 29.0328 17.5224 29.0328 15.0618C29.0328 12.6013 27.0644 10.6329 24.6039 10.6329C24.2348 10.6329 23.9888 10.879 23.9888 11.2481C23.9888 11.6171 24.2348 11.8632 24.6039 11.8632C26.3878 11.8632 27.8026 13.278 27.8026 15.0618C27.8026 16.8457 26.3878 18.2605 24.6039 18.2605Z"
                    fill="#F7C35F"
                  />
                  <path
                    d="M24.6039 22.5664C28.7253 22.5664 32.1085 19.1832 32.1085 15.0619C32.1085 10.9405 28.7253 7.5573 24.6039 7.5573C24.2348 7.5573 23.9888 7.80336 23.9888 8.17243C23.9888 8.54151 24.2348 8.78756 24.6039 8.78756C28.0486 8.78756 30.8782 11.6171 30.8782 15.0619C30.8782 18.5066 28.0486 21.3362 24.6039 21.3362C24.2348 21.3362 23.9888 21.5822 23.9888 21.9513C23.9888 22.3204 24.2963 22.5664 24.6039 22.5664Z"
                    fill="#F7C35F"
                  />
                  <path
                    d="M24.6039 4.72775C24.2348 4.72775 23.9888 4.9738 23.9888 5.34287C23.9888 5.71195 24.2348 5.958 24.6039 5.958C29.6479 5.958 33.7693 10.0794 33.7693 15.1234C33.7693 20.1675 29.6479 24.2888 24.6039 24.2888C24.2348 24.2888 23.9888 24.5349 23.9888 24.9039C23.9888 25.273 24.2348 25.5191 24.6039 25.5191C30.3246 25.5191 34.9996 20.8441 34.9996 15.1234C34.9996 9.34121 30.3246 4.72775 24.6039 4.72775Z"
                    fill="#F7C35F"
                  />
                </svg>
              </div>
              <div
                style={{
                  display: "flex",
                  color: "white",
                  marginLeft: "33px",
                  fontStyle: "livvic",
                  fontSize: "20px",
                }}
              >
                Cultivated Area
                <div style={{ marginLeft: "65px" }}>: &nbsp;</div>
                <div> 10 Acres</div>
              </div>
              <div style={{ display: "flex" }}>
                {" "}
                <div
                  style={{
                    display: "flex",
                    color: "white",
                    marginLeft: "33px",
                    fontStyle: "livvic",
                    fontSize: "20px",
                  }}
                >
                  Your Existing Crop &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;4
                  Acres Tomato
                </div>{" "}
                <img src="tomato.svg" width="50" height="33" alt="tomato"></img>
              </div>

              <div style={{ display: "flex" }}>
                <div
                  style={{
                    display: "flex",
                    color: "white",
                    marginLeft: "240px",
                    fontStyle: "livvic",
                    fontSize: "20px",
                  }}
                >
                  {" "}
                  6 Acres Onion{" "}
                </div>
                <img src="onion.svg" width="50" height="33" alt="onion"></img>
              </div>

              <div style={{ display: "flex" }}>
                <div
                  style={{
                    display: "flex",
                    color: "white",
                    marginLeft: "28px",
                    fontStyle: "livvic",
                    fontSize: "20px",
                    width: "200px",
                  }}
                >
                  {" "}
                  Approximate Yeilding month{" "}
                </div>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      display: "flex",
                      color: "white",
                      fontStyle: "livvic",
                      fontSize: "20px",
                    }}
                  >
                    {" "}
                    &nbsp;: January 2024{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="graph">
            <Graph />
          </div>
        </div>

        <div className="crop-suggestion-container">
          <div className="data-display">
            <div className="container"></div>
            <img src="image1.png" alt="image1" className="crop-img" />
          </div>

          <div className="crop-suggest">
            <div className="heading">
              <p className="head">Suggested Crops Information</p>
              <p className="sub-heading">
                Below suggested crops are based on the demand, location, and
                soil type-subsides will be higher if you cultivate suggest
                crops.
              </p>
            </div>
            <div className="suggestions">
              <div className="type">
                <p className="type-suggested">Highly suggested</p>
                <ul className="crops">
                  <li className="crop"><img src={GreenCirlce} alt="" /> Rice - 2Acres</li>
                  <li className="crop"><img src={GreenCirlce} alt="" /> Wheat - 8Acres</li>
                </ul>
              </div>
              <div className="type">
                <p className="type-suggested">Moderately suggested</p>
                <ul className="crops">
                  <li className="crop"><img src={YellowCircle} alt="" />Chilli- 2Acres</li>
                  <li className="crop"><img src={YellowCircle} alt="" />Onion - 8Acres</li>
                </ul>
              </div>
              <div className="type">
                <p className="type-suggested">Not suggested</p>
                <ul className="crops">
                  <li className="crop"><img src={require('../assets/x.png')} alt=""className="x" />Tomato</li>
               
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
