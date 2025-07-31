import { useRef, useState } from "react";
import { ButtonUI } from "../components/UIs/button";
import { DividerUI } from "../components/UIs/divider";
import { TextInput } from "../components/UIs/input";
import { HeaderLayout } from "../layouts/header";
import { mousePointerTracking, touchTracking } from "../utils/funtions";
import { FooterLayout } from "../layouts/footer";
import { ShowProductComponent } from "../components/showProduct";
import { ImageAsBackgroudUI } from "../components/UIs/imageAsBackground";
import { getData } from "../services/getData";
import { useNavigate } from "react-router-dom";
import type { Content } from "../utils/types";

export const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [contents, setContents] = useState<Content[]>(getData().getAllData().data);
  const navigate = useNavigate();
  const ulRef = useRef<HTMLUListElement>(null);

  const selectCategory = (selected: string) => {
    setSelectedCategory(selected);
    setContents(getData().getRandomizeData([3, 6, 9][Math.floor(Math.random() * 3)]).data);
  };

  return (
    <>
      <HeaderLayout />
      <div className="px-standard flex flex-col gap-16 py-14">
        <ImageAsBackgroudUI src="/assets/hero.jpg">
          <div className="flex flex-col items-center justify-center gap-5 px-4 py-10 md:px-20 lg:px-40">
            <h1 className="z-20 text-center text-heading3 font-bold text-white md:text-heading1">
              Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
            </h1>
            <p className="z-20 text-center font-sans text-bodySmall font-light text-white md:text-bodyMedium">
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran
              berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan
              interaktif yang akan meningkatkan pemahaman Anda.
            </p>
            <ButtonUI
              onClick={() => navigate("/products")}
              className="z-20 mt-4 max-w-96 px-2 py-3 text-bodySmall md:mt-5 md:text-bodyMedium"
            >
              Temukan Video Course untuk Dipelajari!
            </ButtonUI>
          </div>
        </ImageAsBackgroudUI>

        <div className="flex flex-col gap-3">
          <h2 className="text-heading3 font-bold">Koleksi Video Pembelajaran Unggulan</h2>
          <p className="text-bodySmall font-light md:text-bodyMedium">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
          <ul
            className="scrollbar-hide mt-5 flex touch-pan-x flex-row gap-10 overflow-x-auto overflow-y-hidden"
            style={{ WebkitOverflowScrolling: "touch" }}
            ref={ulRef}
            onMouseDown={(e) => {
              if (ulRef.current) {
                mousePointerTracking(e.nativeEvent, ulRef.current);
              }
            }}
            onTouchStart={(e) => {
              if (ulRef.current) {
                touchTracking(e.nativeEvent, ulRef.current);
              }
            }}
          >
            {["Semua Kelas", "Pemasaran", "Desain", "Pengembangan Diri", "Bisnis"].map(
              (category) => (
                <li
                  key={category}
                  className={`cursor-pointer font-sans font-medium hover:text-red-600 ${selectedCategory ? category === selectedCategory && "text-red-600" : category === "Semua Kelas" && "text-red-600"} flex flex-col gap-3`}
                  onClick={() => selectCategory(category)}
                >
                  {category}
                  <div
                    className={
                      selectedCategory
                        ? category === selectedCategory
                          ? "block"
                          : "hidden"
                        : category === "Semua Kelas"
                          ? "block"
                          : "hidden"
                    }
                  >
                    <DividerUI width="30px" color="#dc2626" thick="5px" />
                  </div>
                </li>
              )
            )}
          </ul>
          <ShowProductComponent contents={contents} />
        </div>
      </div>
      <ImageAsBackgroudUI src="/assets/hero.jpg">
        <div className="flex flex-col items-center justify-center gap-5 px-4 py-10 md:px-10 lg:px-40">
          <h6 className="z-10 text-white">NEWSLETTER</h6>
          <h1 className="z-20 text-center text-heading3 font-bold text-white md:text-heading1">
            Mau Belajar Lebih Banyak?
          </h1>
          <p className="z-20 text-center font-sans text-bodySmall font-light text-white md:text-bodyMedium">
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari
            program-program terbaik hariesok.id
          </p>
          <div className="relative w-full max-w-[400px]">
            <TextInput placeholder="Masukan Emailmu" label="Email" className="z-10 w-full py-3" />
            <ButtonUI
              variant="quaternary"
              className="absolute right-3 top-2/3 z-10 max-w-28 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              Subscribe
            </ButtonUI>
          </div>
        </div>
      </ImageAsBackgroudUI>
      <FooterLayout />
    </>
  );
};
