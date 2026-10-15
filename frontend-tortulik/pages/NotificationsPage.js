window.Pages = window.Pages || {};

Pages.notifications = function () {
  return `
<!-- VIEW 2: NOTIFICATIONS / ALERTS (Уведомления — список уведомлений) -->
<div id="view-notifications" class="space-y-6 hidden animate-fadeIn">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Уведомления</h2>
            <p class="text-sm text-gray-500 mt-0.5">Воскресенье, 4 октября 2026</p>
        </div>
        <button onclick="markAllAsRead()" class="text-xs font-semibold text-emerald-700 hover:text-emerald-900 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-100 transition-all self-start sm:self-auto">
            Отметить все как прочитанное
        </button>
    </div>
    ${Components.NotificationFilters()}
    ${Components.NotificationList()}
</div>
`;
};

// Notification Filtering Tabs Logic
function filterNotifications(filter) {
    const allTabs = document.querySelectorAll('.filter-tab');
    allTabs.forEach(tab => {
        tab.classList.remove('bg-[#1B362D]', 'text-white', 'shadow-sm');
        tab.classList.add('bg-white', 'text-gray-600', 'border', 'border-gray-200');
    });

    const activeTab = document.getElementById(`filter-${filter}`);
    if (activeTab) {
        activeTab.classList.remove('bg-white', 'text-gray-600', 'border', 'border-gray-200');
        activeTab.classList.add('bg-[#1B362D]', 'text-white', 'shadow-sm');
    }

    const items = document.querySelectorAll('.notif-item');
    items.forEach(item => {
        if (filter === 'all') {
            item.style.display = 'flex';
        } else if (filter === 'unread') {
            if (item.classList.contains('unread')) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        } else if (filter === 'read') {
            if (item.classList.contains('read')) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        }
    });
}

function markAllAsRead() {
    showNotificationModal('Уведомления', 'Все уведомления отмечены как прочитанные.');
    document.querySelectorAll('.notif-item.unread').forEach(item => {
        item.classList.remove('unread');
        item.classList.add('read');
        item.style.opacity = '0.8';
        const dot = item.querySelector('.w-2\\.5');
        if (dot) dot.style.backgroundColor = 'transparent';
    });
}
