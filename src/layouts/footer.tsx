import { CategoryComponent } from "../components/category";
import { DividerUI } from "../components/UIs/divider";

const kategoriContent: Record<string, React.ReactNode> = {
  "1": <>Digital & Teknologi</>,
  "2": <>Pemasaran</>,
  "3": <>Manajemen Bisnis</>,
  "4": <>Pengembangan Diri</>,
  "5": <>Desain</>,
};

const perusahaanContent: Record<string, React.ReactNode> = {
  "1": <>Tentang Kami</>,
  "2": <>FAQ</>,
  "3": <>Kebijakan Privasi</>,
  "4": <>Ketentuan Layanan</>,
  "5": <>Bantuan</>,
};

const komunitasContent: Record<string, React.ReactNode> = {
  "1": <>Tips Sukses</>,
  "2": <> Blog</>,
};

export const FooterLayout = () => {
  return (
    <footer className="flex flex-col pt-10">
      <div className="flex w-full flex-col justify-between gap-5 pb-3 md:flex-row md:pb-7">
        <div className="flex max-w-96 flex-col gap-2">
          <img className="h-[52px] max-w-40" src="/assets/logo.png" alt="Logo videobelajar" />
          <h3 className="mt-4 text-heading6 font-bold">
            Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id
          </h3>
          <div className="mt-1 flex flex-col gap-3">
            <p className="text-bodyMedium font-medium">
              Jl. Usman Effendi No. 50 Lowokwaru, Malang
            </p>
            <p className="text-bodyMedium font-medium">+62-877-7123-1234</p>
          </div>
        </div>
        <div className="m-0 my-5 flex flex-col gap-10 md:flex-row md:items-start md:justify-start">
          <CategoryComponent title="Kategori" content={kategoriContent} />
          <CategoryComponent title="Perusahaan" content={perusahaanContent} />
          <CategoryComponent title="Komunitas" content={komunitasContent} />
        </div>
      </div>
      <DividerUI />
      <div className="flex w-full flex-col-reverse justify-start gap-2 py-5 md:flex-row md:justify-between">
        <p className="text-bodyMedium font-light">@2023 Gerobak Sayur All Rights Reserved.</p>
        <div className="flex flex-row gap-2">
          <div className="circle cursor-pointer hover:opacity-80">
            <img src="/assets/In.png" alt="Logo" />
          </div>
          <div className="circle cursor-pointer hover:opacity-80">
            <img style={{ width: "7px", height: "11px" }} src="/assets/facebook.png" alt="Logo" />
          </div>
          <div className="circle cursor-pointer hover:opacity-80">
            <img src="/assets/instagram.png" alt="Logo" />
          </div>
          <div className="circle cursor-pointer hover:opacity-80">
            <img src="/assets/twitter.png" alt="Logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};
