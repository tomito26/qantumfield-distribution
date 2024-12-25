import { useState, useEffect, useRef, useCallback } from "react";

const AnimatedCounter = ({ target, duration }:{target: number,  duration: number}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  const animateCounter = useCallback(() => {
    let start = 0;
    const increment = target / (duration / 16); // Assuming 60fps
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
  }, [target, duration]);

  useEffect(() => {
    const element = ref.current; // Capture ref in a variable
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounter();
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [hasAnimated, animateCounter]);

  return (
    <div className="text-6xl font-bold text-white" ref={ref}>
      {count.toLocaleString()}+
    </div>
  );
};

export default AnimatedCounter;
