import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../card";
const CardList = (props) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: { breakpoint: { max: 1024, min: 750 }, items: 4, slidesToSlide: 1 },
    bigMobile: {
      breakpoint: { max: 750, min: 500 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: { breakpoint: { max: 500, min: 0 }, items: 2, slidesToSlide: 1 },
  };
  return (
    <Carousel
      className="Carousel"
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={2000}
      arrows={false}
      keyBoardControl={true}
    >
      <Card title="100 Apex Coins" game="Apex Legends" />
      <Card title="2000 UC" game="PUBG Mobile" />
      <Card title="4000 Diamonds" game="Mobile Legends" />
      <Card title="1000 Diamonds" game="Play Together" />
      <Card title="230 Voucher" game="Arena of Valor" />
      <Card title="100 Apex Coins" game="Apex Legends" />
      <Card title="2000 UC" game="PUBG Mobile" />
      <Card title="4000 Diamonds" game="Mobile Legends" />
      <Card title="1000 Diamonds" game="Play Together" />
      <Card title="230 Voucher" game="Arena of Valor" />
    </Carousel>
  );
};
export default CardList;
