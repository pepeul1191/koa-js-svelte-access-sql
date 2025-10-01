<script>
  import Navbar from '../widgets/Navbar.svelte';
  import Sidebar from '../widgets/Sidebar.svelte';

  // Datos de ejemplo para el menú y el usuario
  let menuItems = [
    { name: 'Dashboard', icon: 'fa-dashboard' },
    { name: 'Perfil', icon: 'fa-user' },
    { name: 'Configuración', icon: 'fa-cog' }
  ];

  let user = { name: 'Usuario Ejemplo' };
</script>

<div class="d-flex flex-column vh-100">
  <Navbar {user} />
  <div class="d-flex flex-grow-1">
    <Sidebar {menuItems} />
    <main class="flex-grow-1 p-3 bg-light">
      <!-- Tu contenido principal aquí -->
      <h1>Bienvenido al Dashboard</h1>
      <p>El contenido de tu aplicación irá aquí.</p>
    </main>
  </div>
</div>