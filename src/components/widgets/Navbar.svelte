<script>
  export let user; // Recibe los datos del usuario como prop
</script>

<style>
  .navbar-brand{
    color: #FDFDFD !important;
  }
</style>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Mi Dashboard</a>
    
    <!-- Botón para colapsar el sidebar en móviles -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse">
      <span class="navbar-toggler-icon"></span>
    </button>

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
        <li><a class="dropdown-item" href="#"><i class="fa fa-sign-out me-2"></i>Cerrar Sesión</a></li>
      </ul>
    </div>
  </div>
</nav>