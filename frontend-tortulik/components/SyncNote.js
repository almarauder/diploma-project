// Component: sync timestamp footer note
window.Components = window.Components || {};

Components.SyncNote = function () {
  return `
<!-- Sync timestamp footer note -->
<div class="text-center py-2 text-xs text-gray-400 flex items-center justify-center space-x-2">
    <i data-lucide="cloud-check" class="w-4 h-4 text-emerald-600"></i>
    <span>Данные синхронизированы · сегодня, 09:38</span>
</div>
`;
};
