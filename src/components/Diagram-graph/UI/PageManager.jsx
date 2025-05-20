import React, { useEffect, useState, useRef } from 'react';

const PageItem = ({ page, isSelected, canDelete, onSelect, onEdit, onDelete }) => {
  return (
    <div className={`page-item ${isSelected ? 'selected' : ''}`}>
      <div className="page-item-name" onClick={onSelect}>
        {page.get('name')}
      </div>
      <div className="page-item-actions">
        <span className="page-action-btn page-edit" title="Edit name" onClick={onEdit}>✏️</span>
        {canDelete && (
          <span className="page-action-btn page-delete" title="Delete page" onClick={onDelete}>🗑️</span>
        )}
      </div>
    </div>
  );
};

const PageManager = ({ editor }) => {
  const [pages, setPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);
  const [html, setHtml] = useState('');
  const initialized = useRef(false);

  // Immediate update function - similar to refreshPagesList in your original code
  const updatePageData = () => {
    if (!editor) return;
    
    const allPages = editor.Pages.getAll();
    const current = editor.Pages.getSelected();
    setPages(allPages);
    setSelectedPage(current);
    setHtml(editor.getHtml());
  };

  useEffect(() => {
    if (!editor || initialized.current) return;
    initialized.current = true;

    // Initial update
    updatePageData();

    // Event listeners for real-time updates
    const handleComponentChange = () => {
      setHtml(editor.getHtml());
    };

    const handlePageSelect = () => {
      updatePageData();
    };

    // Add event listeners
    editor.on('component:add', handleComponentChange);
    editor.on('component:update:content', handleComponentChange);
    editor.on('component:remove', handleComponentChange);
    editor.on('page:select', handlePageSelect);

    // Clean up event listeners on unmount
    return () => {
      editor.off('component:add', handleComponentChange);
      editor.off('component:update:content', handleComponentChange);
      editor.off('component:remove', handleComponentChange);
      editor.off('page:select', handlePageSelect);
    };
  }, [editor]);

  const handleAddPage = () => {
    const name = prompt('Enter page name', `Page ${pages.length + 1}`);
    if (name?.trim()) {
      const newPage = editor.Pages.add({
        name: name.trim(),
        component: `<div class="page-content">${name} Content</div>`,
      });
      editor.Pages.select(newPage.get('id'));
      updatePageData(); // Force immediate update
    }
  };

  const handleEditPage = (page) => {
    const newName = prompt('Enter new name', page.get('name'));
    if (newName?.trim()) {
      page.set('name', newName.trim());
      updatePageData(); // Force immediate update
    }
  };

  const handleDeletePage = (page) => {
    if (confirm(`Delete "${page.get('name')}"?`)) {
      editor.Pages.remove(page.get('id'));
      updatePageData(); // Force immediate update
    }
  };

  const handleSelectPage = (pageId) => {
    editor.Pages.select(pageId);
    // updatePageData will be called by the page:select event listener
  };

  return (
    <div className="pages-panel">
      <h4>Pages</h4>
      <div id="pages-list">
        {pages.map((page) => (
          <PageItem
            key={page.get('id')}
            page={page}
            isSelected={page === selectedPage}
            canDelete={pages.length > 1}
            onSelect={() => handleSelectPage(page.get('id'))}
            onEdit={() => handleEditPage(page)}
            onDelete={() => handleDeletePage(page)}
          />
        ))}
      </div>
      <button className="add-page-btn" onClick={handleAddPage}>Add Page</button>
      
      <div id="html-panel">
        <h4>HTML Viewer</h4>
        <div id="html-viewer">
          <pre>{html}</pre>
        </div>
      </div>
    </div>
  );
};

export default PageManager;