window.Pages = window.Pages || {};

Pages.animals = function () {
  return `
<!-- VIEW 3: ANIMALS DIRECTORY (Животные) -->
<div id="view-animals" class="space-y-6 hidden animate-fadeIn">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Поголовье животных</h2>
            <p class="text-sm text-gray-500 mt-0.5">Tort Tulik</p>
        </div>
        <button onclick="showNotificationModal('Новое животное', 'Откройте мобильный сканер штрихкода для добавления.')" class="bg-[#1B362D] text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-[#2C4A3E] transition-all flex items-center space-x-2">
            <i data-lucide="plus" class="w-4 h-4"></i>
            <span>Добавить голову</span>
        </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <span class="text-xs font-semibold text-emerald-700 uppercase">КРС</span>
            <div class="text-3xl font-bold text-gray-900 mt-2">64 головы</div>
            <p class="text-xs text-gray-500 mt-1">Здоровых: 63 · Осмотр: 1</p>
        </div>
        <div class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <span class="text-xs font-semibold text-emerald-700 uppercase">Овцы</span>
            <div class="text-3xl font-bold text-gray-900 mt-2">42 головы</div>
            <p class="text-xs text-gray-500 mt-1">Здоровых: 41 · Осмотр: 1</p>
        </div>
        <div class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <span class="text-xs font-semibold text-emerald-700 uppercase">Лошади & Верблюды</span>
            <div class="text-3xl font-bold text-gray-900 mt-2">22 головы</div>
            <p class="text-xs text-gray-500 mt-1">Все показатели в норме</p>
        </div>
    </div>

    <div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-4">
        <h3 class="font-bold text-gray-900">Последние зарегистрированные особи</h3>
        <div class="divide-y divide-gray-100">
            <div class="py-3 flex items-center justify-between">
                <div class="flex items-center space-x-3">
                    <div class="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-xs">КРС</div>
                    <div>
                        <p class="text-sm font-bold text-gray-900">Бирка №0458</p>
                        <p class="text-xs text-gray-500">Загон №3 · Добавлено 1 ч назад</p>
                    </div>
                </div>
                <span class="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-semibold">В порядке</span>
            </div>
            <div class="py-3 flex items-center justify-between">
                <div class="flex items-center space-x-3">
                    <div class="w-9 h-9 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold text-xs">КРС</div>
                    <div>
                        <p class="text-sm font-bold text-gray-900">Бирка №0231</p>
                        <p class="text-xs text-gray-500">Основной загон · Требует осмотра</p>
                    </div>
                </div>
                <span class="bg-amber-100 text-amber-800 text-xs px-2.5 py-1 rounded-full font-semibold">Нужен осмотр</span>
            </div>
            <div class="py-3 flex items-center justify-between">
                <div class="flex items-center space-x-3">
                    <div class="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-xs">ОВЦЫ</div>
                    <div>
                        <p class="text-sm font-bold text-gray-900">Бирка №0117</p>
                        <p class="text-xs text-gray-500">Маточный стан · Отёл зарегистрирован</p>
                    </div>
                </div>
                <span class="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-semibold">В порядке</span>
            </div>
        </div>
    </div>
</div>
`;
};
