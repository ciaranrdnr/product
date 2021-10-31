import { useState } from "react";

import CardList from "../../components/CardList";
import Indicator from "../../components/indicator";
import Btn from "../../components/btn";
import IconLike from "../../assets/icon/heart.js";
import IconCart from "../../assets/icon/cart.js";
import IconShare from "../../assets/icon/share.js";
import IconBack from "../../assets/icon/back.js";
import imgGame from "../../assets/game-1.png";
import { Link } from "react-router-dom";

const Detail = () => {
  const [fill, setFill] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  let [numCart, setNumCart] = useState(0);
  
  return (
    <div className="Detail">
      {/* Detailhead */}
      <div className="DetailHead">
        <div>
          <div className="Btn-top">
            <Link to="/">
              <div className="Btn-back">
                <button className="Btn-icon  ">
                  <IconBack />
                </button>
              </div>
            </Link>

            <div className="BtnTop-right">
              <button className="Btn-icon">
                <IconShare />
              </button>
              <button className="Btn-icon">
                <IconCart />
                {numCart>0?<div className="Circle">{numCart}</div>:<></>}
                
              </button>
            </div>
          </div>
          <img className="Img-detail" src={imgGame} alt="game" />
        </div>
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
        <p className={isVisible?"Show":""}>
          Format Pengisian: - Awal Pembuatan log facebook, pengisian menggunakan
          open id. Jika, - Awal pembuatan akun log garena, harus bind terlebih
          dahulu ke facebook. kalau udah bind, kirim email/no hp beserta pasword
          fb tsb. cara bind: * download apk garena * login menggunakan akun
          garena * Klik me * Klik Facebook * Klik Hubungkan ke Facebook Catatan:
          voucher dijamin legal, karena pengisiannya dari kiosgamer langsung
        </p>
        <div className="Btn-text" onClick={() => {setIsVisible(!isVisible)}}>
          {isVisible?<>Tutup</>:<>Selengkapnya</>}
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
<CardList/>
        
      </div>
      <div className="Footer">
        <Btn title="Tambah ke Troli"  onClick={()=>setNumCart(numCart+1)}/>
      </div>
    </div>
  );
};
export default Detail;
