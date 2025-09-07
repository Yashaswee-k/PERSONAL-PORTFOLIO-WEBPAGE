// Toggle dark/light mode
document.getElementById('toggle-dark').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Toggle nav on small screens
function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('show');
}

// Scroll to top button
const scrollBtn = document.getElementById('scrollToTopBtn');

window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
};

scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Optional form submit handler
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Thanks for your message! I'll get back to you soon.");
});
