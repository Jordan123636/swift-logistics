 // Active nav on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
 
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + current) a.classList.add('active');
    });
  });
 
  // Quote form handler
function handleQuote() {
  // Redirect to auth page instead of submitting
  window.location.href = 'auth.html';
}
  // Tracking handler
  function handleTrack() {
    const val = document.getElementById('trackingInput').value.trim();
    if (!val) { alert('Please enter a tracking number.'); return; }
    alert(`Tracking "${val}" — Firebase integration coming soon!`);
  }



