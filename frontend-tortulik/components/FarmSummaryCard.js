// Component: green farm summary card (128 animals + breakdown)
window.Components = window.Components || {};

Components.FarmSummaryCard = function () {
  return `
<!-- ARCHITECTURE LAYER: Components - Farm Summary Card (Green Card matching design) -->
<div class="bg-[#1B362D] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
    <!-- Decorative background element -->
    <div class="absolute -right-12 -bottom-12 w-64 h-64 bg-emerald-800/30 rounded-full blur-2xl pointer-events-none"></div>

    <div class="flex flex-col sm:flex-row sm:items-center justify-between border-b border-emerald-800/80 pb-6 gap-4">
        <div>
            <span class="text-xs uppercase tracking-wider text-emerald-300 font-semibold bg-emerald-900/60 px-3 py-1 rounded-full border border-emerald-700/50">Хозяйство</span>
            <h3 class="text-2xl font-bold mt-2">Tort Tulik</h3>
            <p class="text-sm text-emerald-200/80 flex items-center space-x-1 mt-1">
                <i data-lucide="map-pin" class="w-4 h-4 text-emerald-400"></i>
                <span>Акмолинская область</span>
            </p>
        </div>
        <div class="w-12 h-12 rounded-2xl bg-emerald-900/80 border border-emerald-700/50 flex items-center justify-center text-emerald-300 shadow-inner">
            <i data-lucide="layers" class="w-6 h-6"></i>
        </div>
    </div>

    <!-- Main Total Counter -->
    <div class="py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <div>
            <div class="text-5xl sm:text-6xl font-extrabold tracking-tight text-white">128</div>
            <p class="text-emerald-200 text-sm font-medium mt-1">животных в хозяйстве</p>
        </div>
        <div class="text-xs text-emerald-300 bg-emerald-900/50 px-3 py-1.5 rounded-xl border border-emerald-700/30">
            Последнее обновление: сегодня, 09:38
        </div>
    </div>

    <!-- Animal Breakdown Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-emerald-800/80">
        <div class="bg-emerald-900/40 rounded-2xl p-4 border border-emerald-700/30">
            <span class="text-xs text-emerald-300 font-medium">КРС</span>
            <div class="text-2xl font-bold text-white mt-1">64</div>
        </div>
        <div class="bg-emerald-900/40 rounded-2xl p-4 border border-emerald-700/30">
            <span class="text-xs text-emerald-300 font-medium">Овцы</span>
            <div class="text-2xl font-bold text-white mt-1">42</div>
        </div>
        <div class="bg-emerald-900/40 rounded-2xl p-4 border border-emerald-700/30">
            <span class="text-xs text-emerald-300 font-medium">Лошади</span>
            <div class="text-2xl font-bold text-white mt-1">14</div>
        </div>
        <div class="bg-emerald-900/40 rounded-2xl p-4 border border-emerald-700/30">
            <span class="text-xs text-emerald-300 font-medium">Верблюды</span>
            <div class="text-2xl font-bold text-white mt-1">8</div>
        </div>
    </div>
</div>
`;
};
