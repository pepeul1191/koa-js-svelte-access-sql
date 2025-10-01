// src/entries/app.js
import '../stylesheets/app.css';
import '../stylesheets/styles.css';
import App from '../components/layouts/App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;