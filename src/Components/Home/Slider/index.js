import Slider from "react-slick";
import img1 from "../../../images/1.png";
import img2 from "../../../images/2.png";
import img3 from "../../../images/3.png";
import img4 from "../../../images/4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Sliders() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <section
      id="banner"
      className="slick-initialized slick-slider slick-dotted"
    >
      <Slider {...settings}>
        <img src={img1} alt="Im 1" />
        <img src={img2} alt="Im 2" />
        <img src={img3} alt="Im 3" />
        <img src={img4} alt="Im 4" />
      </Slider>
    </section>
  );
}
