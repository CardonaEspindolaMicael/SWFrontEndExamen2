export function setupLockingSystem(editor,contextSocket,currentUser,room) {
    // Lock during drag operations
    editor.on('component:dragstart', (component) => {
      const componentId = component.getId();
      contextSocket.requestLock({
        componentId,
        userId: currentUser.ci,
        username: currentUser.nombre
      }, room);
    });
    
    editor.on('component:dragend', (component) => {
      const componentId = component.getId();
      contextSocket.releaseLock({
        componentId,
        userId: currentUser.ci
      }, room);
    });
    
    // Lock during content editing
    editor.on('component:update:content', (component) => {
      const componentId = component.getId();
      contextSocket.requestLock({
        componentId,
        userId: currentUser.ci,
        username: currentUser.nombre
      }, room);
      
      // Release lock after editing finishes
      setTimeout(() => {
        contextSocket.releaseLock({
          componentId,
          userId: currentUser.ci
        }, room);
      }, 500);
    });
    
    // Handle lock notifications
    const handleLockUpdate = (data) => {
      const component = editor.Components.getById(data.componentId);
      if (!component) return;
      
      if (data.action === 'lock') {
        // Only apply lock if it's not from current user
        if (data.userId !== currentUser.ci) {
          component.set('selectable', false);
          component.set('hoverable', false);
          component.set('draggable', false);
          
          const el = component.getEl();
          if (el) {
            el.classList.add('gjs-locked-component');
            el.setAttribute('data-locked-by', `Editing: ${data.username}`);
          }
        }
      } else if (data.action === 'unlock') {
        component.set('selectable', true);
        component.set('hoverable', true);
        component.set('draggable', true);
        
        const el = component.getEl();
        if (el) {
          el.classList.remove('gjs-locked-component');
          el.removeAttribute('data-locked-by');
        }
      }
    };
    
    contextSocket.onLockUpdate(handleLockUpdate);
    
    return () => {
      contextSocket.offLockUpdate(handleLockUpdate);
    };
  }

      // Set up locking system
 function setupLockingSystemStyle() {
        // Add styles for locked components
        const lockStyles = document.createElement('style');
        lockStyles.innerHTML = `
          .gjs-locked-component {
            position: relative !important;
            outline: 2px solid #ff4d4f !important;
            background-color: rgba(255, 77, 79, 0.1) !important;
          }
          .gjs-locked-component::before {
            content: attr(data-locked-by);
            position: absolute !important;
            top: -20px !important;
            left: 0 !important;
            background-color: #ff4d4f !important;
            color: white !important;
            padding: 2px 6px !important;
            font-size: 11px !important;
            border-radius: 3px !important;
            z-index: 999 !important;
            white-space: nowrap !important;
            pointer-events: none !important;
          }
        `;
        document.head.appendChild(lockStyles);
        
        // Lock during drag operations
        editor.on('component:dragstart', (component) => {
          const componentId = component.getId();
          contextSocket.requestLock({
            componentId,
            userId: currentUser.ci,
            username: currentUser.nombre
          }, room);
        });
        
        editor.on('component:dragend', (component) => {
          const componentId = component.getId();
          contextSocket.releaseLock({
            componentId,
            userId: currentUser.ci
          }, room);
        });
        
        // Lock during content editing
        editor.on('component:update:content', (component) => {
          const componentId = component.getId();
          contextSocket.requestLock({
            componentId,
            userId: currentUser.ci,
            username: currentUser.nombre
          }, room);
          
          // Release lock after editing finishes
          setTimeout(() => {
            contextSocket.releaseLock({
              componentId,
              userId: currentUser.ci
            }, room);
          }, 500);
        });
        
        // Handle lock notifications
        const handleLockUpdate = (data) => {
          const component = editor.Components.getById(data.componentId);
          if (!component) return;
          
          if (data.action === 'lock') {
            // Only apply lock if it's not from current user
            if (data.userId !== currentUser.ci) {
              component.set('selectable', false);
              component.set('hoverable', false);
              component.set('draggable', false);
              
              const el = component.getEl();
              if (el) {
                el.classList.add('gjs-locked-component');
                el.setAttribute('data-locked-by', `Editing: ${data.username}`);
              }
            }
          } else if (data.action === 'unlock') {
            component.set('selectable', true);
            component.set('hoverable', true);
            component.set('draggable', true);
            
            const el = component.getEl();
            if (el) {
              el.classList.remove('gjs-locked-component');
              el.removeAttribute('data-locked-by');
            }
          }
        };
        
        contextSocket.onLockUpdate(handleLockUpdate);
        
        return () => {
          contextSocket.offLockUpdate(handleLockUpdate);
          lockStyles.remove();
        };
      }
  