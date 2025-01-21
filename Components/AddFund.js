import React from 'react';
import React, { useEffect, useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const DynamicPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const openPopup = () => setIsOpen(true);
    const closePopup = () => setIsOpen(false);
  
    return (
      <div>
        <button onClick={openPopup}>Open Popup</button>
        {isOpen && (
          <div className="dynamic-popup">
            <button onClick={closePopup}>Close</button>
            <p>Content of the dynamic popup goes here.</p>
          </div>
        )}
      </div>
    );
  };
  
  export default DynamicPopup;