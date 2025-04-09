// app/cases/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function CasePage({ params }: { params: { slug: string } }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/case?slug=${params.slug}&acf_format=standard`,
    { cache: "no-store" }
  );

  const data = await res.json();
  const caseItem = data[0];

  if (!caseItem) return notFound();

  const acf = caseItem.acf;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* HERO */}
      <div className="mb-12">
        <div className="grid grid-cols-2 gap-4 mb-8 items-center">
          <h1 className="text-4xl font-bold mb-4">{acf.hero_headline}</h1>
          <p className="text-lg text-gray-600 mb-6">{acf.hero_text}</p>
        </div>
        {acf.hero_image_url && (
          <Image
            src={acf.hero_image_url}
            alt={caseItem.title.rendered}
            width={1000}
            height={500}
            className="rounded-xl shadow"
          />
        )}
      </div>

      {/* BACKGROUND SECTION */}
      <div className="mb-12 grid grid-cols-2 gap-4">
        <div>
          <p className="text-md text-gray-500 mb-4 italic">{acf.background_tagline}</p>
          <h2 className="text-2xl font-semibold mb-2">{acf.background_heading}</h2>
        </div>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: acf.background_content }} />
        
      </div>
      {acf.background_highlight && (
        <div className="my-6 p-4 bg-blue-50 border-l-4 border-blue-500 text-blue-800 rounded">
          {acf.background_highlight}
        </div>
      )}

      {/* TESTIMONIAL SECTION (if exists) */}
      {(acf.testimonial_quote && acf.testimonial_name) && (
        <div className="bg-gray-100 rounded-xl p-6 mb-12">
          <blockquote className="text-xl italic text-gray-700 mb-4 text-center">
            “{acf.testimonial_quote}”
          </blockquote>
          <div className="text-sm text-right font-medium text-gray-600">{acf.testimonial_name}</div>
        </div>
      )}

      {/* AWARD SECTION (if exists) */}
      {(acf.award_headline || acf.award_image_url) && (
        <div className="mb-12 flex flex-col items-center">
          <h3 className="text-xl font-bold">{acf.award_headline}</h3>
          <p className="text-gray-600 mb-2">{acf.award_tagline}</p>
          <p className="text-gray-700 mb-4 text-center">{acf.award_description}</p>
          {acf.award_image_url && (
            <Image
              src={acf.award_image_url}
              alt={acf.award_headline}
              width={300}
              height={150}
              className="rounded shadow"
            />
          )}
        </div>
      )}
    </div>
  );
}
