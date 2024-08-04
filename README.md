<img alt="React Promenade – A React hook for crafting multi-step forms" src="./assets/cover.png" />

<div align="center">
  <a href="https://github.com/gdbroman/react-promenade" style="text-decoration: underline">
    <h1>
      <u>
        React Promenade
      </u>
    </h1>
  </a>
  <p>
    <b>A React hook for crafting multi-step user flows</b>
  </p>
  <p align="center">
    <a href="https://twitter.com/gdbroman">
      <img src="https://img.shields.io/twitter/follow/gdbroman?style=flat&label=gdbroman&logo=x" alt="Gus Twitter follower count" />
    </a>
    <a href="https://github.com/gdbroman/react-promenade">
      <img src="https://img.shields.io/github/stars/gdbroman/react-promenade?style=flat&label=gdbroman%2Freact-promenade" alt="react-promenade repo star count" />
    </a>
  </p>
  <p align="center">
    <a href="#quick-start"><strong>Start Here</strong></a> ·
    <a href="./docs/DOCUMENTATION.md"><strong>Documentation</strong></a> ·
    <a href="#author"><strong>Author</strong></a>
  </p>
</div>

<br/>

## Introduction

Boost conversion rates by breaking big forms into multi-step user flows.

**View full documentation and examples under [./docs](./docs)**.

## Quick Start

```tsx
import usePromenade from 'react-promenade'

function Signup() {
  const { goBack, goForward } = usePromenade()

  return (
    <div>
      <h1>Step 2</h1>
      <button onClick={goBack}>Back</button>
      <button onClick={goForward}>Next</button>
    </div>
  )
}
```

## Author

* Gus [@gdbroman](https://github.com/gdbroman)
