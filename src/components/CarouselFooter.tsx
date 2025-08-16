import Container from "./core/Container";

export default function CarouselFooter() {
  return (
    <Container>
      <div aria-label="carousel footer" className="py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            aria-label="Ukraine visa"
            className="w-full h-14 bg-gray-800 text-white font-semibold uppercase tracking-wide rounded shadow-md hover:opacity-95 transition"
          >
            UKRAINE VISA
          </button>

          <button
            aria-label="Poland visa"
            className="w-full h-14 bg-amber-700 text-white font-semibold uppercase tracking-wide rounded shadow-md hover:opacity-95 transition"
          >
            POLAN VISA
          </button>
        </div>
      </div>
    </Container>
  );
}
