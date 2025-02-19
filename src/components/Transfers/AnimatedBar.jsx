import React, { useState, useEffect, useRef } from 'react';

const AnimatedBar = ({ fillAmount }) => {
  const [isVisible, setIsVisible] = useState(false);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the component is visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
    };
  }, []);

  return (
    <div ref={progressBarRef} className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-in-out"
        style={{ width: isVisible ? `${fillAmount * 100}%` : '0%' }}
      ></div>
    </div>
  );
};

export default AnimatedBar;