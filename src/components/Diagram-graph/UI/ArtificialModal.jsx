import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export const ArtificialModal = ({
  showIframe,
  setShowIframe,
  stackblitzContainerRef,
}) => {





  // Handle close button click
  const handleClose = () => {
    setShowIframe(false);
    
    // Clear the StackBlitz container to force a full reload on next open
    if (stackblitzContainerRef.current) {
      stackblitzContainerRef.current.innerHTML = '';
    }
  };



  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${showIframe ? 'visible' : 'invisible'}`}>
      <div className="fixed inset-0 bg-black opacity-50" onClick={handleClose}></div>
      <div className="bg-white rounded-lg shadow-xl z-10 w-11/12 h-5/6 max-w-6xl flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Asistente para desarrollo</h2>
          <div className="flex space-x-2">
            <button onClick={handleClose} className="p-1 hover:bg-gray-200 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row h-full overflow-hidden">
          {/* StackBlitz SDK container */}
          <div ref={stackblitzContainerRef} className="w-full h-full overflow-hidden"></div>
        </div>
      </div>
    </div>
  );
};