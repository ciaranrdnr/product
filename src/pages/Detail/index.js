import { useState } from "react";
import CardList from "../../components/CardList";
import Indicator from "../../components/indicator";
import Nav from "../../components/navbar";
import Btn from "../../components/btn";
import IconLike from "../../assets/icon/heart.js";
import imgGame from "../../assets/game-1.png";

const Detail = () => {
  const [fill, setFill] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [bg, setBg] = useState(false);
  let [numCart, setNumCart] = useState(0);
  const showBg = () => {
    if (window.scrollY > 20) {
      setBg(true);
    } else {
      setBg(false);
    }
    console.warn(bg);
  };
  window.addEventListener("scroll", showBg);
  return (
    <div className="Detail">
      {/* Detailhead */}
      <Nav numCart={numCart} bg={bg} />

      <div className="DetailHead">
        <img className="Img-detail" src={imgGame} alt="game" />
        <div className="Top">
          <div className="Title">
            <h1>366 Diamonds</h1>
            <button onClick={() => setFill(!fill)}>
              <IconLike fill={fill} />
            </button>
          </div>
          <div className="Brand Grey-text">Mobile Legends</div>
        </div>
        <div className="Mid">
          <span className="Price">Rp100.000</span>{" "}
          <span className="Grey-text">per 1 Top Up</span>
        </div>
        <div className="Bottom">
          <Indicator num="50%" fill="Fill-red" />{" "}
          <span className="Sale-price">Rp200.000</span>
        </div>
        {/* DetailDesc */}
      </div>
      <div className="DetailDesc">
        <h2>Deskripsi Produk</h2>
        <p className={isVisible ? "Show" : ""}>
          Format Pengisian: - Awal Pembuatan log facebook, pengisian menggunakan
          open id. Jika, - Awal pembuatan akun log garena, harus bind terlebih
          dahulu ke facebook. kalau udah bind, kirim email/no hp beserta pasword
          fb tsb. cara bind: * download apk garena * login menggunakan akun
          garena * Klik me * Klik Facebook * Klik Hubungkan ke Facebook Catatan:
          voucher dijamin legal, karena pengisiannya dari kiosgamer langsung
        </p>
        <div
          className="Btn-text"
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          {isVisible ? <>Tutup</> : <>Selengkapnya</>}
        </div>
      </div>

      <div className="DetailOthers">
        <div className="Top">
          <h2>Pengiriman Tercepat</h2>
          <div className="Btn-text" onClick={() => {}}>
            Lihat Semua
          </div>
        </div>
        <p className="Grey-text">
          Produk dari penjual-penjual yang memberi Garansi Pengiriman 10 menit
        </p>
        <CardList />
      </div>
      <div className="Footer">
        <Btn title="Tambah ke Troli" onClick={() => setNumCart(numCart + 1)} />
      </div>
    </div>
  );
};
export default Detail;
