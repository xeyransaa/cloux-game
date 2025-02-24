import { useEffect, useState } from 'react';

const useOverflow = (ref) => {
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (ref.current) {
        const hasOverflow =
          ref.current.scrollWidth > ref.current.clientWidth;
          setIsOverflowing(hasOverflow);
      }
    };

    window.addEventListener('resize', checkOverflow);
    checkOverflow();

    return () => window.removeEventListener('resize', checkOverflow);
  }, [ref]);

  return isOverflowing;
};

export default useOverflow;
