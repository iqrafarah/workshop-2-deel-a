import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl min-h-screen bg-slate-100">
      <p className="bg-amber-50 p-3 text-center text-sm text-amber-900">
        Alleen lokaal — authenticatie wordt later toegevoegd.
      </p>
      <nav className="flex gap-6 border-b bg-white p-4">
        <Link
          href="/admin"
          className="text-slate-600 transition hover:text-indigo-600 focus-visible:outline-indigo-600"
        >
          Productbeheer
        </Link>
        <Link
          href="/admin/products/new"
          className="text-slate-600 transition hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600"
        >
          Nieuw product
        </Link>
        <Link
          href="/products"
          className="ml-auto text-slate-600 transition hover:text-indigo-600 focus-visible:outline-indigo-600"
        >
          Webshop →
        </Link>
      </nav>
      {children}
    </div>
  );
}
