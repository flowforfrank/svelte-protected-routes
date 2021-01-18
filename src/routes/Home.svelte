<script>
    import { Link, navigate } from 'svelte-routing';
    import { token } from '../stores.js';

    const login = () => {
        localStorage.setItem('token', '1');
        token.set(localStorage.getItem('token'));

        navigate('/dashboard', { replace: true });
    };
</script>

<h1>👋 Welcome to the home page</h1>
<h2>
    <Link to="dashboard">Go to Dashboard</Link>
</h2>
<span>or</span>
<h2>
    <span on:click={login}>Login</span>
</h2>