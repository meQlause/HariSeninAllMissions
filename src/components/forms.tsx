import type { FormProps } from "../utils/interfaces";
import type { LoginFormValues, Props, RegisterFormValues, Variant } from "../utils/types";
import { ButtonUI } from "./UIs/button";
import { DividerUI } from "./UIs/divider";
import { EmailInput, PasswordInput, PhoneInput, TextInput } from "./UIs/input";
import { useForm } from "react-hook-form";

export const FormComponent = ({
  className = "",
  onSubmit,
  variant = "login",
  ...props
}: Props & FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Variant extends "login" ? LoginFormValues : RegisterFormValues>();

  const isRegister = variant === "register";

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className={`space-y-4 ${className}`}
      {...props}
    >
      {isRegister && (
        <>
          <TextInput
            label="Nama Lengkap"
            className="w-full"
            registration={register("name")}
            error={errors?.name?.message}
          />
        </>
      )}

      <EmailInput
        label="Email"
        className="w-full"
        registration={register("email")}
        error={errors?.email?.message}
      />

      {isRegister && (
        <PhoneInput
          label="Nomor Telepon"
          className="w-full"
          registration={register("phone")}
          error={errors?.phone?.message}
        />
      )}

      <PasswordInput
        label="Password"
        className="w-full"
        registration={register("password")}
        error={errors?.password?.message}
      />

      {isRegister && (
        <PasswordInput
          label="Konfirmasi Password"
          className="w-full"
          registration={register("passwordConfirmation")}
          error={errors?.passwordConfirmation?.message}
        />
      )}

      {!isRegister && (
        <div className="mt-2 flex justify-end">
          <a className="font-sans text-bodySmall text-[#4A505C]" href="#">
            Lupa password?
          </a>
        </div>
      )}

      <div className="flex flex-col gap-4 pt-2">
        <ButtonUI variant="primary">{isRegister ? "Daftar" : "Masuk"}</ButtonUI>
        <ButtonUI variant="secondary">{isRegister ? "Masuk" : "Daftar"}</ButtonUI>

        <DividerUI />

        <ButtonUI className="border border-gray-200" variant="tertiary">
          <div className="m-auto flex flex-row items-center justify-center gap-3">
            <img src="/assets/google-icon.png" />
            {isRegister ? "Daftar Dengan Google" : "Masuk Dengan Google"}
          </div>
        </ButtonUI>
      </div>
    </form>
  );
};
