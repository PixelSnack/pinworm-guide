// Mobile fix: Remove stray "html>" text on mobile devices
const cleanMobileHTML = () => {
    if (window.innerWidth <= 768) {
          setTimeout(() => {
                  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
                  let node;
                  while (node = walker.nextNode()) {
                            if (node.textContent.includes('html>')) {
                                        node.textContent = node.textContent.replace(/html>/g, '');
                            }
                  }
          }, 100);
    }
};
window.addEventListener('load', cleanMobileHTML);
