import Btn from "../../components/Btn";
const Footer = ({ setNumCart, numCart }) => {
  return (
    <div className="Footer">
      <Btn title="Tambah ke Troli" onClick={() => setNumCart(numCart + 1)} />
    </div>
  );
};
export default Footer;
