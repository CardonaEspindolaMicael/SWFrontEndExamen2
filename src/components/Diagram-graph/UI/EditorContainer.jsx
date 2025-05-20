import React, { useState } from 'react';
import '../AppGraph.css';

export const EditorContainer = () => {
  const [isPanelVisible, setIsPanelVisible] = useState(false);

  const togglePanel = () => {
    setIsPanelVisible(!isPanelVisible);
  };

  return (
    <div className="editor-row">
      {/* Botón Hamburguesa */}
      <button
        className="hamburger-btn"
        onClick={togglePanel}
        aria-label="Toggle Panel"
      >
        ☰
      </button>

      <div className="editor-canvas" />

      <div className={`panel__right ${isPanelVisible ? 'visible' : ''}`}>
        <div className="pages-panel" id="pages-container">
          <h4>Pages</h4>
          <div id="pages-list"></div>
          <button className="add-page-btn">Add Page</button>
        </div>
        <div className="layers-panel"><h4>Layers</h4></div>
        <div className="styles-panel"><h4>Styles</h4></div>
        <div className="traits-panel"><h4>Properties</h4></div>
        <div className="blocks-panel"><h4>Components</h4></div>
      </div>
    </div>
  );
};
