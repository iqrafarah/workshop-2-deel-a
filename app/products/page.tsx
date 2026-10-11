import Image from "next/image";

const products = [
  {
    id: 1,
    title: "ACME Starterbox",
    category: "Starterspakket",
    description:
      "Een praktische selectie van producten voor een vliegende start.",
    price: 39.95,
  },
  {
    id: 2,
    title: "ACME Opbergbox",
    category: "Organisatie",
    description:
      "Een stevige en overzichtelijke oplossing voor spullen die je graag bij elkaar houdt.",
    price: 29.95,
  },
  {
    id: 3,
    title: "ACME Geschenkbox",
    category: "Cadeau",
    description:
      "Een zorgvuldig samengesteld pakket om iemand mee te verrassen.",
    price: 49.95,
  },
];

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
          ACME Webshop
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
          Producten
        </h1>
        <p className="mt-3 max-w-2xl text-gray-600">
          Bekijk een eerste selectie uit het productaanbod van ACME. In de
          volgende workshop vervangen we deze tijdelijke producten door echte
          gegevens uit een API.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.id}
            className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
          >
            <div className="relative aspect-4/3 bg-white">
              <Image
                src="/images/product-placeholder.png"
                alt={`Tijdelijke productafbeelding voor ${product.title}`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-contain p-6"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                {product.category}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-gray-900">
                {product.title}
              </h2>
              <p className="mt-3 flex-1 leading-7 text-gray-600">
                {product.description}
              </p>
              <div className="mt-5 flex items-center justify-between gap-4">
                <p className="text-xl font-bold text-gray-900">
                  € {product.price.toFixed(2).replace(".", ",")}
                </p>
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
                  Binnenkort
                </span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
