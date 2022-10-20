import Header from "./Header";
import Footer from "./Footer";
import CardList from "./../../organism/CardList";
const HomeTemplate = () => {
  return (
    <>
      <Header />
      <div className="Body">
        <div>
          <h1>Termurah di Seluruh Indonesia</h1>
          <CardList />
        </div>
        <div>
          <h2>Produk Mobile Legends terpopuler</h2>
          <CardList />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default HomeTemplate;