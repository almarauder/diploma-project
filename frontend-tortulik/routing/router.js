// Router: shows one page (view) at a time, updates titles + navigation highlight
// Called from the onclick="switchRoute(...)" attributes in the markup.
function switchRoute(routeName) {
    // Hide all views
    const views = Object.keys(ROUTES);
    views.forEach(v => {
        const el = document.getElementById(`view-${v}`);
        if (el) el.classList.add('hidden');
    });

    // Show target view
    const target = document.getElementById(`view-${routeName}`);
    if (target) target.classList.remove('hidden');

    // Update Page Titles
    const titles = ROUTES;

    if (titles[routeName]) {
        document.getElementById('page-title').innerText = titles[routeName].title;
        document.getElementById('page-subtitle').innerText = titles[routeName].subtitle;
    }

    // Update Desktop Nav styles
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('bg-emerald-950/60', 'text-white', 'shadow-inner');
        btn.classList.add('text-emerald-100/80', 'hover:bg-emerald-900/40', 'hover:text-white');
        if (btn.getAttribute('data-route') === routeName) {
            btn.classList.add('bg-emerald-950/60', 'text-white', 'shadow-inner');
            btn.classList.remove('text-emerald-100/80', 'hover:bg-emerald-900/40');
        }
    });

    // Update Mobile Nav styles
    document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
        btn.classList.remove('text-white');
        btn.classList.add('text-emerald-300/70');
        if (btn.getAttribute('data-mroute') === routeName) {
            btn.classList.add('text-white');
            btn.classList.remove('text-emerald-300/70');
        }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
    lucide.createIcons();
}

// App start: render the layout into #root, then draw the Lucide icons
document.addEventListener('DOMContentLoaded', () => {
    AppLayout.render(document.getElementById('root'));
    lucide.createIcons();
});
