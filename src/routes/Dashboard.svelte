<script>
    import { Link } from 'svelte-routing';
    import { token } from '../stores.js';

    const logout = () => {
        localStorage.clear();
        token.set(localStorage.getItem('token'));
    }
</script>

<h1>👋 Welcome {'{'}user{'}'}</h1>
<h2>
    <Link to="/" on:click={logout}>Logout</Link>
</h2>