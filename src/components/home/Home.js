import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import "./Home.css";
import Product from "./Product";

function Home() {
  const slideImages = [
    "https://cdn.mos.cms.futurecdn.net/pU9zAUMeSDqLDACkcwUpoU-1200-80.jpg",
    "https://cdn.vox-cdn.com/thumbor/o9meVVKDNd6iDWySos_Jvben7ns=/0x0:2848x1549/1200x800/filters:focal(1197x548:1651x1002)/cdn.vox-cdn.com/uploads/chorus_image/image/52282307/AmazonPrimeVideo_com_HiRes.0.jpeg",
    "https://www.howtogeek.com/wp-content/uploads/2019/07/img_5d27922cd1b08.jpg",
  ];
  
  return (
    <div className="home">
      <Slide>
        <img
          className="home__image"
          src={slideImages[0]}
          alt="amazon-prime banner"
        />
        <img
          className="home__image"
          src={slideImages[1]}
          alt="amazon-prime banner"
        />
        <img
          className="home__image"
          src={slideImages[2]}
          alt="amazon-prime banner"
        />
      </Slide>
      <div className="home__content">
        <div className="home__row">
          <Product
            id="1"
            title="iOttie Easy One Touch 4 Dash & Windshield Car Mount Phone Holder Desk Stand Pad & Mat for iPhone, Samsung, Moto, Huawei, Nokia, LG, Smartphones"
            price={56.63}
            rating={4}
            image="https://m.media-amazon.com/images/I/718NVofDrCL._AC_UY218_.jpg"
          />
          <Product
            id="2"
            title="Bose A20 Aviation Headset with Bluetooth Dual Plug Cable, Black"
            price={11.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/71ekWFCunfL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Samsung Galaxy Buds+ Plus, True Wireless Earbuds w/improved battery and call quality 
          (Wireless Charging Case included), Black – US Version"
            price={11.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/51ryw1he7xL._AC_UY218_.jpg"
          />
          <Product
            id="4"
            title="Sony Noise Cancelling Headphones WH1000XM3: Wireless Bluetooth Over the Ear Headset with Mic for
           Phone-Call and Alexa Voice Control - Industry Leading Active Noise "
            price={122.98}
            rating={5}
            image="https://m.media-amazon.com/images/I/51IdLe-+6kL._AC_UY218_.jpg"
          />
          <Product
            id="5"
            title="iOttie Easy One Touch 4 Dash & Windshield Car Mount Phone Holder Desk Stand Pad & Mat for iPhone, Samsung, Moto, Huawei, Nokia, LG, Smartphones"
            price={56.63}
            rating={4}
            image="https://m.media-amazon.com/images/I/718NVofDrCL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Wyze Cam 1080p HD Indoor Wireless Smart Home Camera with Night Vision, 2-Way
           Audio, Works with Alexa & the Google Assistant, One Pack, White - WYZEC2"
            price={545.55}
            rating={5}
            image="https://m.media-amazon.com/images/I/71sesDsw95L._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
