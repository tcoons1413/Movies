import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const FadeInSection = (props) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const currentRef = domRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true); // Set visible when the element is in view
          }
        });
      },
      { rootMargin: "-20px" } // Optional: Adjust the root margin to trigger before the element is fully in view
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Clean up observer on component unmount
      }
    };
  }, []);

  return (
    <motion.div
      ref={domRef}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }} // Optional: Add transition timing
    >
      {props.children}
    </motion.div>
  );
};

export default FadeInSection;
