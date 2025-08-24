import Image from "next/image";

export default function AboutUsComponent() {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-20">
      {/* Header Section */}
      <div className="relative w-full h-80 md:h-96">
        <Image
          src="/images/logo.png" // replace with your actual image
          alt="About Us Background"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl shadow-lg"
        />
        <div className="absolute inset-0images bg-black/40 rounded-2xl flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
          <Image
            src="/images/logo.png" // replace with your logo path
            alt="Parbhu Ji Logo"
            width={150}
            height={80}
            className="mt-4"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-12 max-w-5xl mx-auto text-gray-700 leading-relaxed space-y-6">
        <p>
          <span className="text-blue-500 text-2xl font-semibold">W</span>elcome to
          Parbhu Ji Study Abroad, your trusted partner in pursuing educational
          opportunities abroad. We specialize in guiding students through the
          entire process of studying overseas, from selecting the right courses
          and universities to visa assistance and accommodation arrangements.
          Our mission is to empower students with the knowledge and resources
          they need to succeed in their academic and professional journeys. With
          years of expertise and a dedicated team of experts, Parbhu Ji Study
          Abroad provides personalized support to help you achieve your dream of
          studying abroad. Join us and unlock a world of opportunities!
        </p>

        <p>
          At Parbhu Ji Study Abroad, we are passionate about helping students
          achieve their dreams of studying overseas. With years of experience in
          the education consultancy field, we offer personalized services that
          cater to each student’s unique academic goals and aspirations. From
          advising on the best universities and courses to helping with
          application processes, visa assistance, and accommodation arrangements,
          we provide end-to-end support to ensure a smooth and successful
          transition abroad.
        </p>

        <p>
          Our dedicated team of professionals is committed to guiding students
          through every step of their journey, providing valuable insights and
          expert advice. Whether you’re looking to pursue undergraduate,
          postgraduate, or specialized courses, we ensure you have all the tools
          you need to make informed decisions. At Parbhu Ji Study Abroad, we
          believe that education is the gateway to a brighter future, and we are
          here to help you unlock global opportunities that will shape your
          success.
        </p>

        <p>
          Join the thousands of students who have trusted us to turn their
          dreams into reality, and embark on a life-changing adventure abroad
          with confidence.
        </p>
      </div>
    </section>
  );
}
