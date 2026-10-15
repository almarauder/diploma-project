// Component: quick herd inspection banner
window.Components = window.Components || {};

Components.HerdInspectionBanner = function () {
  return `
<!-- Quick Herd Inspection Banner -->
<div class="bg-[#1B362D] text-white rounded-3xl p-6 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
    <div class="flex items-center space-x-4">
        <div class="w-14 h-14 rounded-2xl bg-emerald-800 border border-emerald-700/50 flex items-center justify-center text-emerald-300">
            <i data-lucide="scan" class="w-7 h-7"></i>
        </div>
        <div>
            <h4 class="font-bold text-lg">Начать обход стада</h4>
            <p class="text-xs text-emerald-200/80 mt-0.5">Сверьте бирки и отметьте состояние животных в реальном времени.</p>
        </div>
    </div>
    <button onclick="switchRoute('scanner')" class="w-full sm:w-auto bg-emerald-800 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all border border-emerald-700 flex items-center justify-center space-x-2">
        <span>Открыть сканер</span>
        <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
    </button>
</div>
`;
};
