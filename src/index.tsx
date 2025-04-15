/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';
import { routes } from './routes.ts';
import './assets/normalize.css';

render(() => <Router base={import.meta.env.VITE_BASE_URL}>{routes}</Router>, document.getElementById('root')!);
