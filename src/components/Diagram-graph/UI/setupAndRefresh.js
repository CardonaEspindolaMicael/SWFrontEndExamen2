export function setupPageManager(containerRef, editor) {
  const pagesList = containerRef.querySelector('#pages-list');
  const addPageBtn = containerRef.querySelector('.add-page-btn');
 // const htmlViewer = containerRef.querySelector('#html-viewer');

  function refreshPagesList() {
    const pages = editor.Pages.getAll();
    const currentPage = editor.Pages.getSelected();

    pagesList.innerHTML = '';

    pages.forEach((page, index) => {
      const pageEl = document.createElement('div');
      pageEl.className = `page-item ${page === currentPage ? 'selected' : ''}`;

      pageEl.innerHTML = `
        <div class="page-item-name">${page.get('name')}</div>
        <div class="page-item-actions">
          <span class="page-action-btn page-edit" title="Edit name">✏️</span>
          ${pages.length > 1 ? `<span class="page-action-btn page-delete" title="Delete page">🗑️</span>` : ''}
        </div>
      `;

      // Select page on click
      pageEl.querySelector('.page-item-name').addEventListener('click', () => {
        editor.Pages.select(page.get('id'));
        refreshPagesList();
      });

      // Edit page name
      pageEl.querySelector('.page-edit').addEventListener('click', () => {
        const newName = prompt('Enter new page name', page.get('name'));
        if (newName && newName.trim()) {
          page.set('name', newName.trim());
          refreshPagesList();
        }
      });

      // Delete page if there's more than one
      if (pages.length > 1) {
        pageEl.querySelector('.page-delete')?.addEventListener('click', () => {
          if (confirm(`Are you sure you want to delete "${page.get('name')}"?`)) {
            const currentIndex = index;
            editor.Pages.remove(page.get('id'));

            const remainingPages = editor.Pages.getAll();
            if (remainingPages.length) {
              const nextPage = remainingPages[currentIndex] || remainingPages[currentIndex - 1] || remainingPages[0];
              editor.Pages.select(nextPage.get('id'));
            }

            refreshPagesList();
          }
        });
      }

      pagesList.appendChild(pageEl);
    });
  }

  addPageBtn.addEventListener('click', () => {
    const pageName = prompt('Enter page name', `Page ${editor.Pages.getAll().length + 1}`);
    if (pageName && pageName.trim()) {
      const newPage = editor.Pages.add({
        name: pageName.trim(),
        component: `<div class="page-content">${pageName} Content</div>`
      });
      editor.Pages.select(newPage.get('id'));
      refreshPagesList();
    }
  });

/*  editor.on('component:add component:update:content component:remove', () => {
    htmlViewer.innerText = editor.getHtml();
  });

    editor.on('page:select', () => {
    refreshPagesList();
    htmlViewer.innerText = editor.getHtml();
  }); */

  // Inicializar
  refreshPagesList();
  //htmlViewer.innerText = editor.getHtml();
}
