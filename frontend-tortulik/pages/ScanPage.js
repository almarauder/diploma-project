window.Pages = window.Pages || {};

Pages.scanner = function () {
  return `
<!-- VIEW 4: BARCODE SCANNER (Штрихкод) -->
<div id="view-scanner" class="space-y-6 hidden animate-fadeIn">
    <div class="max-w-xl mx-auto text-center space-y-4 bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
        <div class="w-20 h-20 rounded-3xl bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto">
            <i data-lucide="scan" class="w-10 h-10"></i>
        </div>
        <div>
            <h2 class="text-2xl font-bold text-gray-900">Сканирование бирок</h2>
            <p class="text-sm text-gray-500 mt-1">Используйте камеру устройства или поднесите RFID-метку животного.</p>
        </div>
        <div class="pt-4">
            <button onclick="showNotificationModal('Сканер', 'Имитация сканирования успешна: Бирка №0512 (КРС).')" class="w-full bg-[#1B362D] text-white py-3.5 rounded-xl font-semibold hover:bg-[#2C4A3E] transition-all shadow-md">
                Сэмулировать скан бирки
            </button>
        </div>
    </div>
</div>
`;
};
