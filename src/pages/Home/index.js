import Header from "../../components/Layout/header";
import Footer from "../../components/Layout/footer";
import CardList from "../../components/CardList";

const Home = (props) => {
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
