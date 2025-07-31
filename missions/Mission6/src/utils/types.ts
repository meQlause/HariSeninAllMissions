export type Variant = "login" | "register";
export type ButtonVariant = "primary" | "secondary" | "tertiary" | "quaternary";
export type InputType = "text" | "email" | "password" | "phone";

export type CheckboxUIProps = {
  variant?: "square" | "round";
  id?: string;
};

export type LoginFormValues = {
  email: string;
  password: string;
};

export type ImageProps = {
  children: React.ReactNode;
  src: string;
  className?: string;
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
  content: CategoryContent[];
  contentClassName?: string;
};

export type CategoryContent = {
  element: React.ReactNode;
  func: () => void;
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

export type VideoDetails = {
  duration: string;
  kind: "video" | "quiz";
};

export type Content = {
  id: number;
  contentImage: string;
  title: string;
  description: string;
  rating: number;
  reviewCount: number;
  price: string;
  details: ContentDetails;
};

export type ContentDetails = {
  descriptionDetail: string;
  reviews: ReviewDetail[];
  tutordetails: TutorDetail[];
  courseDetails: CourseDetail[];
};

export type CourseDetail = {
  header: string;
  subHeader: CourseSubHeader;
  isShow?: boolean;
};

type CourseSubHeaderItem = {
  kind: string;
  duration: string;
};

type CourseSubHeader = {
  [topic: string]: CourseSubHeaderItem;
};

type TutorDetail = {
  avatar: string;
  name: string;
  position: string;
  detail: string;
};

type ReviewDetail = {
  avatar: string;
  name: string;
  position: string;
  review: string;
  rating: number;
};
