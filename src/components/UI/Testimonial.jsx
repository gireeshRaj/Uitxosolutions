import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        A straight-12 engine or inline-12 engine is a twelve-cylinder piston engine with all twelve cylinders mounted in a straight line along the crankcase.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Fantastic 12-Stroke Engine With A power of 1991 hp</h6>
            <p className="section__description">23 Reviews</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
       There is a list of all tyre patterns available in the brand CEAT. CEAT has 15 patterns available for Car Tyres. The price of tyres available ranges from ₹ 1,967/- to ₹ 10,329/-. You can click on the tyre pattern to know more about the tyre, Vehicle Compatibility, Sizes available, Features etc.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Tyre</h6>
            <p className="section__description">25 Reviews</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        The short-range light emitted from low beams is ideal for driving in traffic when you don't want to blind other drivers with your bright high beams. Driving in fog, rain and heavy snow calls for the use of your low beam lights. The downward directed light is best for cutting through these low-visibility situations.</p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">40 Megawatt Low Beam Lamp</h6>
            <p className="section__description">43 Reviews</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        A 5-Speed Shiftable automatic transmission provides the ease of use offered by an automatic transmission coupled with the sportiness and increased the fuel economy offered by a manual transmission.  A shiftable automatic transmissions do not have a clutch in the sense of a manual transmission.
</p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Brandix Manual Five Speed Gearbox</h6>
            <p className="section__description">67 Reviews</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
