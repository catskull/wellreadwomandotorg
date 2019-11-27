<script>
  // TODO
</script>

<style>
  :global(body) {
    transition: background-color 0.2s, color 0.2s, word-spacing 0.2s,
      line-height 0.2s;
  }

  :global(body) {
    --background-color: hsl(225, 6%, 13%);
    --text-color: hsl(180, 7%, 97%);
    --link-color: hsl(213, 100%, 88%);
    word-spacing: 0.05em;
  }

  @media (prefers-color-scheme: light) {
    :global(body) {
      --background-color: hsl(0, 0%, 100%);
      --text-color: hsl(0, 0%, 13%);
      --link-color: hsl(213, 100%, 28%);
    }
  }

  :root {
    font-size: 2.4vw;
  }
  @media all and (min-width: 1000px) {
    :root {
      font-size: 24px;
    }
  }
  @media all and (max-width: 520px) {
    :root {
      font-size: 18px;
    }
  }

  :global(body) {
    background-color: var(--background-color);
    color: var(--text-color);
    font-family: "Source Serif Pro", serif;
    font-feature-settings: "kern" 1;
    font-feature-settings: "liga" 1;
    font-size: 0.93rem;
    line-height: 1.4;
    max-width: 65ch;
    margin: auto;
    padding: 16px;
    text-rendering: optimizeLegibility;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
    font-family: "Source Sans Pro", sans-serif;
  }

  h1 {
    font-size: 1.5em;
  }

  h2 {
    font-size: 1.2em;
  }

  a,
  a:visited,
  a:active {
    color: var(--link-color);
    cursor: pointer;
    transition: background 0.2s, text-decoration 0.2s, filter 0.2s;
    text-decoration: underline solid var(--background-color);
  }

  a:active {
    filter: brightness(60%);
  }

  a:hover {
    text-decoration: underline;
  }
</style>

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <meta name="Description" content="Homepage for Carter McBride" />
  <link rel="canonical" href="https://carter.works" />
  <title>Carter McBride</title>
  <link
    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro|Source+Serif+Pro&display=swap"
    rel="stylesheet" />
</svelte:head>

<header>
  <h1>Hi, I'm Carter.</h1>
  <p>
    I'm a budding software developer, fresh out of college. I love a good UI and
    a smooth deploy.
  </p>
</header>
<main>
  <section>
    <h2>Projects</h2>
    <ul>
      <li>
        <a href="https://github.com/carterworks/GeoNote">GeoNote</a>
        <span>—</span>
        <span>
          A note-taking app that indexes them not by title, but by location.
          Written in Dart with the Flutter framework.
        </span>
      </li>
      <li>
        <a href="https://github.com/carterworks/discord-bots">Discord Bots</a>
        <span>—</span>
        <span>
          A few toy Discord Bots. Includes FTFYBot, which corrects your
          misspellings, and LMGTFYBot, which detects questions and snarkily
          Googles the word for you. Written in Go.
        </span>
      </li>
      <li>
        <a href="https://github.com/carterworks/uta">UTA</a>
        <span>—</span>
        <span>
          A commandline utility and API wrapper for the Utah Transit Authority's
          API. Written in Go.
        </span>
      </li>
      <li>
        <a href="https://proposal.carter.works/">A Tinder Clone</a>
        <span>—</span>
        <span>My wife and I met on Tinder. This is how I proposed!</span>
      </li>
    </ul>
  </section>
  <section>
    <h2>Jobs</h2>
    <ul>
      <li>
        Simplifile
        <span>—</span>
        <span>Intern from Jan 2019 to Present</span>
        <ul>
          <li>Javascript/Typescript</li>
          <li>Angular</li>
          <li>Java</li>
        </ul>
      </li>
      <li>
        Lingotek
        <span>—</span>
        <span>Intern from May 2018 to December 2018</span>
        <ul>
          <li>Javascript</li>
          <li>Vue</li>
        </ul>
      </li>
      <li>
        BYU Center for Teaching and Learning
        <span>—</span>
        <span>Front-End Developer from February 2016 to May 2018</span>
        <ul>
          <li>Javascript</li>
          <li>PHP</li>
        </ul>
      </li>
      <li>
        Nu Skin
        <span>—</span>
        <span>Intern from May 2017 to August 2017</span>
        <ul>
          <li>Javascript/Typescript</li>
          <li>React</li>
          <li>Microsoft Sharepoint</li>
        </ul>
      </li>
    </ul>
  </section>
  <section>
    <h2>Hobbies include…</h2>
    <ul>
      <li>Tinkering with Docker and Kubernetes</li>
      <li>Cooking</li>
      <li>
        Collecting data about things, like my sugar glider's eating habits
      </li>
      <li>Playing video games</li>
    </ul>
  </section>
  <section>
    <h2>Contact</h2>
    <ul>
      <li>
        <a href="mailto:hello@site.carter.works">Email me…</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/thatcartermcbride/">
          …or connect with me on LinkedIn
        </a>
      </li>
      <li>
        <a href="https://github.com/carterworks">
          …or improve my code on GitHub
        </a>
      </li>
      <li>
        <a href="https://mastodon.technology/web/accounts/132123">
          …or toot at me on Mastodon
        </a>
      </li>
      <li>
        <a href="https://steamcommunity.com/id/CobraLaserFace/home">
          …or play a game with me on Steam
        </a>
      </li>
      <li>
        …or find RarePupper#6027 on Discord (where you can find my Steam profile
        and we can play a game together)
      </li>
    </ul>
  </section>
</main>
