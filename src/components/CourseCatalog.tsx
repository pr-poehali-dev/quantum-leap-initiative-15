import { useState } from "react"
import Icon from "@/components/ui/icon"

const SUBJECTS = ["Все", "Математика", "Русский язык", "Физика", "Химия", "Биология", "История", "Английский язык", "Информатика"]
const CATEGORIES = ["Все", "ЕГЭ", "ОГЭ", "ВПР", "Олимпиады", "Тренажёры", "Начальная школа", "Дошкольники"]

const COURSES = [
  { title: "Математика. Подготовка к ОГЭ 2026", subject: "Математика", category: "ОГЭ", teacher: "Иван Петров", lessons: 48, duration: "24 ч", level: "9 класс", price: "В подписке", rating: 4.9, students: 1240, color: "#4F46E5" },
  { title: "Русский язык. ВПР 6–8 класс", subject: "Русский язык", category: "ВПР", teacher: "Мария Козлова", lessons: 32, duration: "16 ч", level: "6–8 класс", price: "В подписке", rating: 4.8, students: 890, color: "#059669" },
  { title: "Физика. Подготовка к ЕГЭ", subject: "Физика", category: "ЕГЭ", teacher: "Алексей Сидоров", lessons: 60, duration: "30 ч", level: "10–11 класс", price: "В подписке", rating: 4.7, students: 540, color: "#D97706" },
  { title: "Химия. ОГЭ — теория и практика", subject: "Химия", category: "ОГЭ", teacher: "Анна Новикова", lessons: 40, duration: "20 ч", level: "9 класс", price: "В подписке", rating: 4.8, students: 380, color: "#DC2626" },
  { title: "Английский язык. Уровень B2", subject: "Английский язык", category: "ЕГЭ", teacher: "Мария Лукьянова", lessons: 52, duration: "26 ч", level: "10–11 класс", price: "В подписке", rating: 4.9, students: 620, color: "#7C3AED" },
  { title: "Информатика. ЕГЭ + программирование", subject: "Информатика", category: "ЕГЭ", teacher: "Дмитрий Волков", lessons: 44, duration: "22 ч", level: "10–11 класс", price: "В подписке", rating: 4.6, students: 320, color: "#0891B2" },
  { title: "Олимпиадная математика", subject: "Математика", category: "Олимпиады", teacher: "Сергей Виноградов", lessons: 36, duration: "18 ч", level: "7–9 класс", price: "990 ₽", rating: 5.0, students: 215, color: "#4F46E5" },
  { title: "Обучение чтению для дошкольников", subject: "Русский язык", category: "Дошкольники", teacher: "Ольга Белова", lessons: 20, duration: "10 ч", level: "4–6 лет", price: "590 ₽", rating: 4.9, students: 1800, color: "#EC4899" },
]

export function CourseCatalog() {
  const [subject, setSubject] = useState("Все")
  const [category, setCategory] = useState("Все")
  const [search, setSearch] = useState("")

  const filtered = COURSES.filter((c) => {
    const matchSubject = subject === "Все" || c.subject === subject
    const matchCategory = category === "Все" || c.category === category
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) || c.teacher.toLowerCase().includes(search.toLowerCase())
    return matchSubject && matchCategory && matchSearch
  })

  return (
    <div className="space-y-5">
      <div className="bg-white border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-4">
        <div className="flex gap-2 mb-4">
          <div className="flex-1 flex items-center gap-2 border-[2px] border-black px-3 py-2 bg-gray-50">
            <Icon name="Search" size={16} className="text-gray-400" />
            <input
              className="flex-1 bg-transparent text-sm font-medium outline-none"
              placeholder="Поиск по курсам, педагогам..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-3">
          <p className="text-xs font-black uppercase tracking-wide text-gray-500 mb-2">Предмет</p>
          <div className="flex flex-wrap gap-2">
            {SUBJECTS.map((s) => (
              <button
                key={s}
                onClick={() => setSubject(s)}
                className={`px-3 py-1 text-xs font-bold border-[2px] border-black transition-all ${subject === s ? "bg-[#4F46E5] text-white shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]" : "bg-white hover:bg-gray-50"}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-wide text-gray-500 mb-2">Категория</p>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-3 py-1 text-xs font-bold border-[2px] border-black transition-all ${category === c ? "bg-[#059669] text-white shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]" : "bg-white hover:bg-gray-50"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="text-sm font-bold text-gray-500">Найдено: {filtered.length} курсов</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((c, i) => (
          <div key={i} className="bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            <div className="h-3 border-b-[3px] border-black" style={{ backgroundColor: c.color }} />
            <div className="p-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h4 className="font-black text-base leading-tight">{c.title}</h4>
                <span className="flex-shrink-0 text-xs font-black px-2 py-0.5 border-[2px] border-black" style={{ backgroundColor: c.color, color: "white" }}>
                  {c.category}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-3">👤 {c.teacher} · {c.level}</p>
              <div className="flex items-center gap-4 text-xs font-bold text-gray-600 mb-3">
                <span className="flex items-center gap-1"><Icon name="Play" size={12} /> {c.lessons} уроков</span>
                <span className="flex items-center gap-1"><Icon name="Clock" size={12} /> {c.duration}</span>
                <span className="flex items-center gap-1"><Icon name="Users" size={12} /> {c.students.toLocaleString("ru")}</span>
                <span className="flex items-center gap-1"><Icon name="Star" size={12} className="text-amber-400" /> {c.rating}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-sm font-black ${c.price === "В подписке" ? "text-[#059669]" : "text-[#4F46E5]"}`}>
                  {c.price}
                </span>
                <button className="px-4 py-2 text-white text-xs font-black border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all" style={{ backgroundColor: c.color }}>
                  Начать курс
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
