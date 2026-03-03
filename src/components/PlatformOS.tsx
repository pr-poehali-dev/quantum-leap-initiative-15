import { useEffect } from "react"
import { useUIStore } from "@/lib/ui-store"
import { DashboardStudent } from "./DashboardStudent"
import { DashboardParent } from "./DashboardParent"
import { DashboardTeacher } from "./DashboardTeacher"
import { DashboardAdmin } from "./DashboardAdmin"
import { CourseCatalog } from "./CourseCatalog"
import Icon from "@/components/ui/icon"

type AppType = "dashboard" | "courses" | "catalog" | "analytics" | "chat" | "profile" | "admin" | null

const ROLE_LABELS: Record<string, string> = {
  student: "Ученик",
  parent: "Родитель",
  teacher: "Педагог",
  admin: "Администратор",
}

const ROLE_COLORS: Record<string, string> = {
  student: "#4F46E5",
  parent: "#059669",
  teacher: "#D97706",
  admin: "#DC2626",
}

const ROLE_NAV: Record<string, Array<{ id: AppType; label: string; icon: string }>> = {
  student: [
    { id: "dashboard", label: "Дашборд", icon: "LayoutDashboard" },
    { id: "catalog", label: "Каталог курсов", icon: "BookOpen" },
    { id: "chat", label: "Сообщения", icon: "MessageSquare" },
    { id: "profile", label: "Профиль", icon: "User" },
  ],
  parent: [
    { id: "dashboard", label: "Дашборд", icon: "LayoutDashboard" },
    { id: "catalog", label: "Каталог курсов", icon: "BookOpen" },
    { id: "chat", label: "Чат с педагогами", icon: "MessageSquare" },
    { id: "profile", label: "Профиль", icon: "User" },
  ],
  teacher: [
    { id: "dashboard", label: "Дашборд", icon: "LayoutDashboard" },
    { id: "courses", label: "Мои курсы", icon: "BookOpen" },
    { id: "catalog", label: "Каталог", icon: "Search" },
    { id: "chat", label: "Сообщения", icon: "MessageSquare" },
    { id: "profile", label: "Профиль", icon: "User" },
  ],
  admin: [
    { id: "dashboard", label: "Дашборд", icon: "LayoutDashboard" },
    { id: "catalog", label: "Каталог курсов", icon: "BookOpen" },
    { id: "admin", label: "Управление", icon: "Shield" },
    { id: "profile", label: "Профиль", icon: "User" },
  ],
}

function ChatPlaceholder() {
  return (
    <div className="bg-white border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-6 h-96 flex flex-col">
      <h3 className="text-lg font-black mb-4 flex items-center gap-2">
        <Icon name="MessageSquare" size={18} />
        Сообщения
      </h3>
      <div className="flex-1 flex flex-col gap-3">
        <div className="flex gap-3">
          <div className="w-8 h-8 bg-[#059669] border-[2px] border-black flex items-center justify-center flex-shrink-0">
            <Icon name="User" size={14} className="text-white" />
          </div>
          <div className="bg-gray-100 border-[2px] border-black p-3 max-w-xs">
            <p className="text-xs font-bold text-gray-500 mb-1">Иван Петров (Педагог)</p>
            <p className="text-sm">Артём, посмотрел твою контрольную — отличный результат! Следующее задание открыто.</p>
          </div>
        </div>
        <div className="flex gap-3 justify-end">
          <div className="bg-[#4F46E5] text-white border-[2px] border-black p-3 max-w-xs">
            <p className="text-sm">Спасибо, Иван Александрович! Уже начал следующий модуль.</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        <input className="flex-1 border-[2px] border-black px-3 py-2 text-sm outline-none" placeholder="Написать сообщение..." />
        <button className="bg-[#4F46E5] text-white border-[2px] border-black px-4 py-2 font-bold text-sm">
          Отправить
        </button>
      </div>
    </div>
  )
}

function ProfilePlaceholder({ role }: { role: string }) {
  const color = ROLE_COLORS[role] || "#4F46E5"
  return (
    <div className="space-y-4">
      <div className="bg-white border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 border-[3px] border-black flex items-center justify-center text-white text-2xl font-black" style={{ backgroundColor: color }}>
            П
          </div>
          <div>
            <h3 className="text-xl font-black">Пользователь</h3>
            <p className="text-gray-500">{ROLE_LABELS[role]}</p>
          </div>
        </div>
      </div>
      <div className="bg-white border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-6">
        <h3 className="font-black mb-4">Настройки</h3>
        <div className="space-y-2">
          {["Изменить пароль", "Настройка уведомлений", "Двухфакторная аутентификация"].map((s) => (
            <button key={s} className="w-full text-left p-3 border-[2px] border-black bg-gray-50 text-sm font-bold hover:bg-white hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex justify-between items-center">
              {s}
              <Icon name="ChevronRight" size={14} />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export function PlatformOS() {
  const { osOpen, activeApp, role, closeOS, setActiveApp, logout } = useUIStore()

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && osOpen) logout()
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [osOpen, logout])

  if (!osOpen || !role) return null

  const nav = ROLE_NAV[role] || []
  const color = ROLE_COLORS[role] || "#4F46E5"

  const renderContent = () => {
    switch (activeApp) {
      case "dashboard":
        if (role === "student") return <DashboardStudent />
        if (role === "parent") return <DashboardParent />
        if (role === "teacher") return <DashboardTeacher />
        if (role === "admin") return <DashboardAdmin />
        return null
      case "catalog":
        return <CourseCatalog />
      case "chat":
        return <ChatPlaceholder />
      case "profile":
        return <ProfilePlaceholder role={role} />
      case "admin":
        return <DashboardAdmin />
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="w-16 h-16 border-[3px] border-black flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: color }}>
                <Icon name="Zap" size={28} className="text-white" />
              </div>
              <h2 className="text-3xl font-black mb-2">EduOrbit</h2>
              <p className="text-gray-500">Выберите раздел в меню слева</p>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-[#F8F9FF] overflow-hidden flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-5 py-3 border-b-[3px] border-black bg-white flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 border-[3px] border-black flex items-center justify-center" style={{ backgroundColor: color }}>
            <Icon name="Zap" size={16} className="text-white" />
          </div>
          <span className="text-xl font-black">EduOrbit</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 border-[2px] border-black bg-gray-50">
            <div className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-black" style={{ backgroundColor: color }}>
              П
            </div>
            <span className="text-sm font-bold">{ROLE_LABELS[role]}</span>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-1.5 px-3 py-2 border-[2px] border-black bg-white text-sm font-bold hover:bg-gray-50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            <Icon name="LogOut" size={14} />
            Выйти
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <nav className="w-56 bg-white border-r-[3px] border-black p-3 flex flex-col gap-1 flex-shrink-0 overflow-y-auto">
          {nav.map((item) => {
            const isActive = activeApp === item.id
            return (
              <button
                key={item.id}
                onClick={() => setActiveApp(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 border-[2px] border-black text-sm font-bold text-left transition-all ${
                  isActive
                    ? "text-white shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                    : "bg-white hover:bg-gray-50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px]"
                }`}
                style={isActive ? { backgroundColor: color } : {}}
              >
                <Icon name={item.icon as "LayoutDashboard"} size={16} />
                {item.label}
              </button>
            )
          })}
        </nav>

        {/* Main */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto">
            {activeApp === "dashboard" && (
              <div className="mb-5">
                <h2 className="text-2xl font-black">Добро пожаловать в EduOrbit</h2>
                <p className="text-gray-500 text-sm">Личный кабинет — {ROLE_LABELS[role]}</p>
              </div>
            )}
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  )
}
