/* ADD PARTICLES ON PAGE LOAD */
document.addEventListener('DOMContentLoaded', function() {
  const particles = document.createElement('div');
  particles.className = 'particles';
  document.body.appendChild(particles);
  
  for (let i = 0; i < 50; i++) {
    createParticle();
  }
  
  function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';
    
    // Random size
    const size = Math.random() * 5 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    // Random animation duration
    particle.style.animationDuration = Math.random() * 30 + 10 + 's';
    
    // Random animation delay
    particle.style.animationDelay = Math.random() * 5 + 's';
    
    particles.appendChild(particle);
    
    // Re-create particle when animation ends
    setTimeout(() => {
      particle.remove();
      createParticle();
    }, parseFloat(particle.style.animationDuration) * 1000);
  }
  
  // Add 3D tilt effect
  document.addEventListener('mousemove', function(e) {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    
    header.style.transform = `translateZ(20px) rotateX(${y * -5}deg) rotateY(${x * 5}deg)`;
    main.style.transform = `translateZ(50px) rotateX(${y * -2}deg) rotateY(${x * 2}deg)`;
  });
});

/* CUSTOM JS FOR 3D EFFECTS - ADD TO BOTTOM OF CSS OR SEPARATE JS FILE */
// This will need to be moved to a separate JS file in a real implementation
// For Jekyll, you can add this to your assets/js folder and include it in your layout

document.addEventListener('DOMContentLoaded', function() {
  // Add data-text attribute for glitch effect
  const mainTitle = document.querySelector('#sue-paige');
  if (mainTitle) {
    mainTitle.setAttribute('data-text', mainTitle.textContent);
    mainTitle.classList.add('glitch');
  }
  
  // 3D parallax effect
  const depth = 20;
  const moveElements = document.querySelectorAll('h1, h2, p em, td, a');
  
  document.addEventListener('mousemove', function(e) {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    
    moveElements.forEach(element => {
      const speed = element.getAttribute('data-speed') || 1;
      element.style.transform = `translateX(${x * depth * speed}px) translateY(${y * depth * speed}px)`;
    });
  });
});
