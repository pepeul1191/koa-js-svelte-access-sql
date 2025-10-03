<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  
  export let user;
  
  function toggleSidebar() {
    dispatch('toggleSidebar');
  }
</script>

<style>
  .navbar-brand{
    color: #FDFDFD !important;
    margin-left: 10px;
  }

  .dropdown-menu{
    border-radius: 0px;
  }

  .dropdown-menu li .dropdown-item:hover{
    background-color: #FFF;
    color: var(--bs-primary) !important;
  }

  .dropdown-menu li .dropdown-item{
    color: #343434 !important;
  }

  /* Asegurar que el botón sea siempre visible */
  .navbar-toggler {
    display: block !important;
    visibility: visible !important;
  }
</style>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <!-- Botón siempre visible - Combinar Bootstrap y Svelte -->
    <button 
      class="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse"
      data-bs-target="#navbarContent"
      on:click={toggleSidebar}
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <a class="navbar-brand" href="#">Mi Dashboard</a>
    
    <!-- Menú de usuario a la derecha -->
    <div class="ms-auto dropdown">
      <button class="btn btn-link nav-link dropdown-toggle text-white text-decoration-none" type="button" data-bs-toggle="dropdown">
        <i class="fa fa-user me-2"></i>
        {user.name}
      </button>
      <ul class="dropdown-menu dropdown-menu-end">
        <li><a class="dropdown-item" href="#"><i class="fa fa-user me-2"></i>Mi Perfil</a></li>
        <li><a class="dropdown-item" href="#"><i class="fa fa-cog me-2"></i>Configuración</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="/sign-out"><i class="fa fa-sign-out me-2"></i>Cerrar Sesión</a></li>
      </ul>
    </div>
  </div>
</nav>