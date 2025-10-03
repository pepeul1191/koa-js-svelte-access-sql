<script>
  import { navigate } from 'svelte-routing';
	import Logo from '../svgs/Logo.svelte';
</script>

<style>
.fa-futbol-o{
  margin-right: 10px;
}


#sidebar {
    max-width: 264px;
    min-width: 264px;
    background: var(--bs-dark);
    transition: all 0.35s ease-in-out;
}

/* Sidebar Elements Style */

.sidebar-logo {
    padding: 1.15rem;
}

.sidebar-logo a {
    color: #e9ecef;
    font-size: 1.15rem;
    font-weight: 600;
}

.sidebar-nav {
    flex-grow: 1;
    list-style: none;
    margin-bottom: 0;
    padding-left: 0;
    margin-left: 0;
}

.sidebar-header {
    color: #e9ecef;
    font-size: .75rem;
    padding: 1.5rem 1.5rem .375rem;
}

a.sidebar-link {
    padding: .625rem 1.625rem;
    color: #e9ecef;
    position: relative;
    display: block;
    font-size: 0.875rem;
}

.sidebar-link[data-bs-toggle="collapse"]::after {
    border: solid;
    border-width: 0 .075rem .075rem 0;
    content: "";
    display: inline-block;
    padding: 2px;
    position: absolute;
    right: 1.5rem;
    top: 1.4rem;
    transform: rotate(-135deg);
    transition: all .2s ease-out;
}

.sidebar-link[data-bs-toggle="collapse"].collapsed::after {
    transform: rotate(45deg);
    transition: all .2s ease-out;
}

.sidebar-item li{
    padding-left: 20px;
}

</style>

<aside id="sidebar" class="js-sidebar">
  <!-- Content For Sidebar -->
  <div class="h-100">
    <div class="sidebar-logo">
      <!-- <Logo size={12} color='#FFFFFF' styles={''}/> -->
      <a href="/">
        <i class="fa fa-futbol-o" aria-hidden="true"></i> FIFA Journey
      </a>
    </div>
    <ul class="sidebar-nav">
      <li class="sidebar-header">
        Opciones
      </li>
      <li class="sidebar-item">
        <a class="sidebar-link" href="/" on:click|preventDefault={() => {navigate('/')}}>
          Home
        </a>
      </li>
      <li class="sidebar-item">
        <a class="sidebar-link" href="/" on:click|preventDefault={() => {navigate('/conversations')}}>
          Conversaciones
        </a>
      </li>
      <li class="sidebar-item">
        <a class="sidebar-link" href="/" on:click|preventDefault={() => {navigate('/alert')}}>
          Alertas
        </a>
      </li>
      <!--
      <li class="sidebar-item">
        <a class="sidebar-link" href="/" on:click|preventDefault={() => {navigate('/')}}>
          Home
        </a>
      </li>
      <li class="sidebar-item">
        <a href="/" class="sidebar-link collapsed" data-bs-target="#pages" data-bs-toggle="collapse"
            aria-expanded="false"><i class="fa-solid fa-file-lines pe-2"></i>
            Datos Maestros
        </a>

      <ul id="pages" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
        <li class="sidebar-item">
          <a class="sidebar-link" href="/admin/level" on:click|preventDefault={() => {navigate('/admin/level')}}>
            Lista de Niveles
          </a>
        </li>
        <li class="sidebar-item">
          <a href="/" class="sidebar-link">Page 2</a>
        </li>
      </ul>
    </li>
    <li class="sidebar-item">
        <a href="/" class="sidebar-link collapsed" data-bs-target="#posts" data-bs-toggle="collapse"
            aria-expanded="false"><i class="fa-solid fa-sliders pe-2"></i>
            Posts
        </a>
        <ul id="posts" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
          <li class="sidebar-item">
            <a href="/" class="sidebar-link">Post 1</a>
          </li>
          <li class="sidebar-item">
            <a href="/" class="sidebar-link">Post 2</a>
          </li>
          <li class="sidebar-item">
            <a href="/" class="sidebar-link">Post 3</a>
          </li>
        </ul>
      </li>
      <li class="sidebar-item">
        <a href="/" class="sidebar-link collapsed" data-bs-target="#auth" data-bs-toggle="collapse"
            aria-expanded="false"><i class="fa-regular fa-user pe-2"></i>
            Auth
        </a>
        <ul id="auth" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
          <li class="sidebar-item">
            <a href="/" class="sidebar-link">Login</a>
          </li>
          <li class="sidebar-item">
            <a href="/" class="sidebar-link">Register</a>
          </li>
          <li class="sidebar-item">
            <a href="/" class="sidebar-link">Forgot Password</a>
          </li>
        </ul>
      </li>
      <li class="sidebar-header">
        Multi Level Menu
      </li>
      <li class="sidebar-item">
        <a href="/" class="sidebar-link collapsed" data-bs-target="#multi" data-bs-toggle="collapse"
            aria-expanded="false"><i class="fa-solid fa-share-nodes pe-2"></i>
            Multi Dropdown
        </a>
        <ul id="multi" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
          <li class="sidebar-item">
            <a href="/" class="sidebar-link collapsed" data-bs-target="#level-1"
                data-bs-toggle="collapse" aria-expanded="false">Level 1</a>
            <ul id="level-1" class="sidebar-dropdown list-unstyled collapse">
              <li class="sidebar-item">
                  <a href="/" class="sidebar-link">Level 1.1</a>
              </li>
              <li class="sidebar-item">
                  <a href="/" class="sidebar-link">Level 1.2</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      -->
    </ul>
  </div>
</aside>