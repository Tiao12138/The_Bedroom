document.querySelectorAll('.img-container').forEach(container => {
  const img = container.querySelector('.svgs');
  const audioPath = container.getAttribute('data-audio');
  const audio = new Audio(audioPath);
  
  img.addEventListener('click', () => {
      if (img.classList.contains('active')) {
          audio.pause();
          audio.currentTime = 0;
          img.style.filter = '';
          img.classList.remove('active');
      } else {
          audio.play();
          img.style.filter = 'brightness(1.3)';
          img.classList.add('active');
      }
      
      audio.addEventListener('ended', () => {
          img.style.filter = '';
          img.classList.remove('active');
      });
  });
});

