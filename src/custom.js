export function addClassOnScroll(elementId, className) {
    const element = document.getElementById(elementId);
    
    const handleScroll = () => {
      if (!element) return;
      if (window.scrollY > 20) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    // Return the function so it can be removed on cleanup
    return handleScroll;
  }
  