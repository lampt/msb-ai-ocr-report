import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProgressBar = ({ totalSlides, currentSlide, slidesData, onSlideClick }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="progress-container" style={{ display: 'flex', gap: '6px', background: 'transparent', height: '40px', alignItems: 'center', overflow: 'visible' }}>
      {Array.from({ length: totalSlides }).map((_, index) => {
        const slideIndex = index + 1;
        const isActive = slideIndex === currentSlide;
        const isPast = slideIndex < currentSlide;
        const slideItem = slidesData[index];
        const tooltipText = slideItem ? (slideItem.subTitle || slideItem.title) : `Slide ${slideIndex}`;
        return (
          <div key={index} style={{ flex: 1, height: '6px', background: isActive ? 'var(--msb-orange)' : (isPast ? '#cbd5e0' : '#e9ecef'), borderRadius: '4px', cursor: 'pointer', position: 'relative', transition: 'background 0.3s ease' }} onClick={() => onSlideClick(slideIndex)} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
            {hoveredIndex === index && !isActive && ( <div style={{position: 'absolute', inset: 0, background: 'rgba(240, 110, 29, 0.3)', borderRadius: '4px'}}></div> )}
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div initial={{ opacity: 0, y: 10, x: "-50%", scale: 0.9 }} animate={{ opacity: 1, y: -15, x: "-50%", scale: 1 }} exit={{ opacity: 0, y: 10, x: "-50%", scale: 0.9 }} transition={{ duration: 0.2 }} style={{ position: 'absolute', bottom: '100%', left: '50%', background: '#2c3e50', color: 'white', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', whiteSpace: 'nowrap', zIndex: 1000, pointerEvents: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.15)', fontWeight: 500, marginBottom: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  {tooltipText}
                  <div style={{ position: 'absolute', bottom: '-5px', left: '50%', marginLeft: '-5px', width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '5px solid #2c3e50' }}></div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
export default ProgressBar;
