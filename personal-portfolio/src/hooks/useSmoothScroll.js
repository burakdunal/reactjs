import { scroller } from 'react-scroll';

const handleHashScroll = () => {
  const { hash } = window.location;
  if (hash) {
    const cleanHash = hash.substring(1); // Remove the '#'

    // Wait for DOM to settle before scrolling
    setTimeout(() => {
      scroller.scrollTo(cleanHash, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }, 100); // Adjust delay as needed
  }
};

export default handleHashScroll;