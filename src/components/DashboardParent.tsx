import Icon from "@/components/ui/icon"

const CHILDREN = [
  {
    name: "Артём, 9 класс",
    subjects: [
      { name: "Математика", progress: 72, color: "#4F46E5" },
      { name: "Русский язык", progress: 45, color: "#059669" },
      { name: "Физика", progress: 20, color: "#D97706" },
    ],
    badges: 4,
    score: 2310,
  },
]

const PAYMENTS = [
  { date: "01.02.2026", amount: "990 ₽", plan: "Стандарт (1 мес)", status: "Оплачено" },
  { date: "01.01.2026", amount: "990 ₽", plan: "Стандарт (1 мес)", status: "Оплачено" },
  { date: "01.12.2025", amount: "4 990 ₽", plan: "Стандарт (6 мес)", status: "Оплачено" },
]

export function DashboardParent() {
  return (
    <div className="space-y-6">
      {/* Subscription block */}
      <div className="bg-[#059669] border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-5 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-green-100 text-sm">Текущая подписка</p>
            <p className="text-2xl font-black">Стандарт</p>
            <p className="text-green-100">Действует до 1 марта 2026 · 990 ₽/мес</p>
          </div>
          <div className="text-right">
            <p className="text-green-100 text-sm mb-2">Осталось</p>
            <p className="text-4xl font-black">26</p>
            <p className="text-green-100 text-sm">дней</p>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <button className="bg-white text-[#059669] px-4 py-2 border-[2px] border-black font-black text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            Продлить подписку
          </button>
          <button className="bg-transparent text-white border-[2px] border-white px-4 py-2 font-bold text-sm hover:bg-white/10 transition-all">
            Изменить тариф
          </button>
        </div>
      </div>

      {/* Child progress */}
      {CHILDREN.map((child) => (
        <div key={child.name} className="bg-white border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-black flex items-center gap-2">
              <Icon name="User" size={18} />
              {child.name}
            </h3>
            <div className="flex gap-4">
              <span className="text-sm font-bold">⭐ {child.score.toLocaleString("ru")} баллов</span>
              <span className="text-sm font-bold">🏅 {child.badges} бейджа</span>
            </div>
          </div>
          <div className="space-y-3">
            {child.subjects.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between mb-1">
                  <span className="font-bold text-sm">{s.name}</span>
                  <span className="text-sm font-bold" style={{ color: s.color }}>{s.progress}%</span>
                </div>
                <div className="h-3 bg-gray-100 border-[2px] border-black">
                  <div className="h-full" style={{ width: `${s.progress}%`, backgroundColor: s.color }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-amber-50 border-[2px] border-amber-400">
            <p className="text-sm font-bold text-amber-700 flex items-center gap-2">
              <Icon name="Gift" size={16} />
              Обещание: за сдачу ОГЭ на 4+ — поездка в Питер 🎉
            </p>
          </div>
        </div>
      ))}

      {/* Tariffs */}
      <div className="bg-white border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-5">
        <h3 className="text-lg font-black mb-4 flex items-center gap-2">
          <Icon name="CreditCard" size={18} />
          Тарифы
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Базовый", price: "590 ₽", period: "/ мес", features: ["До 3 курсов", "Тесты и тренажёры", "Дашборд ученика"], color: "#6B7280" },
            { name: "Стандарт", price: "990 ₽", period: "/ мес", features: ["Все курсы", "Геймификация", "Родительский дашборд", "Чат с педагогом"], color: "#4F46E5", current: true },
            { name: "Полгода", price: "4 990 ₽", period: "/ 6 мес", features: ["Всё из Стандарта", "Скидка 16%", "Аналитика и отчёты", "Приоритетная поддержка"], color: "#059669" },
          ].map((t) => (
            <div key={t.name} className={`border-[3px] border-black p-4 relative ${t.current ? "bg-[#4F46E5]/5" : "bg-gray-50"}`} style={{ boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)" }}>
              {t.current && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#4F46E5] text-white text-xs font-black px-3 py-1 border-[2px] border-black">
                  ТЕКУЩИЙ
                </div>
              )}
              <p className="font-black text-lg">{t.name}</p>
              <p className="text-2xl font-black" style={{ color: t.color }}>{t.price}<span className="text-sm text-gray-500">{t.period}</span></p>
              <ul className="mt-3 space-y-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-1.5 text-sm">
                    <Icon name="Check" size={14} style={{ color: t.color }} />
                    {f}
                  </li>
                ))}
              </ul>
              {!t.current && (
                <button className="mt-4 w-full py-2 text-white border-[2px] border-black font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all" style={{ backgroundColor: t.color }}>
                  Выбрать
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Payment history */}
      <div className="bg-white border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-5">
        <h3 className="text-lg font-black mb-4 flex items-center gap-2">
          <Icon name="Receipt" size={18} />
          История платежей
        </h3>
        <div className="space-y-2">
          {PAYMENTS.map((p, i) => (
            <div key={i} className="flex items-center justify-between p-3 border-[2px] border-black bg-gray-50">
              <div>
                <p className="font-bold text-sm">{p.plan}</p>
                <p className="text-xs text-gray-500">{p.date}</p>
              </div>
              <div className="text-right">
                <p className="font-black">{p.amount}</p>
                <span className="text-xs bg-[#059669] text-white px-2 py-0.5 font-bold">{p.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
