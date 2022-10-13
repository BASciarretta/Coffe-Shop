import CarouselButtonNext from "./CarouselButtonNext";
import CarouselButtonPrev from "./CarouselButtonPrev";

const Carousel = () => {
  return (
    <section className="container pt-5">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="img/cafe-express.jpg"
              className="d-block w-100"
              alt="Café Espresso Roast"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Espresso Roast</h5>
              <h6>
                Esta mezcla multiregional, es el corazón de nuestras bebidas a
                base de Espresso. Ofrece aroma y una acidez balanceada, con una
                densa y acaramelada dulzura que perdura en la boca.
              </h6>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="img/maquina-de-cafe.jpg"
              className="d-block w-100"
              alt="Máquina de café"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Cafetera</h5>
              <h6>
                Al preparar café con una prensa francesa retiene los valiosos
                aceites naturales que los filtros de papel absorben, y extrae
                todo el sabor del café, dándole una consistencia espesa y
                deliciosa.
              </h6>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="img/molinillos-de-cafe.jpg"
              className="d-block w-100"
              alt="Molinillos de café"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Café cultivado conforme a prácticas responsables</h5>
              <h6>
                Siempre nos hemos esforzado por comprar nuestro café de forma
                que respetase a las personas que lo producen y los lugares donde
                se cultiva. Sencillamente, es lo que consideramos correcto.
              </h6>
            </div>
          </div>
        </div>
        <CarouselButtonPrev />
        <CarouselButtonNext />
      </div>
    </section>
  );
};

export default Carousel;
