import CardList from "../../../organism/CardList";
const DetailOthers = () => {
  return (
    <div className="DetailOthers">
      <div className="Top">
        <h2>Pengiriman Tercepat</h2>
        <div className="Btn-text">Lihat Semua</div>
      </div>
      <p className="Grey-text">
        Produk dari penjual-penjual yang memberi Garansi Pengiriman 10 menit
      </p>
      <CardList />
    </div>
  );
};
export default DetailOthers;
