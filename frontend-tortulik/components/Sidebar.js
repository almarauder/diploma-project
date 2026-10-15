// Component: desktop sidebar (brand, navigation, user widget)
window.Components = window.Components || {};

Components.Sidebar = function () {
  return `
<!-- Sidebar Navigation (Desktop) / Bottom Nav (Mobile) -->
<aside class="hidden md:flex flex-col w-72 bg-[#1B362D] text-white border-r border-[#2C4A3E] p-6 justify-between sticky top-0 h-screen shadow-lg">
    <div class="space-y-8">
        <!-- Brand / Logo -->
        <div class="flex items-center space-x-3 px-2">
            <div class="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center text-white shadow-md">
                <i data-lucide="shield-check" class="w-6 h-6"></i>
            </div>
            <div>
                <h1 class="font-bold text-lg leading-tight">Tort Tulik</h1>
            </div>
        </div>

        <!-- Navigation Links (Routing & Views) -->
        <nav class="space-y-1.5" id="desktop-nav">
            <button onclick="switchRoute('dashboard')" data-route="dashboard" class="nav-btn w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all bg-emerald-950/60 text-white shadow-inner">
                <div class="flex items-center space-x-3">
                    <i data-lucide="layout-grid" class="w-5 h-5 text-emerald-400"></i>
                    <span>Главная</span>
                </div>
                <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
            </button>

            <button onclick="switchRoute('animals')" data-route="animals" class="nav-btn w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all text-emerald-100/80 hover:bg-emerald-900/40 hover:text-white">
                <div class="flex items-center space-x-3">
                    <i data-lucide="paw-print" class="w-5 h-5 text-emerald-400"></i>
                    <span>Животные</span>
                </div>
                <span class="bg-emerald-800 text-emerald-200 text-xs px-2 py-0.5 rounded-full font-semibold">128</span>
            </button>

            <button onclick="switchRoute('scanner')" data-route="scanner" class="nav-btn w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all text-emerald-100/80 hover:bg-emerald-900/40 hover:text-white">
                <i data-lucide="scan" class="w-5 h-5 text-emerald-400"></i>
                <span>Штрихкод</span>
            </button>

            <button onclick="switchRoute('ai-agent')" data-route="ai-agent" class="nav-btn w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all text-emerald-100/80 hover:bg-emerald-900/40 hover:text-white">
                <i data-lucide="bot" class="w-5 h-5 text-emerald-400"></i>
                <span>ИИ-агент</span>
            </button>

            <button onclick="switchRoute('notifications')" data-route="notifications" class="nav-btn w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all text-emerald-100/80 hover:bg-emerald-900/40 hover:text-white">
                <div class="flex items-center space-x-3">
                    <i data-lucide="bell" class="w-5 h-5 text-emerald-400"></i>
                    <span>Уведомления</span>
                </div>
                <span class="bg-rose-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">2</span>
            </button>

            <button onclick="switchRoute('profile')" data-route="profile" class="nav-btn w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all text-emerald-100/80 hover:bg-emerald-900/40 hover:text-white">
                <i data-lucide="user" class="w-5 h-5 text-emerald-400"></i>
                <span>Профиль</span>
            </button>
        </nav>
    </div>

    <!-- Sidebar Footer User Profile Widget -->
    <div class="pt-6 border-t border-emerald-900/60 flex items-center justify-between">
        <div class="flex items-center space-x-3">
            <div class="w-9 h-9 rounded-full bg-emerald-800 flex items-center justify-center font-bold text-emerald-200">
                А
            </div>
            <div>
                <p class="text-sm font-medium text-white">Алмас К.</p>
                <p class="text-xs text-emerald-300/70">Фермер / Владелец</p>
            </div>
        </div>
        <button onclick="showNotificationModal('Системное сообщение', 'Вы авторизованы как Алмас (Акмолинская область).')" class="text-emerald-300 hover:text-white transition-colors">
            <i data-lucide="settings" class="w-5 h-5"></i>
        </button>
    </div>
</aside>
`;
};
