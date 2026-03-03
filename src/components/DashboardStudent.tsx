import Icon from "@/components/ui/icon"

const COURSES = [
  { name: "Математика. ОГЭ", progress: 72, color: "#4F46E5", lessons: 24, done: 17 },
  { name: "Русский язык. ВПР", progress: 45, color: "#059669", lessons: 18, done: 8 },
  { name: "Физика. 9 класс", progress: 20, color: "#D97706", lessons: 30, done: 6 },
]

const BADGES = [
  { name: "Отличник теста", icon: "Star", color: "#F59E0B" },
  { name: "5 дней подряд", icon: "Flame", color: "#EF4444" },
  { name: "Быстрый старт", icon: "Zap", color: "#4F46E5" },
  { name: "Топ-10", icon: "Trophy", color: "#059669" },
]

const LEADERBOARD = [
  { name: "Максим К.", score: 2840, place: 1 },
  { name: "Алина С.", score: 2650, place: 2 },
  { name: "Вы", score: 2310, place: 3, isMe: true },
  { name: "Дима П.", score: 2100, place: 4 },
  { name: "Катя М.", score: 1980, place: 5 },
]

export function DashboardStudent() {
  return (
    <div className="space-y-6">
      {/* Welcome + Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Баллов", value: "2 310", icon: "Star", color: "#F59E0B" },
          { label: "Бейджей", value: "4", icon: "Award", color: "#4F46E5" },
          { label: "Место в рейтинге", value: "#3", icon: "Trophy", color: "#059669" },
          { label: "Дней активности", value: "12", icon: "Flame", color: "#EF4444" },
        ].map((s) => (
          <div key={s.label} className="bg-white border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-4">
            <div className="flex items-center gap-2 mb-1">
              <Icon name={s.icon as "Star"} size={18} style={{ color: s.color }} />
              <span className="text-2xl font-black">{s.value}</span>
            </div>
            <span className="text-xs font-bold text-gray-500 uppercase">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* My Courses */}
        <div className="bg-white border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-5">
          <h3 className="text-lg font-black mb-4 flex items-center gap-2">
            <Icon name="BookOpen" size={18} />
            Мои курсы
          </h3>
          <div className="space-y-4">
            {COURSES.map((c) => (
              <div key={c.name}>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-sm">{c.name}</span>
                  <span className="text-xs text-gray-500">{c.done}/{c.lessons} уроков</span>
                </div>
                <div className="h-3 bg-gray-100 border-[2px] border-black">
                  <div
                    className="h-full transition-all"
                    style={{ width: `${c.progress}%`, backgroundColor: c.color }}
                  />
                </div>
                <span className="text-xs font-bold" style={{ color: c.color }}>{c.progress}% завершено</span>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full py-2 bg-[#4F46E5] text-white border-[2px] border-black font-bold text-sm hover:translate-x-[2px] hover:translate-y-[2px] transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
            Все курсы
          </button>
        </div>

        {/* Badges */}
        <div className="bg-white border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-5">
          <h3 className="text-lg font-black mb-4 flex items-center gap-2">
            <Icon name="Award" size={18} />
            Мои бейджи
          </h3>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {BADGES.map((b) => (
              <div key={b.name} className="flex items-center gap-2 p-3 bg-gray-50 border-[2px] border-black">
                <div className="w-8 h-8 flex items-center justify-center border-[2px] border-black" style={{ backgroundColor: b.color }}>
                  <Icon name={b.icon as "Star"} size={16} className="text-white" />
                </div>
                <span className="text-xs font-bold leading-tight">{b.name}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#4F46E5]/10 border-[2px] border-[#4F46E5] p-3">
            <p className="text-xs font-bold text-[#4F46E5]">
              💡 Пройди тест по Физике на 90%+ и получи бейдж «Физик-эксперт»
            </p>
          </div>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="bg-white border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-5">
        <h3 className="text-lg font-black mb-4 flex items-center gap-2">
          <Icon name="Trophy" size={18} />
          Рейтинг класса — Февраль
        </h3>
        <div className="space-y-2">
          {LEADERBOARD.map((u) => (
            <div
              key={u.name}
              className={`flex items-center gap-3 p-3 border-[2px] border-black ${u.isMe ? "bg-[#4F46E5] text-white" : "bg-gray-50"}`}
            >
              <span className={`w-7 h-7 flex items-center justify-center font-black text-sm border-[2px] ${u.isMe ? "border-white bg-white text-[#4F46E5]" : "border-black bg-white"}`}>
                {u.place}
              </span>
              <span className="flex-1 font-bold">{u.name}</span>
              <span className="font-black">{u.score.toLocaleString("ru")} ⭐</span>
            </div>
          ))}
        </div>
      </div>

      {/* Next lesson */}
      <div className="bg-white border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-5">
        <h3 className="text-lg font-black mb-3 flex items-center gap-2">
          <Icon name="Play" size={18} />
          Рекомендуем продолжить
        </h3>
        <div className="flex items-center gap-4 p-4 bg-[#4F46E5]/5 border-[2px] border-[#4F46E5]">
          <div className="w-14 h-14 bg-[#4F46E5] border-[2px] border-black flex items-center justify-center flex-shrink-0">
            <Icon name="Play" size={24} className="text-white" />
          </div>
          <div className="flex-1">
            <p className="font-black">Урок 18 — Квадратные уравнения</p>
            <p className="text-sm text-gray-600">Математика. ОГЭ · 25 мин</p>
          </div>
          <button className="bg-[#4F46E5] text-white px-4 py-2 border-[2px] border-black font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            Начать
          </button>
        </div>
      </div>
    </div>
  )
}
