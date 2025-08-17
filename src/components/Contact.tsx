import Container from "./core/Container";

export default function Contact() {
  return (
    <section className="w-full bg-[#0d1114]">
      {/* subtle diagonal overlay effect */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 to-transparent transform -skew-x-12 origin-left" />

        <Container>
          <div className="relative z-10 flex items-center justify-between py-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white">
                Looking for the Best Visa Services?
              </h2>
              <p className="mt-3 text-base md:text-lg text-slate-300">
                As a Immigration and visa expert, We will help to find best way and solution.
              </p>
            </div>

            <div className="ml-6">
              <a
                href="tel:+919518420838"
                className="inline-flex items-center gap-4 px-6 py-3 rounded-lg border border-white/10 bg-transparent"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                    className="w-5 h-5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.9.45 1.75.96 2.52a2 2 0 0 1-.45 2.11L8.91 9.91a16 16 0 0 0 6 6l1.56-1.56a2 2 0 0 1 2.11-.45c.77.51 1.62.84 2.52.96A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>

                <span className="text-white text-lg font-semibold">+91 9518420838</span>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
