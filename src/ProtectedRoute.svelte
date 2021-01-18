<script>
    import { Route, Link } from 'svelte-routing';
    import accessDenied from './routes/accessDenied.svelte';
    import { token } from './stores.js';

    export let path;
    export let component;

    $: isAuthenticated = $token;
</script>

{#if isAuthenticated}
    <Route path={path} component={component} />
{:else}
    <Route path={path} component={accessDenied} />
{/if}