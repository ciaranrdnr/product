import Carousel from "react-multi-carousel";
import img1 from "../../assets/game-1.webp";
import img4 from "../../assets/game-2.webp";
import img2 from "../../assets/game-3.webp";
import img3 from "../../assets/game-4.webp";
import img5 from "../../assets/game-5.webp";
import img6 from "../../assets/game-6.webp";
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
      <Card
        title="100 Apex Coins"
        game="Apex Legends"
        src={img1}
        stok={12}
        disc={50}
        price={200000}
      />
      <Card
        title="2000 UC"
        game="PUBG Mobile"
        src={img2}
        stok={1000}
        disc={50}
        price={200000}
      />
      <Card
        title="4000 Diamonds"
        game="Mobile Legends"
        src={img3}
        stok={1000}
        disc={20}
        price={200000}
      />
      <Card
        title="1000 Diamonds"
        game="Play Together"
        src={img4}
        stok={2}
        disc={50}
        price={200000}
      />
      <Card
        title="230 Voucher"
        game="GTA San Andreas"
        src={img5}
        stok={1000}
        disc={50}
        price={200000}
      />
      <Card
        title="100 Apex Coins"
        game="Garena FF"
        src={img6}
        stok={1000}
        disc={10}
        price={200000}
      />
      <Card
        title="2000 UC"
        game="PUBG Mobile"
        src={img1}
        stok={1000}
        disc={50}
        price={200000}
      />
      <Card
        title="4000 Diamonds"
        game="Mobile Legends"
        src={img2}
        stok={1000}
        disc={50}
        price={200000}
      />
      <Card
        title="1000 Diamonds"
        game="Play Together"
        src={img3}
        stok={100}
        disc={50}
        price={200000}
      />
      <Card
        title="230 Voucher"
        game="Arena of Valor"
        src={img4}
        stok={100}
        disc={50}
        price={200000}
      />
    </Carousel>
  );
};
export default CardList;
