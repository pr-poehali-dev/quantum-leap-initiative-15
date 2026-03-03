import Icon from "@/components/ui/icon"

const COURSES_T = [
  { name: "Математика. ОГЭ 2026", students: 34, avgScore: 76, status: "Активный" },
  { name: "Алгебра. 8 класс", students: 22, avgScore: 68, status: "Активный" },
  { name: "Геометрия. 9 класс", students: 18, avgScore: 81, status: "Черновик" },
]

const STUDENTS_T = [
  { name: "Максим Козлов", progress: 88, lastTest: 95, alert: false },
  { name: "Алина Смирнова", progress: 74, lastTest: 82, alert: false },
  { name: "Дима Петров", progress: 34, lastTest: 41, alert: true },
  { name: "Катя Михайлова", progress: 60, lastTest: 70, alert: false },
  { name: "Иван Сидоров", progress: 28, lastTest: 35, alert: true },
]

export function DashboardTeacher() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Активных курсов", value: "2", icon: "BookOpen", color: "#4F46E5" },
          { label: "Всего учеников", value: "74", icon: "Users", color: "#059669" },
          { label: "Ср. балл по тестам", value: "73%", icon: "BarChart2", color: "#D97706" },
          { label: "Нужна помощь", value: "8", icon: "AlertTriangle", color: "#DC2626" },
        ].map((s) => (
          <div key={s.label} className="bg-white border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-4">
            <div className="flex items-center gap-2 mb-1">
              <Icon name={s.icon as "BookOpen"} size={18} style={{ color: s.color }} />
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
          <div className="space-y-3">
            {COURSES_T.map((c) => (
              <div key={c.name} className="flex items-center justify-between p-3 border-[2px] border-black bg-gray-50">
                <div>
                  <p className="font-bold text-sm">{c.name}</p>
                  <p className="text-xs text-gray-500">{c.students} учеников · ср. балл {c.avgScore}%</p>
                </div>
                <span className={`text-xs font-black px-2 py-1 border-[2px] border-black ${c.status === "Активный" ? "bg-[#059669] text-white" : "bg-gray-200 text-gray-700"}`}>
                  {c.status}
                </span>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full py-2 bg-[#4F46E5] text-white border-[2px] border-black font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2">
            <Icon name="Plus" size={16} />
            Создать новый курс
          </button>
        </div>

        {/* Students needing attention */}
        <div className="bg-white border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-5">
          <h3 className="text-lg font-black mb-4 flex items-center gap-2">
            <Icon name="Users" size={18} />
            Успеваемость учеников
          </h3>
          <div className="space-y-2">
            {STUDENTS_T.map((s) => (
              <div key={s.name} className={`flex items-center justify-between p-3 border-[2px] ${s.alert ? "border-red-400 bg-red-50" : "border-black bg-gray-50"}`}>
                <div className="flex items-center gap-2">
                  {s.alert && <Icon name="AlertTriangle" size={14} className="text-red-500 flex-shrink-0" />}
                  <div>
                    <p className="font-bold text-sm">{s.name}</p>
                    <p className="text-xs text-gray-500">Прогресс {s.progress}% · Тест {s.lastTest}%</p>
                  </div>
                </div>
                <button className="text-xs font-bold text-[#4F46E5] border-[2px] border-[#4F46E5] px-2 py-1 hover:bg-[#4F46E5] hover:text-white transition-all">
                  Написать
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Course Constructor */}
      <div className="bg-white border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-5">
        <h3 className="text-lg font-black mb-4 flex items-center gap-2">
          <Icon name="Layers" size={18} />
          Конструктор курсов — Добавить элемент
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Видеоурок", icon: "Play", color: "#4F46E5" },
            { label: "Текст / Конспект", icon: "FileText", color: "#059669" },
            { label: "Тест", icon: "ClipboardList", color: "#D97706" },
            { label: "Тренажёр", icon: "Gamepad2", color: "#DC2626" },
            { label: "Инфографика", icon: "BarChart2", color: "#7C3AED" },
            { label: "Аудио", icon: "Music", color: "#0891B2" },
            { label: "PDF / Файл", icon: "Paperclip", color: "#6B7280" },
            { label: "Задание", icon: "PenTool", color: "#EA580C" },
          ].map((el) => (
            <button
              key={el.label}
              className="flex flex-col items-center gap-2 p-3 border-[2px] border-black bg-gray-50 hover:bg-white hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="w-9 h-9 border-[2px] border-black flex items-center justify-center" style={{ backgroundColor: el.color }}>
                <Icon name={el.icon as "Play"} size={16} className="text-white" />
              </div>
              <span className="text-xs font-bold text-center">{el.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
