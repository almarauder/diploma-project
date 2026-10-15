// Component: mobile bottom navigation bar
window.Components = window.Components || {};

Components.MobileNav = function () {
  return `
<!-- ARCHITECTURE LAYER: Mobile Bottom Navigation Bar (Mirroring App Design Tab Bar) -->
<nav class="md:hidden fixed bottom-0 left-0 right-0 bg-[#1B362D] border-t border-emerald-900/80 px-4 py-2.5 flex items-center justify-around z-40 shadow-2xl">
    <button onclick="switchRoute('dashboard')" data-mroute="dashboard" class="mobile-nav-btn flex flex-col items-center space-y-1 text-white">
        <i data-lucide="layout-grid" class="w-5 h-5"></i>
        <span class="text-[10px] font-medium">Главная</span>
    </button>
    <button onclick="switchRoute('animals')" data-mroute="animals" class="mobile-nav-btn flex flex-col items-center space-y-1 text-emerald-300/70 hover:text-white">
        <i data-lucide="paw-print" class="w-5 h-5"></i>
        <span class="text-[10px] font-medium">Животные</span>
    </button>
    <button onclick="switchRoute('scanner')" data-mroute="scanner" class="mobile-nav-btn flex flex-col items-center space-y-1 text-emerald-300/70 hover:text-white">
        <i data-lucide="scan" class="w-5 h-5"></i>
        <span class="text-[10px] font-medium">Штрихкод</span>
    </button>
    <button onclick="switchRoute('ai-agent')" data-mroute="ai-agent" class="mobile-nav-btn flex flex-col items-center space-y-1 text-emerald-300/70 hover:text-white">
        <i data-lucide="bot" class="w-5 h-5"></i>
        <span class="text-[10px] font-medium">ИИ-агент</span>
    </button>
    <button onclick="switchRoute('profile')" data-mroute="profile" class="mobile-nav-btn flex flex-col items-center space-y-1 text-emerald-300/70 hover:text-white">
        <i data-lucide="user" class="w-5 h-5"></i>
        <span class="text-[10px] font-medium">Профиль</span>
    </button>
</nav>
`;
};
