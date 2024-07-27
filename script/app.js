// app.js
import { Home, About } from './pages.js';

const routes = {
  '/': Home,
  '/about': About,
  '/products': () => 'Here are our Products',
  '/gallery': () => 'Welcome to the Gallery',
  '/contact': () => 'Get in touch with us'
};

function navigateTo(url) {
  history.pushState(null, null, url);
  renderPage();
}

function renderPage() {
  const path = window.location.pathname;
  const contentFunction = routes[path] || (() => '404 - Page not found');
  const content = contentFunction(); // Call the function to get the content
  document.getElementById('app').innerHTML = content;
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[data-link]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(e.target.getAttribute('data-link'));
    });
  });

  window.addEventListener('popstate', renderPage);
  renderPage();
});
