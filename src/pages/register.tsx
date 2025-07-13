import { FormComponent } from "../components/forms";
import { DefaultLayout } from "../layouts/default";
import { HeaderLayout } from "../layouts/header";

export const RegisterPage = () => {
  const toMain = () => {
    console.log("test");
  };
  return (
    <>
      <HeaderLayout />
      <div className="mx-auto my-16 flex items-center justify-center">
        <DefaultLayout className="mx-3 flex w-full flex-col items-center justify-start gap-1 rounded-lg p-7 md:w-[600px]">
          <h1 className="text-heading3 font-bold">Pendaftaran Akun</h1>
          <p className="text-bodyMedium font-light">Yuk, Daftarkan akunmu sekarang juga!</p>
          <FormComponent variant="register" className="w-full pt-6" onSubmit={toMain} />
        </DefaultLayout>
      </div>
    </>
  );
};
