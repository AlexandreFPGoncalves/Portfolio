import { useEffect, useState } from 'react';

export default function useScroll(threshold = 0) {
  const [isScrolled, setScrolled] = useState<boolean>();

  useEffect(() => {
    const onScroll = () => {
      console.log('Scroll event fired');
      setScrolled(window.scrollY > threshold);
    };
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [threshold]);

  return isScrolled;
}
