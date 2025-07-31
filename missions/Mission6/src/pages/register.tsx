import { useNavigate } from "react-router-dom";
import { FormComponent } from "../components/forms";
import { ButtonUI } from "../components/UIs/button";
import { DividerUI } from "../components/UIs/divider";
import { DefaultLayout } from "../layouts/default";
import { HeaderLayout } from "../layouts/header";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const register = (data: {
    name: string;
    email: string;
    phone: number;
    password: string;
    passwordConfirmation: string;
  }) => {
    const email = localStorage.getItem(data.email);
    if (email) {
      return window.confirm("Your Email Is Already Registered.");
    }

    localStorage.setItem(data.email, data.password);
    window.confirm("Registration is Succeded.");
    navigate("/login");
  };

  return (
    <>
      <HeaderLayout />
      <div className="my-16 flex items-center justify-center">
        <DefaultLayout className="mx-3 flex w-full flex-col items-center justify-start gap-1 rounded-lg p-7 md:w-[600px]">
          <h1 className="text-heading3 font-bold">Pendaftaran Akun</h1>
          <p className="text-bodyMedium font-light">Yuk, Daftarkan akunmu sekarang juga!</p>
          <FormComponent variant="register" className="w-full pt-6" onSubmit={register} />
          <div className="flex w-full flex-col gap-4 pt-2">
            <ButtonUI variant="secondary" type="button" onClick={() => navigate("/login")}>
              Masuk
            </ButtonUI>

            <DividerUI />

            <ButtonUI className="border border-gray-200" variant="tertiary" type="button">
              <div className="m-auto flex flex-row items-center justify-center gap-3">
                <img src="/assets/google-icon.png" />
                Daftar Dengan Google"
              </div>
            </ButtonUI>
          </div>
        </DefaultLayout>
      </div>
    </>
  );
};
