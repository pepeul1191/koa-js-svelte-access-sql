<script>
  import { onMount } from 'svelte';

  const toggleRootClass = () => {
    const current = document.documentElement.getAttribute('data-bs-theme');
    const inverted = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', inverted);
  }

  const toggleLocalStorage = () => {
    if (isLight()) {
      localStorage.removeItem('light');
    } else {
      localStorage.setItem('light', 'set');
    }
  }

  const isLight = () => {
    return localStorage.getItem('light');
  }

  onMount(() => {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        toggleLocalStorage();
        toggleRootClass();
      });
    }

    if (isLight()) {
      toggleRootClass();
    }
  });
</script>

<style>
  /* Asegúrate de que los íconos sean visibles */
  .theme-toggle i {
    font-size: 24px; /* Ajusta el tamaño según sea necesario */
    color: #000; /* Asegúrate de que el color sea visible */
  }

  .theme-toggle {
    position: fixed;
    top: 50%;
    transform: translateY(-65%);
    text-align: center;
    z-index: 10;
    right: 0;
    left: auto;
    border: none;
    background-color: var(--bs-body-color);
  }

  html[data-bs-theme="dark"] .theme-toggle .fa-sun,
  html[data-bs-theme="light"] .theme-toggle .fa-moon {
    cursor: pointer;
    padding: 10px;
    display: block;
    font-size: 1.25rem;
    color: #FFF;
  }

  html[data-bs-theme="dark"] .theme-toggle .fa-moon {
    display: none;
  }

  html[data-bs-theme="light"] .theme-toggle .fa-sun {
    display: none;
  }
</style>

<a href="#" class="theme-toggle">
  <i class="fa-regular fa-moon"></i>
  <i class="fa-regular fa-sun"></i>
</a>
