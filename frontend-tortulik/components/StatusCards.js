// Component: "В порядке" / "Нужен осмотр" status cards
window.Components = window.Components || {};

Components.StatusCards = function () {
  return `
<!-- Status Indicator Cards Row -->
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-200/80 flex items-center justify-between">
        <div class="flex items-center space-x-4">
            <div class="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <i data-lucide="check-circle-2" class="w-6 h-6"></i>
            </div>
            <div>
                <div class="text-2xl font-bold text-gray-900">126</div>
                <p class="text-xs text-gray-500 font-medium">В порядке</p>
            </div>
        </div>
        <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
    </div>

    <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-200/80 flex items-center justify-between cursor-pointer hover:border-amber-300 transition-all" onclick="switchRoute('notifications')">
        <div class="flex items-center space-x-4">
            <div class="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                <i data-lucide="stethoscope" class="w-6 h-6"></i>
            </div>
            <div>
                <div class="text-2xl font-bold text-gray-900">2</div>
                <p class="text-xs text-amber-700 font-medium">Нужен осмотр</p>
            </div>
        </div>
        <span class="w-3 h-3 rounded-full bg-amber-500 animate-pulse"></span>
    </div>
</div>
`;
};
