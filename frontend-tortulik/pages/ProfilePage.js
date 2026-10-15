window.Pages = window.Pages || {};

Pages.profile = function () {
  return `
<!-- VIEW 6: PROFILE (Профиль) -->
<div id="view-profile" class="space-y-6 hidden animate-fadeIn">
    <div class="max-w-xl mx-auto bg-white rounded-3xl p-8 border border-gray-200 shadow-sm text-center space-y-4">
        <div class="w-24 h-24 rounded-full bg-emerald-100 text-emerald-800 font-bold text-3xl flex items-center justify-center mx-auto border-4 border-emerald-50">
            А
        </div>
        <div>
            <h2 class="text-2xl font-bold text-gray-900">Группа жестких</h2>
            <p class="text-sm text-gray-500">Глава Tort Tulik · Алматы</p>
        </div>
        <div class="pt-4 border-t border-gray-100 text-left space-y-3">
            <div class="flex justify-between text-sm py-1 border-b border-gray-50">
                <span class="text-gray-500">Хозяйство:</span>
                <span class="font-semibold text-gray-900">Tort Tulik</span>
            </div>
            <div class="flex justify-between text-sm py-1 border-b border-gray-50">
                <span class="text-gray-500">Поголовье:</span>
                <span class="font-semibold text-gray-900">128 голов</span>
            </div>
            <div class="flex justify-between text-sm py-1">
                <span class="text-gray-500">Статус системы:</span>
                <span class="font-semibold text-emerald-600">Активна (Онлайн)</span>
            </div>
        </div>
        <button onclick="showNotificationModal('Выход', 'Сеанс завершен.')" class="w-full bg-gray-100 hover:bg-rose-50 hover:text-rose-600 text-gray-700 py-3 rounded-xl font-semibold transition-all">
            Выйти из системы
        </button>
    </div>
</div>
`;
};
