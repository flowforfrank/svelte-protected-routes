<script>
    import { Router, Route } from 'svelte-routing';
    import ProtectedRoute from './ProtectedRoute.svelte';

    import Home from './routes/Home.svelte';
    import Dashboard from './routes/Dashboard.svelte';
</script>

<Router>
    <Route path="/" component={Home} />
    <ProtectedRoute path="/dashboard" component={Dashboard} />
</Router>
