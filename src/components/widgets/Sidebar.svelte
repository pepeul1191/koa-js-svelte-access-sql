<!-- Sidebar.svelte -->
<script>
  export let menuItems;
</script>

<div class="sidebar bg-light">
  <div class="sidebar-sticky pt-3">
    <ul class="nav flex-column">
      {#each menuItems as item}
        <li class="nav-item">
          <a class="nav-link d-flex align-items-center" href="#">
            <i class="fa {item.icon} me-3 fa-fw" style="width: 20px; text-align: center;"></i>
            <span>{item.name}</span>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .sidebar {
    width: 250px;
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    .sidebar {
      display: none;
    }
  }

  .sidebar-sticky {
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
    background-color: var(--bs-primary);
  }

  .nav-link {
    transition: all 0.3s ease;
    color: #f8f9fa !important;
  }

  .nav-link:hover {
    background-color: #f8f9fa;
    color: #343434 !important;
  }
</style>
