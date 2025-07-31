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

type ContentDetails = {
  descriptionDetail: string;
  reviews: ReviewDetail[];
  tutordetails: TutorDetail[];
  courseDetails: CourseDetail[];
};

type CourseDetail = {
  header: string;
  subHeader: CourseSubHeader;
  isShow?: boolean;
};

type CourseSubHeader = {
  [topic: string]: CourseSubHeaderItem;
};

type CourseSubHeaderItem = {
  kind: string;
  duration: string;
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
