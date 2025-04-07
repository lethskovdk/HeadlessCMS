// app/cases/page.tsx
import Link from "next/link";
import Image from "next/image";

export default async function CasesPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/case?acf_format=standard`, {
    cache: "no-store",
  });

  const cases = await res.json();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10">Customer Cases</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cases.map((item: any) => (
          <div key={item.id} className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <Link href={`/${item.slug}`}>
              <div className="group">
                {item.acf.hero_image_url && (
                  <Image
                    src={item.acf.hero_image_url}
                    alt={item.title.rendered}
                    width={800}
                    height={500}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                )}
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{item.title.rendered}</h2>
                  <p className="text-sm text-gray-500 mb-4">Client: {item.acf.kunde_navn}</p>
                  <p className="text-gray-700 line-clamp-3">{item.excerpt?.rendered?.replace(/<[^>]+>/g, '')}</p>
                  <span className="text-blue-600 mt-4 inline-block font-medium">Read more →</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
