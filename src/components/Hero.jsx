import { Wand2, BookOpen, Sparkles } from "lucide-react";

export default function Hero({ onGenerate }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100" />
      <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur rounded-full px-4 py-2 text-sm font-medium text-purple-700 shadow">
          <Sparkles className="w-4 h-4" />
          Créez un moment d'émerveillement ✨
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-800">
          MagicBook
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Un livre illustré personnalisé où votre enfant devient le héros.
          Entrez son prénom, son âge et son univers préféré: l'histoire se crée en quelques secondes.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button onClick={onGenerate} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow">
            <Wand2 className="w-5 h-5" />
            Générer un aperçu gratuit
          </button>
          <a href="#how" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white hover:bg-gray-50 text-gray-800 font-semibold shadow border">
            <BookOpen className="w-5 h-5" />
            Comment ça marche
          </a>
        </div>
      </div>
    </section>
  );
}
