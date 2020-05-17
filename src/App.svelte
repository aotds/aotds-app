<script>
  export let name;
  import { Router, Link, Route } from "svelte-routing";
  import Battle from "./components/Battle/index.svelte";
</script>

<Router>
  <Route path="/battle/:battle" component={Battle} />
  <Route path="/">
    Main page
    <Link to="/battle/gemini">Gemini</Link>
  </Route>
</Router>
