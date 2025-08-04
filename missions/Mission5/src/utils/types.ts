export type Variant = "login" | "register";
export type ButtonVariant = "primary" | "secondary" | "tertiary" | "quaternary";
export type InputType = "text" | "email" | "password" | "phone";

export type LoginFormValues = {
  email: string;
  password: string;
};

export type ImageProps = {
  children: React.ReactNode;
  src: string;
  className?: string
};

export type DividerProps = {
  width?: string;
  color?: string;
  thick?: string;
};

export type StarRatingProps = {
  rating: number;
  size?: number;
  className?: string;
};

export type CategoryProps = {
  width?: string;
  title: React.ReactNode;
  titleClassName?: string;
  content: Record<string, React.ReactNode>;
  contentClassName?: string;
};

export type RegisterFormValues = {
  name: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirmation: string;
};

export type Props = {
  variant?: Variant;
};
