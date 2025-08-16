import Container from "./core/Container";

export default function WhyConsider() {
  return (
    <Container>
      <section aria-label="why consider section" className="py-16">
        <div className="pl-4 md:pl-24 lg:pl-32">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Why Consider Our Consulting Services?
          </h2>

          <p className="mt-6 text-lg text-slate-500 leading-relaxed">
            Firstly, you don’t need to hire an immigration advisor for your
            immigration application filing purposes if you can do it by
            yourself. LASTLY, we mean BUSINESS, i.e. a legitimate service for a
            legal fee. No hidden costs, No conditions apply. No middlemen, No
            sales strategies, No persuasive consultation, purely Point Blank
            Honest Consultation & a &quo;One Point Contact&quot;.
          </p>

          <div className="mt-12">
            <button className="inline-flex items-center bg-amber-600 text-white font-semibold rounded-md px-5 py-3 shadow-md hover:opacity-95 transition">
              Discover More
              <span className="ml-3">→</span>
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
}
