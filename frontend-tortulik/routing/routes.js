// Route table: route name -> page title/subtitle + page renderer
window.ROUTES = {
  dashboard: { title: 'Обзор хозяйства', subtitle: 'Воскресенье, 4 октября 2026', page: function () { return Pages.dashboard(); } },
  notifications: { title: 'Уведомления', subtitle: 'Список событий и оповещений', page: function () { return Pages.notifications(); } },
  animals: { title: 'Животные', subtitle: 'Учёт поголовья стада', page: function () { return Pages.animals(); } },
  scanner: { title: 'Штрихкод', subtitle: 'Идентификация бирок', page: function () { return Pages.scanner(); } },
  'ai-agent': { title: 'ИИ-агент', subtitle: 'Умный помощник фермера', page: function () { return Pages.aiAgent(); } },
  profile: { title: 'Профиль', subtitle: 'Данные пользователя', page: function () { return Pages.profile(); } },
};
