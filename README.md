<img alt="React Promenade – A React hook for crafting multi-step forms" src="./assets/cover.png" />

<br/>

<div align="center">
  <h1>
    <a href="https://github.com/gdbroman/react-promenade">
      <u>
        React Promenade
      </u>
    </a>
  </h1>
  <p>
    <b>A React hook for crafting multi-step user flows</b>
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
