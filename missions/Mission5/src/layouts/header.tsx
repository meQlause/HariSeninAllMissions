import { useState } from "react";

export const HeaderLayout = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <header>
        <img className="h-[60px]" src="/assets/logo.png" alt="Logo videobelajar" />
        <div>
          <div className="relative flex flex-row items-center gap-10">
            <img
              className="block h-[12px] w-[18px] cursor-pointer md:hidden"
              onClick={() => setShowDropdown(!showDropdown)}
              src="/assets/dropdown-icon.png"
              alt="Dropdown menu"
            />
          </div>
          <div className="hidden md:block">
            <div className="relative flex flex-row items-center gap-10">
              <div
                className="cursor-pointer"
                onMouseEnter={() => setShowDropdown(true)}
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Kategori
                {showDropdown && (
                  <div className="absolute -left-10 top-full z-10 mt-2 min-w-[200px] bg-white shadow">
                    <div className="border-b border-t p-4 hover:bg-slate-100">Profil saya</div>
                    <div className="border-b p-4 hover:bg-slate-100">Kelas saya</div>
                    <div className="border-b p-4 hover:bg-slate-100">Pesanan saya</div>
                    <div className="flex flex-row items-center gap-2 border-b p-4 text-red-500 hover:bg-slate-100">
                      Keluar <img src="/assets/Logout.png" />
                    </div>
                  </div>
                )}
              </div>
              <img className="avatar h-[45px]" src="/assets/avatar.png" alt="User avatar" />
            </div>
          </div>
        </div>
      </header>
      {showDropdown && (
        <div
          className="fixed left-0 top-[83px] w-screen bg-white shadow-lg md:hidden"
          style={{ zIndex: 100 }}
        >
          <div
            onClick={() => setShowDropdown(!showDropdown)}
            className="border-b border-t p-4 hover:bg-slate-100"
          >
            Profil saya
          </div>
          <div
            onClick={() => setShowDropdown(!showDropdown)}
            className="border-b p-4 hover:bg-slate-100"
          >
            Kelas saya
          </div>
          <div
            onClick={() => setShowDropdown(!showDropdown)}
            className="border-b p-4 hover:bg-slate-100"
          >
            Pesanan saya
          </div>
          <div
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex flex-row items-center gap-2 border-b p-4 text-red-500 hover:bg-slate-100"
          >
            Keluar <img src="/assets/Logout.png" />
          </div>
        </div>
      )}
    </>
  );
};
