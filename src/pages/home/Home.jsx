import "./home.css";
import "react-slideshow-image/dist/styles.css";

import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Img from '../../assets/home.jpg';

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "800px",
  width: "100%",
};
const slideImages = [
  {
    url: "https://images.pexels.com/photos/1004877/pexels-photo-1004877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    caption: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi non, labore laboriosam ipsam, atque officiis recusandae veritatis quaerat earum facilis consequuntur cum ullam cumque omnis eveniet fugiat repellendus nulla quidem.",
  },
  {
    url: "https://images.pexels.com/photos/1884583/pexels-photo-1884583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    caption: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi non, labore laboriosam ipsam, atque officiis recusandae veritatis quaerat earum facilis consequuntur cum ullam cumque omnis eveniet fugiat repellendus nulla quidem.",
  },
  {
    url: "https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    caption:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi non, labore laboriosam ipsam, atque officiis recusandae veritatis quaerat earum facilis consequuntur cum ullam cumque omnis eveniet fugiat repellendus nulla quidem.",
  },
];

const Home = () => {
  return (
    <>
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              <span style={spanStyle}>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
    <div className="home-info">
      <div className="description">
          <h1>Welcome to our ecommerce</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam distinctio hic rem, praesentium, maxime, magni nam fugit eius reprehenderit alias provident esse omnis? Eveniet dolorum recusandae, fugit veniam modi voluptas.</p>

      </div>
      {/* <div className="image">
         <img src={Img} alt="homeImage" />
      </div> */}
    </div>
    </>
  );
};

export default Home;
