import { useState } from "react";
import { Child, Palette, Languages } from "lucide-react";

export default function StoryForm({ onSubmit, loading }) {
  const [child_name, setName] = useState("Léna");
  const [age, setAge] = useState(5);
  const [theme, setTheme] = useState("espace");
  const [tone, setTone] = useState("doux");
  const [language, setLanguage] = useState("fr");

  const submit = (e) => {
    e.preventDefault();
    onSubmit({ child_name, age: Number(age), theme, tone, language, pages: 12 });
  };

  return (
    <form onSubmit={submit} className="bg-white rounded-xl shadow p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Prénom de l'enfant</label>
        <input value={child_name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full border rounded-lg px-3 py-2" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Âge</label>
        <input type="number" min={1} max={12} value={age} onChange={(e) => setAge(e.target.value)} className="mt-1 w-full border rounded-lg px-3 py-2" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Univers préféré</label>
        <select value={theme} onChange={(e) => setTheme(e.target.value)} className="mt-1 w-full border rounded-lg px-3 py-2">
          <option value="espace">Espace</option>
          <option value="pirates">Pirates</option>
          <option value="jungle">Jungle</option>
          <option value="château">Château</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Ton de l'histoire</label>
        <select value={tone} onChange={(e) => setTone(e.target.value)} className="mt-1 w-full border rounded-lg px-3 py-2">
          <option value="doux">Doux</option>
          <option value="aventureux">Aventureux</option>
          <option value="drôle">Drôle</option>
          <option value="apaisant">Apaisant</option>
        </select>
      </div>
      <div className="md:col-span-2 flex items-center justify-between mt-2">
        <div className="text-sm text-gray-500">Un aperçu gratuit de 3 pages est généré instantanément.</div>
        <button disabled={loading} type="submit" className="px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold disabled:opacity-60">
          {loading ? "Génération..." : "Générer l'aperçu"}
        </button>
      </div>
    </form>
  );
}
