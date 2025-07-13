import { FormComponent } from "../components/forms";
import { DefaultLayout } from "../layouts/default";
import { HeaderLayout } from "../layouts/header";

export const LoginPage = () => {
  const toMain = () => {
    console.log("test");
  };
  return (
    <>
      <HeaderLayout />
      <div className="mx-auto mt-20 flex items-center">
        <DefaultLayout className="mx-3 flex flex-col items-center justify-start gap-1 rounded-lg p-7 md:w-[600px]">
          <h1 className="text-heading3 font-bold">Masuk ke Akun</h1>
          <p className="text-bodyMedium font-light">Yuk lanjutin belajarmu di videobelajar.</p>
          <FormComponent variant="login" className="w-full pt-6" onSubmit={toMain} />
        </DefaultLayout>
      </div>
    </>
  );
};
