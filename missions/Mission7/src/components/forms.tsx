import type { FormProps } from "../utils/interfaces";
import type { LoginFormValues, Props, RegisterFormValues, Variant } from "../utils/types";
import { ButtonUI } from "./UIs/button";
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
    watch,
    formState: { errors },
  } = useForm<Variant extends "login" ? LoginFormValues : RegisterFormValues>();

  const isRegister = variant === "register";
  const password = watch("password");

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit?.(data))}
      className={`flex flex-col gap-3 ${className}`}
      {...props}
    >
      {isRegister && (
        <>
          <TextInput
            label="Nama Lengkap"
            className="w-full"
            registration={register("name", {
              required: "Nama lengkap harus diisi",
              minLength: {
                value: 2,
                message: "Nama lengkap minimal 2 karakter",
              },
            })}
            error={errors?.name?.message}
          />
        </>
      )}

      <EmailInput
        label="Email"
        className="w-full"
        registration={register("email", {
          required: "Email harus diisi",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Format email tidak valid",
          },
        })}
        error={errors?.email?.message}
      />

      {isRegister && (
        <PhoneInput
          label="Nomor Telepon"
          className="w-full"
          registration={register("phone", {
            required: "Nomor telepon harus diisi",
            pattern: {
              value: /^[0-9]{10,13}$/,
              message: "Nomor telepon harus 10-13 digit",
            },
          })}
          error={errors?.phone?.message}
        />
      )}

      <PasswordInput
        label="Password"
        className="w-full"
        registration={register("password", {
          required: "Password harus diisi",
          minLength: {
            value: 6,
            message: "Password minimal 6 karakter",
          },
        })}
        error={errors?.password?.message}
      />

      {isRegister && (
        <PasswordInput
          label="Konfirmasi Password"
          className="w-full"
          registration={register("passwordConfirmation", {
            required: "Konfirmasi password harus diisi",
            minLength: {
              value: 6,
              message: "Konfirmasi password minimal 6 karakter",
            },
            validate: (value) => {
              if (value !== password) {
                return "Konfirmasi password tidak cocok";
              }
              return true;
            },
          })}
          error={errors?.passwordConfirmation?.message}
        />
      )}

      {!isRegister && (
        <div className="flex justify-end">
          <a className="font-sans text-bodySmall text-[#4A505C]" href="#">
            Lupa password?
          </a>
        </div>
      )}
      <div className="mt-3">
        <ButtonUI variant="primary" type="submit">
          {isRegister ? "Daftar" : "Masuk"}
        </ButtonUI>
      </div>
    </form>
  );
};
