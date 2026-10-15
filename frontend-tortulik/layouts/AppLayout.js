// Layout: sidebar + header + page container + mobile nav + modal
window.AppLayout = {
  render: function (root) {
    root.innerHTML = `
<div id="app-layout" class="flex-1 flex flex-col md:flex-row min-h-screen">
    ${Components.Sidebar()}

    <div class="flex-1 flex flex-col min-w-0">
        ${Components.Header()}

        <main class="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto pb-24 md:pb-10">
            ${Object.keys(ROUTES).map(function (key) { return ROUTES[key].page(); }).join("")}
        </main>

        ${Components.MobileNav()}
    </div>
</div>

${Components.Modal()}
`;
  },
};
