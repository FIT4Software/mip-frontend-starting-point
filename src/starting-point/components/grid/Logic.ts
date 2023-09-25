import { useState, useEffect, useRef } from 'react';

const Logic = () => {
  const refContainer = useRef<HTMLDivElement>();
  const [scroll, setScroll] = useState(1);
  useEffect(() => {
    const currentHeight = refContainer.current?.clientHeight ?? 1;

    if (currentHeight < 250) {
      setScroll((currentHeight * 50) / 100);
      return;
    }
    if (currentHeight < 300) {
      setScroll((currentHeight * 70) / 100);
      return;
    }
    if (currentHeight < 500) {
      setScroll((currentHeight * 78) / 100);
      return;
    }
    if (currentHeight < 800) {
      setScroll((currentHeight * 86) / 100);
      return;
    }
    setScroll((currentHeight * 90) / 100);
  }, [refContainer.current?.clientHeight]);
  return { scroll, refContainer };
};

export default Logic;
