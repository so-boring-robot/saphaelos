import React, { createContext, useState, useEffect } from 'react';

export const FontContext = createContext();

export const FontProvider = ({ children }) => {
  const [font, setFont] = useState('sans-serif');
  const [fontSize, setFontSize] = useState(14);
  const [bgColor, setBgColor] = useState("#008080");
  useEffect(() => {
  const styleTagId = 'global-font-style';
  let styleTag = document.getElementById(styleTagId);

  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.id = styleTagId;
    document.head.appendChild(styleTag);
  }

  styleTag.innerHTML = `
    * {
      font-family: ${font} !important;
      font-size: ${fontSize} !important;
    }
  `;
}, [font, fontSize]);

  return (
    <FontContext.Provider value={{ font, setFont, fontSize, setFontSize, bgColor, setBgColor }}>
      {children}
    </FontContext.Provider>
  );
};
