// Components/panels.js - Updated version

import { figuresGrape } from "./blocks/figures";
import { figuresFlutter } from "./blocks/figuresFlutter";

// State to track which figure set to use - we'll modify this via commands
let useFlutterFigures = false;

// Function to update the blocks in the editor
export function updateFigures(editor) {
  const figures = useFlutterFigures ? figuresFlutter : figuresGrape;
  
  // If editor is provided, update blocks dynamically
  if (editor) {
    // Clear existing blocks
    const blockManager = editor.BlockManager;
    blockManager.getAll().reset();
    
    // Add new blocks
    figures.forEach(block => {
      blockManager.add(block.id, {
        label: block.label,
        category: block.category,
        content: block.content,
        ...block
      });
    });
  }
  
  return figures;
}

export const panels = [
  {
    id: 'panel-switcher',
    el: '.panel__switcher',
    buttons: [
      {
        id: 'show-layers',
        active: true,
        label: 'Layers',
        command: 'show-layers',
        togglable: false,
      },
      {
        id: 'show-style',
        active: true,
        label: 'Styles',
        command: 'show-styles',
        togglable: false,
      },
      {
        id: 'show-traits',
        active: true,
        label: 'Traits',
        command: 'show-traits',
        togglable: false,
      },
      {
        id: 'show-blocks',
        active: true,
        label: 'Blocks',
        command: 'show-blocks',
        togglable: false,
      }
    ],
  },
  {
    id: 'devices',
    buttons: [
      {
        id: 'device-desktop',
        label: 'Escritorio',
        command: e => {
          e.setDevice('Escritorio');
          useFlutterFigures = false; // Use figuresGrape for desktop
          updateFigures(e); // Pass editor instance for real-time update
        },
        active: true
      },
      {
        id: 'device-tablet',
        label: 'Tableta',
        command: e => {
          e.setDevice('Tablet');
          useFlutterFigures = false; // Use figuresGrape for tablet
          updateFigures(e); // Pass editor instance for real-time update
        }
      },
      {
        id: 'device-mobile',
        label: 'Movil',
        command: e => {
          e.setDevice('Movil');
          useFlutterFigures = true; // Use figuresFlutter for mobile
          updateFigures(e); // Pass editor instance for real-time update
        }
      }
    ]
  }
];