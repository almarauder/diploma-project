window.Pages = window.Pages || {};

Pages.aiAgent = function () {
  return `
<!-- VIEW 5: AI AGENT (ИИ-агент) -->
<div id="view-ai-agent" class="space-y-6 hidden animate-fadeIn">
    <div class="max-w-2xl mx-auto bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-4">
        <div class="flex items-center space-x-3 border-b border-gray-100 pb-4">
            <div class="w-10 h-10 rounded-2xl bg-emerald-700 text-white flex items-center justify-center">
                <i data-lucide="bot" class="w-5 h-5"></i>
            </div>
            <div>
                <h3 class="font-bold text-gray-900">Tort Tulik ИИ-Агент</h3>
                <p class="text-xs text-emerald-700 font-medium">Онлайн · Анализ состояния стада</p>
            </div>
        </div>
        <div class="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100 text-sm text-emerald-900">
            Здравствуйте, Алмас! У бирки №0231 зафиксировано снижение активности за последние 4 часа. Рекомендуем провести ветеринарный осмотр.
        </div>
        <div class="flex items-center space-x-2 pt-2">
            <input type="text" placeholder="Задайте вопрос ИИ-ассистенту..." class="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-600">
            <button onclick="showNotificationModal('ИИ-Агент', 'Сообщение отправлено ИИ-ассистенту хозяйства.')" class="bg-[#1B362D] text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-[#2C4A3E] transition-all">
                Спросить
            </button>
        </div>
    </div>
</div>
`;
};
