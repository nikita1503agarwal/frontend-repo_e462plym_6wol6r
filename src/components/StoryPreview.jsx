import { useMemo } from "react";

export default function StoryPreview({ story }) {
  const pages = story?.pages_data || [];
  const title = story?.title || "";

  const disclaimer = useMemo(() => {
    return "Aperçu gratuit de 3 pages. Le livre complet contient davantage d'illustrations et une histoire plus longue.";
  }, []);

  if (!story) return null;

  return (
    <section className="mt-8">
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <div className="text-sm text-gray-500">{disclaimer}</div>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pages.map((p) => (
            <article key={p.page_number} className="border rounded-lg overflow-hidden">
              <img src={p.image_url} alt="illustration" className="w-full h-48 object-cover" />
              <div className="p-4 text-gray-700 leading-relaxed text-sm">{p.text}</div>
            </article>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="text-gray-600">
            Prêt à vivre l'expérience complète ?
          </div>
          <button className="px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
            Obtenir le livre complet (10€)
          </button>
        </div>
      </div>
    </section>
  );
}
