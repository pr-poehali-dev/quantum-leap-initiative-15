import Icon from "@/components/ui/icon"

const USERS = [
  { name: "Максим Козлов", role: "Ученик", status: "Активен", joined: "12.01.2026" },
  { name: "Ирина Смирнова", role: "Родитель", status: "Активен", joined: "15.01.2026" },
  { name: "Алексей Петров", role: "Педагог", status: "Активен", joined: "03.09.2025" },
  { name: "Дима Сидоров", role: "Ученик", status: "Заблокирован", joined: "20.11.2025" },
]

const MODERATION = [
  { course: "Химия. ЕГЭ 2026", teacher: "Анна К.", status: "На проверке" },
  { course: "Олимпиадная математика", teacher: "Сергей В.", status: "На проверке" },
  { course: "Английский. B2", teacher: "Мария Л.", status: "Одобрен" },
]

export function DashboardAdmin() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Всего пользователей", value: "12 847", icon: "Users", color: "#4F46E5" },
          { label: "Курсов на платформе", value: "342", icon: "BookOpen", color: "#059669" },
          { label: "Доход этого месяца", value: "389 тыс ₽", icon: "TrendingUp", color: "#D97706" },
          { label: "На модерации", value: "2", icon: "Shield", color: "#DC2626" },
        ].map((s) => (
          <div key={s.label} className="bg-white border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-4">
            <div className="flex items-center gap-2 mb-1">
              <Icon name={s.icon as "Users"} size={18} style={{ color: s.color }} />
              <span className="text-2xl font-black">{s.value}</span>
            </div>
            <span className="text-xs font-bold text-gray-500 uppercase">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Users */}
        <div className="bg-white border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-5">
          <h3 className="text-lg font-black mb-4 flex items-center gap-2">
            <Icon name="Users" size={18} />
            Управление пользователями
          </h3>
          <div className="space-y-2">
            {USERS.map((u) => (
              <div key={u.name} className="flex items-center justify-between p-3 border-[2px] border-black bg-gray-50">
                <div>
                  <p className="font-bold text-sm">{u.name}</p>
                  <p className="text-xs text-gray-500">{u.role} · с {u.joined}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-black px-2 py-0.5 border-[2px] border-black ${u.status === "Активен" ? "bg-[#059669] text-white" : "bg-[#DC2626] text-white"}`}>
                    {u.status}
                  </span>
                  <button className="w-7 h-7 border-[2px] border-black bg-white flex items-center justify-center hover:bg-gray-100">
                    <Icon name="MoreVertical" size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Moderation */}
        <div className="bg-white border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-5">
          <h3 className="text-lg font-black mb-4 flex items-center gap-2">
            <Icon name="Shield" size={18} />
            Модерация контента
          </h3>
          <div className="space-y-3">
            {MODERATION.map((m) => (
              <div key={m.course} className="p-3 border-[2px] border-black bg-gray-50">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-bold text-sm">{m.course}</p>
                    <p className="text-xs text-gray-500">Педагог: {m.teacher}</p>
                  </div>
                  <span className={`text-xs font-black px-2 py-0.5 border-[2px] border-black ${m.status === "На проверке" ? "bg-[#D97706] text-white" : "bg-[#059669] text-white"}`}>
                    {m.status}
                  </span>
                </div>
                {m.status === "На проверке" && (
                  <div className="flex gap-2">
                    <button className="flex-1 py-1 bg-[#059669] text-white border-[2px] border-black text-xs font-bold hover:translate-x-[1px] hover:translate-y-[1px] transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none">
                      Одобрить
                    </button>
                    <button className="flex-1 py-1 bg-[#DC2626] text-white border-[2px] border-black text-xs font-bold hover:translate-x-[1px] hover:translate-y-[1px] transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none">
                      Отклонить
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Revenue chart placeholder */}
      <div className="bg-white border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-5">
        <h3 className="text-lg font-black mb-4 flex items-center gap-2">
          <Icon name="TrendingUp" size={18} />
          Доходы платформы — 2026
        </h3>
        <div className="flex items-end gap-2 h-28">
          {[180, 210, 195, 260, 310, 289, 389].map((val, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full bg-[#4F46E5] border-[2px] border-black"
                style={{ height: `${(val / 389) * 100}px` }}
              />
              <span className="text-xs font-bold text-gray-500">
                {["Авг", "Сен", "Окт", "Ноя", "Дек", "Янв", "Фев"][i]}
              </span>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-2 text-right">Значения в тыс. ₽</p>
      </div>

      {/* Settings */}
      <div className="bg-white border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-5">
        <h3 className="text-lg font-black mb-4 flex items-center gap-2">
          <Icon name="Settings" size={18} />
          Настройки платформы
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { label: "Тарифы и подписки", icon: "CreditCard" },
            { label: "Геймификация", icon: "Trophy" },
            { label: "Email-уведомления", icon: "Mail" },
            { label: "Интеграции", icon: "Plug" },
            { label: "Учебный календарь", icon: "Calendar" },
            { label: "Системные логи", icon: "Terminal" },
          ].map((s) => (
            <button key={s.label} className="flex items-center gap-2 p-3 border-[2px] border-black bg-gray-50 hover:bg-white hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all text-sm font-bold">
              <Icon name={s.icon as "CreditCard"} size={16} className="text-[#4F46E5]" />
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
