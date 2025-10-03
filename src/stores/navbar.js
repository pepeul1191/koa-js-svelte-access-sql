// stores/navbar.js
import { writable } from 'svelte/store';

// Crear el store. El valor inicial se lee de localStorage
export const sidebarVisible = writable(
  typeof localStorage !== 'undefined' ? localStorage.getItem('sidebarVisible') !== 'false' : true
);

// Suscribirse al store para guardar automáticamente en localStorage
if (typeof localStorage !== 'undefined') {
  sidebarVisible.subscribe(value => {
    localStorage.setItem('sidebarVisible', value.toString());
  });
}