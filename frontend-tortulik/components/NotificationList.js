// Component: list of notification cards
window.Components = window.Components || {};

Components.NotificationList = function () {
  return `
<!-- Notification Items List -->
<div class="space-y-3" id="notifications-list-container">
    <!-- Item 1 (Unread) -->
    <div class="notif-item unread bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-200/80 flex items-center justify-between hover:shadow-md transition-all">
        <div class="flex items-start space-x-4">
            <div class="w-11 h-11 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                <i data-lucide="alert-triangle" class="w-5 h-5"></i>
            </div>
            <div>
                <h4 class="font-bold text-gray-900 text-sm sm:text-base">Животному нужен осмотр</h4>
                <p class="text-xs text-gray-500 mt-0.5">Бирка №0231: снижение активности</p>
            </div>
        </div>
        <div class="flex flex-col items-end space-y-2 shrink-0">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
            <span class="text-[11px] text-gray-400 font-medium">10 мин назад</span>
        </div>
    </div>

    <!-- Item 2 (Unread) -->
    <div class="notif-item unread bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-200/80 flex items-center justify-between hover:shadow-md transition-all">
        <div class="flex items-start space-x-4">
            <div class="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <i data-lucide="plus-circle" class="w-5 h-5"></i>
            </div>
            <div>
                <h4 class="font-bold text-gray-900 text-sm sm:text-base">Новое животное добавлено</h4>
                <p class="text-xs text-gray-500 mt-0.5">Бирка №0458 · КРС · загон №3</p>
            </div>
        </div>
        <div class="flex flex-col items-end space-y-2 shrink-0">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
            <span class="text-[11px] text-gray-400 font-medium">1 ч назад</span>
        </div>
    </div>

    <!-- Item 3 (Read) -->
    <div class="notif-item read bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-200/80 flex items-center justify-between hover:shadow-md transition-all opacity-80">
        <div class="flex items-start space-x-4">
            <div class="w-11 h-11 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <i data-lucide="syringe" class="w-5 h-5"></i>
            </div>
            <div>
                <h4 class="font-bold text-gray-900 text-sm sm:text-base">Вакцинация от ящура завтра</h4>
                <p class="text-xs text-gray-500 mt-0.5">5 октября, 09:00 · 5 КРС и 3 овцы</p>
            </div>
        </div>
        <div class="flex flex-col items-end space-y-2 shrink-0">
            <span class="w-2.5 h-2.5 rounded-full bg-transparent"></span>
            <span class="text-[11px] text-gray-400 font-medium">2 ч назад</span>
        </div>
    </div>

    <!-- Item 4 (Read) -->
    <div class="notif-item read bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-200/80 flex items-center justify-between hover:shadow-md transition-all opacity-80">
        <div class="flex items-start space-x-4">
            <div class="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <i data-lucide="heart" class="w-5 h-5"></i>
            </div>
            <div>
                <h4 class="font-bold text-gray-900 text-sm sm:text-base">Зарегистрирован отёл</h4>
                <p class="text-xs text-gray-500 mt-0.5">Корова №0117 · добавьте бирку телёнку</p>
            </div>
        </div>
        <div class="flex flex-col items-end space-y-2 shrink-0">
            <span class="w-2.5 h-2.5 rounded-full bg-transparent"></span>
            <span class="text-[11px] text-gray-400 font-medium">Сегодня, 08:15</span>
        </div>
    </div>

    <!-- Item 5 (Read) -->
    <div class="notif-item read bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-200/80 flex items-center justify-between hover:shadow-md transition-all opacity-80">
        <div class="flex items-start space-x-4">
            <div class="w-11 h-11 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
                <i data-lucide="shield" class="w-5 h-5"></i>
            </div>
            <div>
                <h4 class="font-bold text-gray-900 text-sm sm:text-base">Новый вход в аккаунт</h4>
                <p class="text-xs text-gray-500 mt-0.5">Android, Алматы · 09:12</p>
            </div>
        </div>
        <div class="flex flex-col items-end space-y-2 shrink-0">
            <span class="w-2.5 h-2.5 rounded-full bg-transparent"></span>
            <span class="text-[11px] text-gray-400 font-medium">Сегодня, 09:12</span>
        </div>
    </div>

    <!-- Item 6 (Read) -->
    <div class="notif-item read bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-200/80 flex items-center justify-between hover:shadow-md transition-all opacity-80">
        <div class="flex items-start space-x-4">
            <div class="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <i data-lucide="refresh-cw" class="w-5 h-5"></i>
            </div>
            <div>
                <h4 class="font-bold text-gray-900 text-sm sm:text-base">Данные синхронизированы</h4>
                <p class="text-xs text-gray-500 mt-0.5">Все изменения сохранены</p>
            </div>
        </div>
        <div class="flex flex-col items-end space-y-2 shrink-0">
            <span class="w-2.5 h-2.5 rounded-full bg-transparent"></span>
            <span class="text-[11px] text-gray-400 font-medium">Сегодня, 09:38</span>
        </div>
    </div>
</div>
`;
};
