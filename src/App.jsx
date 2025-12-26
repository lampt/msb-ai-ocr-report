import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SlideRenderer from './components/SlideRenderer';
import ProgressBar from './components/ProgressBar';
import { SLIDES_DATA } from './constants/slidesContent';
import './index.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [direction, setDirection] = useState(0);
  const totalSlides = SLIDES_DATA.length;
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const BASE_WIDTH = 1600;
      const BASE_HEIGHT = 900;
      const PADDING = 20;
      const scaleX = (window.innerWidth - PADDING) / BASE_WIDTH;
      const scaleY = (window.innerHeight - PADDING) / BASE_HEIGHT;
      setScale(Math.min(scaleX, scaleY));
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const changeSlide = (direction) => {
    const newIndex = currentSlide + direction;
    if (newIndex >= 1 && newIndex <= totalSlides) {
      setDirection(direction);
      setCurrentSlide(newIndex);
    }
  };

  const jumpToSlide = (index) => {
    if (index >= 1 && index <= totalSlides && index !== currentSlide) {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') changeSlide(1);
      if (e.key === 'ArrowLeft') changeSlide(-1);
      if (e.key === 'f' || e.key === 'F') toggleFullScreen();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 1200 : -1200, opacity: 0, zIndex: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 1200 : -1200, opacity: 0 })
  };

  return (
    <div id="slide-container" style={{ transform: `scale(${scale})` }}>
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
          className="slide active"
          style={{ padding: currentSlide === 1 || currentSlide === totalSlides ? 0 : undefined }}
        >
          <SlideRenderer slide={SLIDES_DATA[currentSlide - 1]} />
        </motion.div>
      </AnimatePresence>
      <div className="controls">
        <button className="btn-nav" id="prevBtn" onClick={() => changeSlide(-1)} disabled={currentSlide === 1}>
          <i className="fas fa-chevron-left"></i> Trước
        </button>
        <ProgressBar totalSlides={totalSlides} currentSlide={currentSlide} slidesData={SLIDES_DATA} onSlideClick={jumpToSlide} />
        <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginRight: '15px'}}>
          <div className="slide-counter">
            <span id="currentSlide" style={{ color: 'var(--msb-red)', fontSize: '24px' }}>{currentSlide}</span> / <span id="totalSlides">{totalSlides}</span>
          </div>
          <button className="btn-nav" onClick={toggleFullScreen} style={{padding: '10px', borderRadius: '50%', width: '40px', height: '40px', justifyContent: 'center', minWidth: 'unset'}} title="Toàn màn hình (F)">
            <i className="fas fa-expand"></i>
          </button>
        </div>
        <button className="btn-nav" id="nextBtn" onClick={() => changeSlide(1)} disabled={currentSlide === totalSlides}>
          Tiếp theo <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
export default App;
