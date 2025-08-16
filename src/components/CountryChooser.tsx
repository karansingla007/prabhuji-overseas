import Container from "./core/Container";

export default function CountryChooser() {
  return (
    <Container>
      <div aria-label="country chooser section" className="h-40 flex">
        <button>UKRAINE VISA</button>
        <button>POLAN VISA</button>
      </div>
    </Container>
  );
}
