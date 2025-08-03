import React from "react";

const Home = () => {
  return (
    <>
      <div className="conatiner ">
        <h1 className="mainText-wrapper">Home Container</h1>
        <div className="main-container">
          <div className="cart-wrapper card-flex-wrapper">
            <div className="items img-wrapper">
              <img
                src="https://freepngimg.com/thumb/apple_iphone/133290-11-pic-apple-iphone-free-download-png-hd.png"
                alt="img"
              />
            </div>
            <div className="items text-wrapper">
              <span>I-Phone</span> &nbsp;
              <span>Price: $1000.00</span>
            </div>
            <div className="items btn-wrapper">
              <button>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
