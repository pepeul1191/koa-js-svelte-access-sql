<script>
  export let menuItems; // Recibe los items del menú como prop
</script>

<div class="bg-light border-end" style="width: 250px;">
  <div class="sidebar-sticky pt-3">
    <ul class="nav flex-column">
      {#each menuItems as item}
        <li class="nav-item">
          <a class="nav-link d-flex align-items-center text-dark" href="#">
            <i class="fa {item.icon} me-3 fa-fw" style="width: 20px; text-align: center;"></i>
            <span>{item.name}</span>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .sidebar-sticky {
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
  }
  
  .nav-link {
    transition: all 0.3s ease;
  }
  
  .nav-link:hover {
    background-color: #e9ecef;
  }
</style>