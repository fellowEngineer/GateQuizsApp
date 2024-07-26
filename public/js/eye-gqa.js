document.addEventListener('mousemove', (event) => {
    const eye = document.querySelector('.eye');
    const pupil = document.querySelector('.pupil');
    
    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;
    
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
    
    const pupilX = Math.cos(angle) * (eyeRect.width / 4);
    const pupilY = Math.sin(angle) * (eyeRect.height / 4);
    
    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
});