import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MovieLogo from "./MovieLogo";

const LoadingOverlay = ({ isVisible, onAnimationComplete }) => {
  const [isLoading, setLoading] = useState(isVisible);

  useEffect(() => {
    if (isLoading && !isVisible) {
      setLoading(false);
    }
  }, [isLoading, isVisible]);

  const handleAnimationComplete = () => {
    setLoading(false);
    onAnimationComplete(false);
  };

  return (
    <AnimatePresence onExitComplete={handleAnimationComplete}>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 2 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "hsl(210, 50%, 10%)",
            zIndex: 1000,
          }}
        >
          <MovieLogo />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingOverlay;
