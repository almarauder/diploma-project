// Component: custom message modal (replaces alert())
window.Components = window.Components || {};

Components.Modal = function () {
  return `
<div id="app-modal" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl space-y-4 animate-scaleUp">
        <div class="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <i data-lucide="info" class="w-6 h-6"></i>
        </div>
        <div>
            <h3 id="modal-title" class="font-bold text-gray-900 text-lg">Заголовок</h3>
            <p id="modal-desc" class="text-xs text-gray-500 mt-1">Описание сообщения...</p>
        </div>
        <button onclick="closeNotificationModal()" class="w-full bg-[#1B362D] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#2C4A3E] transition-all">
            Понятно
        </button>
    </div>
</div>
`;
};

// Custom Modal Functions (No alert)
function showNotificationModal(title, desc) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-desc').innerText = desc;
    document.getElementById('app-modal').classList.remove('hidden');
}

function closeNotificationModal() {
    document.getElementById('app-modal').classList.add('hidden');
}
