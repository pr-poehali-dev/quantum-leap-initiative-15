import { useState } from "react"
import { useUIStore } from "@/lib/ui-store"
import Icon from "@/components/ui/icon"

const ROLES = [
  {
    id: "student" as const,
    label: "Ученик",
    icon: "GraduationCap",
    color: "#4F46E5",
    shadow: "#3730A3",
    description: "Проходи уроки, выполняй задания, зарабатывай баллы и бейджи",
    features: ["Интерактивные уроки", "Тренажёры и тесты", "Геймификация", "Личный дашборд"],
  },
  {
    id: "parent" as const,
    label: "Родитель",
    icon: "Heart",
    color: "#059669",
    shadow: "#047857",
    description: "Следи за успехами ребёнка и управляй подпиской",
    features: ["Прогресс ребёнка", "Управление подпиской", "Чат с педагогами", "Уведомления"],
  },
  {
    id: "teacher" as const,
    label: "Педагог",
    icon: "BookOpen",
    color: "#D97706",
    shadow: "#B45309",
    description: "Создавай курсы, отслеживай успеваемость учеников",
    features: ["Конструктор курсов", "Аналитика класса", "Чат с родителями", "Управление доступом"],
  },
  {
    id: "admin" as const,
    label: "Администратор",
    icon: "Shield",
    color: "#DC2626",
    shadow: "#B91C1C",
    description: "Управляй платформой, пользователями и контентом",
    features: ["Управление пользователями", "Модерация контента", "Статистика платформы", "Настройка тарифов"],
  },
]

export function LandingPage() {
  const { setRole } = useUIStore()
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[#F8F9FF] flex flex-col">
      {/* Header */}
      <header className="border-b-[3px] border-black bg-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#4F46E5] border-[3px] border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <Icon name="Zap" size={20} className="text-white" />
          </div>
          <div>
            <span className="text-xl font-black">EduOrbit</span>
            <span className="text-xs text-gray-500 block -mt-1">Цифровое образование</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm font-bold text-gray-600">
          <Icon name="Phone" size={16} />
          <span>8 800 123-45-67</span>
        </div>
      </header>

      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="text-center mb-12 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-[#4F46E5] text-white px-4 py-2 border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-6 font-bold text-sm">
            <Icon name="Sparkles" size={16} />
            Платформа дополнительного образования
          </div>
          <h1 className="text-5xl font-black mb-4 leading-tight">
            Учись. Расти.<br />
            <span className="text-[#4F46E5]">Достигай.</span>
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            Единая экосистема для учеников, родителей и педагогов. Интерактивные уроки, геймификация и аналитика прогресса.
          </p>
        </div>

        {/* Stats */}
        <div className="flex gap-4 mb-12 flex-wrap justify-center">
          {[
            { label: "Учеников", value: "12 400+", icon: "Users" },
            { label: "Курсов", value: "340+", icon: "BookOpen" },
            { label: "Педагогов", value: "180+", icon: "Award" },
            { label: "Предметов", value: "14", icon: "Layers" },
          ].map((s) => (
            <div key={s.label} className="bg-white border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] px-5 py-3 text-center">
              <div className="flex items-center gap-2 justify-center mb-1">
                <Icon name={s.icon as "Users"} size={16} className="text-[#4F46E5]" />
                <span className="text-2xl font-black">{s.value}</span>
              </div>
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wide">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Role Selection */}
        <div className="w-full max-w-4xl">
          <p className="text-center font-black text-xl mb-6">Выберите вашу роль для входа</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ROLES.map((role) => (
              <button
                key={role.id}
                onClick={() => setRole(role.id)}
                onMouseEnter={() => setHovered(role.id)}
                onMouseLeave={() => setHovered(null)}
                className="bg-white border-[3px] border-black p-5 text-left transition-all hover:translate-x-[3px] hover:translate-y-[3px] focus:outline-none"
                style={{
                  boxShadow: hovered === role.id
                    ? `2px 2px 0px 0px rgba(0,0,0,1)`
                    : `5px 5px 0px 0px rgba(0,0,0,1)`,
                }}
              >
                <div
                  className="w-12 h-12 border-[3px] border-black flex items-center justify-center mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  style={{ backgroundColor: role.color }}
                >
                  <Icon name={role.icon as "GraduationCap"} size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-black mb-2">{role.label}</h3>
                <p className="text-sm text-gray-600 mb-3 leading-snug">{role.description}</p>
                <ul className="space-y-1">
                  {role.features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5 text-xs font-medium text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: role.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div
                  className="mt-4 w-full py-2 border-[2px] border-black text-center text-sm font-black text-white"
                  style={{ backgroundColor: role.color }}
                >
                  Войти как {role.label.toLowerCase()}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Subjects */}
        <div className="mt-12 w-full max-w-4xl">
          <p className="text-center text-sm font-bold text-gray-500 mb-4">Доступные предметы и направления</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {["Математика", "Русский язык", "Физика", "Химия", "Биология", "История", "Английский язык", "Информатика", "География", "Обществознание", "Литература", "ЕГЭ", "ОГЭ", "ВПР", "Олимпиады"].map((s) => (
              <span key={s} className="bg-white border-[2px] border-black px-3 py-1 text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
