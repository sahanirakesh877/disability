import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Carousel = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  const items = [
    <div className="item " data-value="1">
      <img
        src="https://images.pexels.com/photos/6195666/pexels-photo-6195666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="img-fluid"
        style={{ width: "100%", position: "relative" }}
      />
      <div className="overlay-text">
        <h2 className="text-black caraosel-title ">Helping People with Disabilities</h2>
      </div>
    </div>,
    <div className="item" data-value="1">
      <img
        src="https://images.pexels.com/photos/3036577/pexels-photo-3036577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="img-fluid"
        style={{ width: "100%", position: "relative" }}
      />
      <div className="overlay-text">
        <h2 className="text-black  caraosel-title">Supporting Disabled Individuals</h2>
      </div>
    </div>,
    <div className="item" data-value="1">
      <img
        src="https://img.freepik.com/free-photo/team-supporting-invalid-coworker_23-2148476555.jpg?t=st=1710154272~exp=1710157872~hmac=dd2e2b58bcdb0244315b56340f696d44c335b4174e20e420857f1e85e548928e&w=826"
        alt=""
        className="img-fluid"
        style={{ width: "100%", position: "relative" }}
      />
      <div className="overlay-text">
        <h2 className="text-black caraosel-title ">Empowering People with Disabilities</h2>
      </div>
    </div>,
  ];
  return (
    <>
      <AliceCarousel
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={1500}
        animationDuration={1500}
     
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
      />
    </>
  );
};

export default Carousel;
