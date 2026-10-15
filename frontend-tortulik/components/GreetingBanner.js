// Component: dashboard greeting + "start round" button
window.Components = window.Components || {};

Components.GreetingBanner = function () {
  return `
<!-- Greeting banner -->
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
    <div>
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Здравствуйте, Алмас</h2>
        <p class="text-sm text-gray-500 mt-0.5">Воскресенье, 4 октября 2026</p>
    </div>
    <div class="flex items-center space-x-2">
        <button onclick="showNotificationModal('Быстрое действие', 'Запуск планового обхода стада...')" class="inline-flex items-center space-x-2 bg-[#1B362D] hover:bg-[#2C4A3E] text-white px-4 py-2.5 rounded-xl text-sm font-medium shadow-sm transition-all">
            <i data-lucide="clipboard-check" class="w-4 h-4"></i>
            <span>Начать обход стада</span>
        </button>
    </div>
</div>
`;
};
