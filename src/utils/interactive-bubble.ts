// Script ultra-ligero para interactividad
export function initInteractiveBubble(container) {
  if (!container || !container.dataset.interactive) return;
  
  const interactiveBubble = container.querySelector('.bubble-interactive');
  if (!interactiveBubble) return;
  
  let rafId = null;
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  
  // Configuración de suavizado (similar a spring)
  const smoothFactor = 0.1;
  
  const handleMouseMove = (e) => {
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    targetX = e.clientX - centerX;
    targetY = e.clientY - centerY;
    
    if (!rafId) {
      rafId = requestAnimationFrame(updatePosition);
    }
  };
  
  const updatePosition = () => {
    currentX += (targetX - currentX) * smoothFactor;
    currentY += (targetY - currentY) * smoothFactor;
    
    interactiveBubble.style.transform = `translate(${currentX}px, ${currentY}px)`;
    
    if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
      rafId = requestAnimationFrame(updatePosition);
    } else {
      rafId = null;
    }
  };
  
  container.addEventListener('mousemove', handleMouseMove);
  
  // Cleanup
  return () => {
    container.removeEventListener('mousemove', handleMouseMove);
    if (rafId) cancelAnimationFrame(rafId);
  };
}