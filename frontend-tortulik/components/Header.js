// Component: top app header (page title, sync badge, bell)
window.Components = window.Components || {};

Components.Header = function () {
  return `
<!-- Top App Header -->
<header class="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
    <div class="flex items-center space-x-4">
        <div class="md:hidden flex items-center space-x-2">
            <div class="w-8 h-8 rounded-lg bg-[#1B362D] flex items-center justify-center text-white">
                <i data-lucide="shield-check" class="w-5 h-5"></i>
            </div>
            <span class="font-bold text-[#1B362D]">Tort Tulik</span>
        </div>
        <div>
            <h2 id="page-title" class="text-xl font-bold text-gray-900">Обзор хозяйства</h2>
            <p id="page-subtitle" class="text-xs text-gray-500">Воскресенье, 4 октября 2026</p>
        </div>
    </div>

    <!-- Header Actions & Notifications Button -->
    <div class="flex items-center space-x-3">
        <div class="hidden sm:flex items-center space-x-2 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100 text-xs text-emerald-800 font-medium">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Данные синхронизированы</span>
        </div>

        <button onclick="switchRoute('notifications')" class="relative p-2.5 rounded-full bg-[#1B362D] text-white shadow-md hover:bg-[#2C4A3E] transition-all">
            <i data-lucide="bell" class="w-5 h-5"></i>
            <span class="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white"></span>
        </button>
    </div>
</header>
`;
};
