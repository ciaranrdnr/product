import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardList from "../../components/CardList";

const Home = () => {
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
export default Home;
