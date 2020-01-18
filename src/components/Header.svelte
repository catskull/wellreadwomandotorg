<script>
  import Nav from "./Nav.svelte";

  export let segment;
</script>

<header>
  <h1>Hi, I'm Carter.</h1>
  <p>
    I'm a budding software developer, fresh out of college. I love a good UI and
    a smooth deploy.
  </p>
  <Nav {segment} />
</header>
