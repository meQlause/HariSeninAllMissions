import { useNavigate } from "react-router-dom";
import { FormComponent } from "../components/forms";
import { ButtonUI } from "../components/UIs/button";
import { DividerUI } from "../components/UIs/divider";
import { DefaultLayout } from "../layouts/default";
import { HeaderLayout } from "../layouts/header";

export const LoginPage = () => {
  const navigate = useNavigate();

  const login = (data: { email: string; password: string }) => {
    const passwordToCompare = localStorage.getItem(data.email);
    if (!passwordToCompare) {
      return window.confirm("Your Email Is not Registered.");
    }
    if (!(passwordToCompare === data.password)) {
      return window.confirm("Your Password Is Wrong.");
    }
    localStorage.setItem("isAuth", "true");
    navigate("/products");
  };
  return (
    <>
      <HeaderLayout />
      <div className="my-16 flex items-center justify-center">
        <DefaultLayout className="mx-3 flex w-full flex-col items-center justify-start gap-1 rounded-lg p-7 md:w-[600px]">
          <h1 className="text-heading3 font-bold">Masuk ke Akun</h1>
          <p className="text-bodyMedium font-light">Yuk lanjutin belajarmu di videobelajar.</p>
          <FormComponent variant="login" className="w-full pt-6" onSubmit={login} />
          <div className="flex w-full flex-col gap-4 pt-2">
            <ButtonUI variant="secondary" type="button" onClick={() => navigate("/register")}>
              Daftar
            </ButtonUI>

            <DividerUI />

            <ButtonUI className="border border-gray-200" variant="tertiary" type="button">
              <div className="m-auto flex flex-row items-center justify-center gap-3">
                <img src="/assets/google-icon.png" />
                Masuk Dengan Google"
              </div>
            </ButtonUI>
          </div>
        </DefaultLayout>
      </div>
    </>
  );
};
