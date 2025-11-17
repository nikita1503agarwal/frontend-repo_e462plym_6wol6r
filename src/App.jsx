import { useState } from "react";
import Hero from "./components/Hero.jsx";
import StoryForm from "./components/StoryForm.jsx";
import StoryPreview from "./components/StoryPreview.jsx";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [story, setStory] = useState(null);
  const [error, setError] = useState(null);

  const generatePreview = async (payload) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${BACKEND_URL}/api/stories?variant=preview`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Erreur lors de la génération");
      const data = await res.json();
      setStory(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Hero onGenerate={() => {
        const payload = { child_name: "Léna", age: 5, theme: "espace", tone: "doux", language: "fr", pages: 12 };
        generatePreview(payload);
      }} />

      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <StoryForm loading={loading} onSubmit={generatePreview} />
        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">{error}</div>
        )}
        <StoryPreview story={story} />

        <section id="how" className="mt-16 text-gray-700">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold text-gray-800">Comment ça marche</h3>
            <ol className="mt-4 list-decimal list-inside space-y-2">
              <li>Renseignez le prénom, l'âge et l'univers préféré de votre enfant.</li>
              <li>Recevez instantanément un aperçu gratuit de 3 pages.</li>
              <li>Débloquez le livre complet pour 10€: plus de pages, plus d'illustrations, version audio bientôt disponible.</li>
            </ol>
          </div>
        </section>
      </div>

      <footer className="mt-20 py-10 text-center text-sm text-gray-500">
        MagicBook — créez un moment d'émerveillement ✨
      </footer>
    </div>
  );
}
