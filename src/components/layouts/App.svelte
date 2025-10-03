<script>
import { onMount } from 'svelte';
import { Router, Route, useLocation } from 'svelte-routing';
import Sidebar from '../widgets/Sidebar.svelte'
import Navbar from '../widgets/Navbar.svelte';
import ThemeToggle from '../widgets/ThemeToggle.svelte';
import Footer from '../widgets/Footer.svelte';
import Home from '../pages/app/Home.svelte';
import { getSession } from '../../services/user_service.js';
import { dataStore } from '../../stores/session_stores.js';

export let basepath = '/';

const location = window.location.pathname;
console.log(location)
console.log(location.startsWith('/conversations/'))
$: isConversationRoute = location.startsWith('/conversations/');
console.log(isConversationRoute)

onMount(() => {
  const sidebarToggle = document.querySelector('#sidebar-toggle');
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
      document.querySelector('#sidebar').classList.toggle('collapsed');
    });
  }
  getSession().then((resp) => {
    console.log(resp)
    dataStore.set(resp.data.jwt);
    console.log(dataStore)
  }).catch((resp) =>  {
    console.error(resp.status)
    console.error(resp)
  })
});
</script>

<style>
  .main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-width: 0;
    overflow: hidden;
    transition: all 0.35s ease-in-out;
    width: 100%;
    background: var(--bs-dark-bg-subtle);
  }

  main{
    padding-top: 20px !important;
  }

  .wrapper {
    align-items: stretch;
    display: flex;
    width: 100%;
  }
</style>

<div class="wrapper">
  <Sidebar />
  <div class="main">
    <Navbar />
    <main class="content px-3 py-2">
      <div class="container-fluid">
        <Router basepath="{basepath}">
          <Route path="/" component={Home} />
        </Router>
      </div>
    </main>
    <ThemeToggle />
    {#if !isConversationRoute}
      <Footer />
    {/if}
  </div>
</div>

