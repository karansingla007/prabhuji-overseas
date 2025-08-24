import Container from "./core/Container";

export default function CountryChooser() {
  return (
    <Container>
      <div aria-label="country-chooser" className="py-6 px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <button
            aria-label="Ukraine visa"
            className="w-full h-14 bg-gray-800 text-white font-semibold uppercase tracking-wide rounded shadow-md hover:opacity-95 transition"
          >
            UKRAINE VISA
          </button>

          <button
            aria-label="Poland visa"
            className="w-full h-14 bg-amber-600 text-white font-semibold uppercase tracking-wide rounded shadow-md hover:opacity-95 transition"
          >
            POLAND VISA
          </button>
        </div>
      </div>
    </Container>
  );
}
