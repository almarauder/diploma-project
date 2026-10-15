// Component: "Забота по расписанию" task list
window.Components = window.Components || {};

Components.ScheduleTasks = function () {
  return `
<!-- Schedule Tasks Section ("Забота по расписанию") -->
<div class="space-y-4">
    <div class="flex items-center justify-between">
        <h3 class="text-lg font-bold text-gray-900">Забота по расписанию</h3>
        <button onclick="switchRoute('notifications')" class="text-sm font-semibold text-emerald-700 hover:text-emerald-900 flex items-center space-x-1">
            <span>Все задачи</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </button>
    </div>

    <div class="space-y-3">
        <!-- Task Card 1 -->
        <div class="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition-all">
            <div class="flex items-start space-x-4">
                <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <i data-lucide="syringe" class="w-5 h-5"></i>
                </div>
                <div>
                    <h4 class="font-bold text-gray-900 text-base">Вакцинация от ящура</h4>
                    <p class="text-xs text-gray-500 mt-0.5">5 октября, 09:00 · 5 КРС и 3 овцы</p>
                </div>
            </div>
            <div class="flex items-center justify-between sm:justify-end space-x-3">
                <span class="bg-emerald-100/70 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-xl">8 голов</span>
                <button onclick="showNotificationModal('Задача', 'Вакцинация запланирована на завтра в 09:00.')" class="w-8 h-8 rounded-full bg-gray-100 hover:bg-emerald-700 hover:text-white flex items-center justify-center transition-all">
                    <i data-lucide="chevron-right" class="w-4 h-4"></i>
                </button>
            </div>
        </div>

        <!-- Task Card 2 -->
        <div class="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition-all">
            <div class="flex items-start space-x-4">
                <div class="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <i data-lucide="droplet" class="w-5 h-5"></i>
                </div>
                <div>
                    <h4 class="font-bold text-gray-900 text-base">Проверить поилки</h4>
                    <p class="text-xs text-gray-500 mt-0.5">Сегодня, 15:00 · основной загон</p>
                </div>
            </div>
            <div class="flex items-center justify-between sm:justify-end space-x-3">
                <span class="bg-amber-100/70 text-amber-800 text-xs font-semibold px-3 py-1.5 rounded-xl">Сегодня</span>
                <button onclick="showNotificationModal('Задача', 'Проверка поилок запланирована на сегодня в 15:00.')" class="w-8 h-8 rounded-full bg-gray-100 hover:bg-emerald-700 hover:text-white flex items-center justify-center transition-all">
                    <i data-lucide="chevron-right" class="w-4 h-4"></i>
                </button>
            </div>
        </div>
    </div>
</div>
`;
};
