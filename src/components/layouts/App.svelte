<script>
  import { slide } from 'svelte/transition';
  import Navbar from '../widgets/Navbar.svelte';
  import Sidebar from '../widgets/Sidebar.svelte';
  import { onMount, afterUpdate } from 'svelte';
  import * as bootstrap from 'bootstrap';

  let menuItems = [
    { name: 'Dashboard', icon: 'fa-dashboard' },
    { name: 'Perfil', icon: 'fa-user' },
    { name: 'Configuración', icon: 'fa-cog' }
  ];

  let user = { name: 'Usuario Ejemplo' };
  let sidebarVisible = true;

  onMount(() => {
    const saved = localStorage.getItem('sidebarVisible');
    if (saved !== null) {
      sidebarVisible = JSON.parse(saved);
    }
  });

  afterUpdate(() => {
    localStorage.setItem('sidebarVisible', JSON.stringify(sidebarVisible));
  });

  function handleSidebarToggle() {
    sidebarVisible = !sidebarVisible;
  }
</script>

<div class="d-flex flex-column vh-100">
  <Navbar {user} on:toggleSidebar={handleSidebarToggle} />
  <div class="d-flex flex-grow-1">
    {#if sidebarVisible}
      
        <Sidebar {menuItems} />
      
    {/if}
    <main class="flex-grow-1 p-3 bg-light">
      <h1>Bienvenido al Dashboard</h1>
      <p>El contenido de tu aplicación irá aquí.</p>
    </main>
  </div>
</div>
