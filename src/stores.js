import { writable } from 'svelte/store';

export const token = writable(localStorage.getItem('token'));