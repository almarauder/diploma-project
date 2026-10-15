window.Pages = window.Pages || {};

Pages.dashboard = function () {
  return `
<!-- VIEW 1: MAIN DASHBOARD (Главная — обзор хозяйства) -->
<div id="view-dashboard" class="space-y-6 animate-fadeIn">
    ${Components.GreetingBanner()}
    ${Components.FarmSummaryCard()}
    ${Components.StatusCards()}
    ${Components.ScheduleTasks()}
    ${Components.HerdInspectionBanner()}
    ${Components.SyncNote()}
</div>
`;
};
