export function MiniAppAbout() {
  return (
    <div className="max-w-2xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Обо мне</h2>

      <div className="space-y-6">
        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Привет, я Панда!</h3>
          <p className="text-lg leading-relaxed mb-4">
            Я креативный человек с необычным взглядом на мир. Работаю на стыке технологий и творчества,
            создаю вещи, которые одновременно красивы и полезны.
          </p>
          <p className="text-lg leading-relaxed">
            Когда не работаю над проектами, исследую новые идеи, экспериментирую с AI и нахожу вдохновение
            в самых неожиданных местах.
          </p>
        </div>

        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Навыки и интересы</h3>
          <div className="flex flex-wrap gap-2">
            {["Креатив", "Дизайн", "TypeScript", "AI/ML", "Арт", "Код", "Тексты", "Идеи"].map(
              (skill) => (
                <span
                  key={skill}
                  className="bg-[#FF2E63] text-white px-3 py-1 border-[2px] border-black font-bold text-sm"
                >
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}