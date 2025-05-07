import React, { useState, useEffect, useRef } from 'react';

const AnimatedBar = ({ fillAmount, duration, route, price }) => {
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
    <div>
      <p className='mb-2 text-xl'>{route} | {price}</p>
      <div ref={progressBarRef} className="w-full h-8 mb-4 bg-gray-200 overflow-hidden">
        <div
          className="h-full min-w-fit bg-teriary transition-all duration-1000 ease-in-out"
          style={{ width: isVisible ? `${fillAmount * 100}%` : '0%' }}
        >
          <div className='flex items-center h-full w-full px-4 text-gray-200'>{duration}</div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBar;