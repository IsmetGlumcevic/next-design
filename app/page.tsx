import { Button, Header, ProductCard } from "aleta-ui";

export default function Home() {
  const placeholderImage =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
      <rect width="100%" height="100%" fill="#e5e7eb" />
      <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle"
        fill="#111827"
        font-family="Arial"
        font-size="48"
      >
        Product image
      </text>
    </svg>
  `);
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <main className="flex flex-col w-full">
        <Header
          logo={
            <img
              src="/assets/logo.png"
              alt="Aleta UI logo"
              className="h-8 w-auto"
            />
          }
          rightActions={[
            <Button key="search" variant="secondary">
              🔍
            </Button>,
            <Button key="user" variant="primary">
              👤
            </Button>,
          ]}
          leftAction={<span>☰</span>}
        />

        <Button className="w-40 mt-10" variant="primary">
          Primary Button
        </Button>
        <div className="mt-10 flex gap-2 flex-wrap w-full">
          {Array.from({ length: 6 }).map((_, index) => (
            <ProductCard
              key={index}
              className="w-1/4"
              imageSrc={placeholderImage}
              imageAlt={`Example product image ${index + 1}`}
              description="Opis proizvoda ide ovdje."
              price="29,99 €"
              addToCartLabel="Dodaj u kosaricu"
            />
          ))}
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="flex items-center gap-2 hover:underline hover:underline-offset-4">
          Aleta ui komponente
        </p>
      </footer>
    </div>
  );
}
