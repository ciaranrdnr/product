import { useState, useRef } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";

const DetailDesc = () => {
  const sheetRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  function onDismiss() {
    setIsVisible(false);
  }
  const deskripsi = (
    <>
      Format Pengisian: - Awal Pembuatan log facebook, pengisian menggunakan
      open id. Jika, - Awal pembuatan akun log garena, harus bind terlebih
      dahulu ke facebook. kalau udah bind, kirim email/no hp beserta pasword fb
      tsb. cara bind: * download apk garena * login menggunakan akun garena *
      Klik me * Klik Facebook * Klik Hubungkan ke Facebook Catatan: voucher
      dijamin legal, karena pengisiannya dari kiosgamer langsung
    </>
  );
  return (
    <div className="DetailDesc">
      <h2>Deskripsi Produk</h2>
      <p>{deskripsi}</p>
      <div
        className="Btn-text"
        onClick={() => {
          setIsVisible(true);
        }}
      >
        Selengkapnya
      </div>
      <BottomSheet
        ref={sheetRef}
        open={isVisible}
        onDismiss={onDismiss}
        snapPoints={({ minHeight, maxHeight }) => [minHeight, maxHeight / 0.6]}
      >
        <h2>Deskripsi Produk</h2>
        <p className="Deskripsi">{deskripsi}</p>
      </BottomSheet>
    </div>
  );
};
export default DetailDesc;
