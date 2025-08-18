import Image from "next/image";
import Container from "./core/Container";

export default function OurIndustry() {
  const leftServices = ["Study Visa", "Investor Visa", "Immigration Service", "Air Tickets"];
  const rightServices = ["Tourist Visa", "Work Permit", "Academic Service"];

  return (
    <Container>
      <section aria-label="our industry" className="py-8 mt-4 mb-16">
        <div className="flex gap-8">
          {/* left image */}
          <div className="w-144 md:w-1/2">
            <div className="relative rounded w-144 h-108 mx-auto md:mt-32">
              <Image src="/images/logo.png" alt="person holding globe and passport" fill priority />
            </div>
          </div>

          {/* right content */}
          <div className="relative w-full md:w-1/2">
            <div className="z-10 p-6 md:px-12 md:py-6 bg-white">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Our Industry-Explicit
                <br />
                Competence
              </h2>

              <p className="mt-6 text-slate-500">
                We are dedicated to guiding you through every step of the immigration process with
                expertise and care. Whether you are looking to obtain a visa, permanent residency,
                or citizenship, our team of experienced professionals provides personalized services
                tailored to your unique situation.
              </p>
            </div>

            {/* red folded corner (rotated square) */}
            <div
              className="absolute top-67 -left-9 size-16 bg-red-700 rotate-60 transform -z-10"
              aria-hidden
            />

            {/* overlapping amber box */}
            <div className="mt-8 md:mt-12">
              <div className="relative md:absolute md:-left-12 md:top-72 z-20">
                <div className="bg-orange-400 z-20 text-white p-6 md:p-8 rounded-xs rounded-br-[48px] shadow-md w-[320px] md:w-[640px]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="space-y-4">
                      {leftServices.map((s) => (
                        <li key={s} className="flex items-center gap-3">
                          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-amber-50 text-amber-700">
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 20 20"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              aria-hidden
                            >
                              <circle cx="10" cy="10" r="8" />
                              <path
                                d="M6.5 10.5l2 2 5-5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span className="text-white font-medium">{s}</span>
                        </li>
                      ))}
                    </ul>

                    <ul className="space-y-4">
                      {rightServices.map((s) => (
                        <li key={s} className="flex items-center gap-3">
                          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-amber-50 text-amber-700">
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 20 20"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              aria-hidden
                            >
                              <circle cx="10" cy="10" r="8" />
                              <path
                                d="M6.5 10.5l2 2 5-5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span className="text-white font-medium">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
