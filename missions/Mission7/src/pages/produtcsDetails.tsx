import { useNavigate, useParams } from "react-router-dom";
import { CourseDetailsComponent } from "../components/courseDetails";
import { ShowProductComponent } from "../components/showProduct";
import { DividerUI } from "../components/UIs/divider";
import { ImageAsBackgroudUI } from "../components/UIs/imageAsBackground";
import { StarRatingUi } from "../components/UIs/stars";
import { DefaultLayout } from "../layouts/default";
import { FooterLayout } from "../layouts/footer";
import { HeaderLayout } from "../layouts/header";
import { getData } from "../services/api/getData";
import { CardDetailsComponent } from "../components/cardDetails";

export const ProductsDetailsPage = () => {
  const { contents } = getData();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const idNumber = Number(id);
  if (isNaN(idNumber)) {
    navigate("/");
  }

  if (!contents) return <>Error</>;
  const data = contents.getId(idNumber).data[0];

  const { courseDetails } = data.details;
  return (
    <>
      <HeaderLayout />
      <div className="px-standard flex flex-col gap-5 py-14">
        <p className="text-bodyMedium font-medium">
          Beranda / Desain /<strong> {data.title}</strong>
        </p>
        <ImageAsBackgroudUI className="mb-5" src="/assets/hero.jpg">
          <div className="flex flex-col items-start justify-center gap-5 px-4 py-14 md:px-10 lg:px-20">
            <h1 className="z-20 text-heading3 font-bold text-white md:text-heading1">
              {data.title}
            </h1>
            <div className="flex flex-col items-start gap-1">
              <p className="z-20 text-center font-sans text-bodySmall font-light text-white md:text-bodyMedium">
                Belajar bersama tutor di video course.
              </p>
              <p className="z-20 text-center font-sans text-bodySmall font-light text-white md:text-bodyMedium">
                Kapanpun, dimana pun.
              </p>
            </div>
            <div className="z-30 flex flex-row items-center gap-2">
              <StarRatingUi rating={2.5} size={20} />
              <p className="text-bodyMedium font-medium text-white">
                {2.5} ({86})
              </p>
            </div>
          </div>
        </ImageAsBackgroudUI>

        {/* Description */}
        <div className="flex w-full flex-col-reverse justify-between gap-5 lg:flex-row">
          <div className="flex max-w-[770px] flex-col gap-5">
            <DefaultLayout className="rounded-lg p-5">
              <div className="flex flex-col gap-2">
                <h2 className="text-heading6 font-bold">Deskripsi</h2>
                <p className="text-bodyMedium font-medium">{data.details.descriptionDetail}</p>
              </div>
            </DefaultLayout>

            {/* Tutor */}
            <DefaultLayout className="rounded-lg p-5 py-10">
              <div className="flex flex-col gap-3">
                <h2 className="text-heading6 font-bold">Belajar Bersama Tutor Professional</h2>
                <div className="flex flex-col justify-evenly gap-5 lg:flex-row">
                  <DefaultLayout className="flex flex-col gap-2 rounded-lg p-5">
                    <div className="flex flex-row items-center justify-start gap-2">
                      <img className="h-10 w-10 rounded-lg" src="/assets/contents/avatar1.png" />
                      <div className="flex flex-col">
                        <h3 className="text-bodyLarge font-bold">Gregorius Edrik Lawanto</h3>
                        <span className="text-bodySmall font-thin">
                          Senior Talent Acquisition di
                          <strong className="font-bold"> Wingsgroup</strong>
                        </span>
                      </div>
                    </div>
                    <p className="font-BodyLarge font-medium">
                      Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai
                      Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas
                      Utama) selama hampir 1 tahun.
                    </p>
                  </DefaultLayout>
                  <DefaultLayout className="flex flex-col gap-2 rounded-lg p-5">
                    <div className="flex flex-row items-center justify-start gap-2">
                      <img className="h-10 w-10 rounded-lg" src="/assets/contents/avatar1.png" />
                      <div className="flex flex-col">
                        <h3 className="text-bodyLarge font-bold">Gregorius Edrik Lawanto</h3>
                        <span className="text-bodySmall font-thin">
                          Senior Talent Acquisition di
                          <strong className="font-bold"> Wingsgroup</strong>
                        </span>
                      </div>
                    </div>
                    <p className="font-BodyLarge font-medium">
                      Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai
                      Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas
                      Utama) selama hampir 1 tahun.
                    </p>
                  </DefaultLayout>
                </div>
              </div>
            </DefaultLayout>

            {/* Course Details */}
            <DefaultLayout className="rounded-lg p-5">
              <div className="flex flex-col gap-5">
                <h2 className="mb-3 text-heading6 font-bold">Kamu akan Mempelajari</h2>
                <div className="flex flex-col gap-3">
                  {courseDetails.map((value, index) => (
                    <CourseDetailsComponent
                      key={index}
                      header={value.header}
                      subHeader={value.subHeader}
                      isShow={index === 0 && true}
                    />
                  ))}
                </div>
              </div>
            </DefaultLayout>

            {/* Rating and Review */}
            <DefaultLayout className="rounded-lg p-5 py-10">
              <div className="flex flex-col gap-3">
                <h2 className="text-heading6 font-bold">Rating dan Review</h2>
                <div className="flex flex-col justify-evenly gap-5 lg:flex-row">
                  <DefaultLayout className="flex flex-col gap-2 rounded-lg p-5">
                    <div className="flex flex-row items-center justify-start gap-2">
                      <img className="h-10 w-10 rounded-lg" src="/assets/contents/avatar1.png" />
                      <div className="flex flex-col">
                        <h3 className="text-bodyLarge font-bold">Gregorius Edrik Lawanto</h3>
                        <span className="text-bodySmall font-thin">
                          Senior Talent Acquisition di{" "}
                          <strong className="font-bold">Wingsgroup</strong>
                        </span>
                      </div>
                    </div>
                    <p className="font-BodyLarge font-medium">
                      Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai
                      Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas
                      Utama) selama hampir 1 tahun.
                    </p>
                    <DividerUI />
                    <div className="flex gap-2">
                      <StarRatingUi rating={2.5} />
                      <p className="text-bodyMedium font-medium text-gray-500">
                        {2.5} ({86})
                      </p>
                    </div>
                  </DefaultLayout>
                  <DefaultLayout className="flex flex-col gap-2 rounded-lg p-5">
                    <div className="flex flex-row items-center justify-start gap-2">
                      <img className="h-10 w-10 rounded-lg" src="/assets/contents/avatar1.png" />
                      <div className="flex flex-col">
                        <h3 className="text-bodyLarge font-bold">Gregorius Edrik Lawanto</h3>
                        <span className="text-bodySmall font-thin">
                          Senior Talent Acquisition di
                          <strong className="font-bold">Wingsgroup</strong>
                        </span>
                      </div>
                    </div>
                    <p className="font-BodyLarge font-medium">
                      Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai
                      Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas
                      Utama) selama hampir 1 tahun.
                    </p>
                    <DividerUI />
                    <div className="flex gap-2">
                      <StarRatingUi rating={2.5} />
                      <p className="text-bodyMedium font-medium text-gray-500">
                        {2.5} ({86})
                      </p>
                    </div>
                  </DefaultLayout>
                </div>
              </div>
            </DefaultLayout>
          </div>
          <CardDetailsComponent data={data} />
        </div>

        {/* Recomendation */}
        <div className="mt-10 flex flex-col">
          <h2 className="text-heading3 font-bold">Video Pembelajaran Terkait Lainnya</h2>
          <p className="text-bodyMedium font-light">
            Expansi Pengetahuan Anda dengan Rekomendasi Spesial Kami.
          </p>
          <ShowProductComponent contents={contents.getRandomizeData(3).data} />
        </div>
      </div>

      <FooterLayout />
    </>
  );
};
