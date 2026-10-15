// Component: notification filter tabs (Все / Непрочитанное / Прочитанное)
window.Components = window.Components || {};

Components.NotificationFilters = function () {
  return `
<!-- Filter Tabs -->
<div class="flex items-center justify-between flex-wrap gap-3 pb-2 border-b border-gray-200">
    <div class="flex items-center space-x-2">
        <button onclick="filterNotifications('all')" id="filter-all" class="filter-tab px-5 py-2 rounded-full text-xs font-bold transition-all bg-[#1B362D] text-white shadow-sm">
            Все
        </button>
        <button onclick="filterNotifications('unread')" id="filter-unread" class="filter-tab px-5 py-2 rounded-full text-xs font-bold transition-all bg-white text-gray-600 border border-gray-200 hover:bg-gray-50">
            Непрочитанное
        </button>
        <button onclick="filterNotifications('read')" id="filter-read" class="filter-tab px-5 py-2 rounded-full text-xs font-bold transition-all bg-white text-gray-600 border border-gray-200 hover:bg-gray-50">
            Прочитанное
        </button>
    </div>
    <button onclick="showNotificationModal('Фильтры', 'Расширенная фильтрация уведомлений доступна в настройках.')" class="p-2 rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gray-50">
        <i data-lucide="sliders-horizontal" class="w-4 h-4"></i>
    </button>
</div>
`;
};
