<img alt="React Promenade – React hooks for building multi-step forms" src="./assets/cover.png" />

<br/>

<div align="center">
  <h1>
    <u>React Promenade</u>
  </h1>
  <p>
    <b>React hooks for building multi-step forms</b>
  </p>
  <p align="center">
    <a href="#quick-start"><strong>Quick Start</strong></a> ·
    <a href="./docs/DOCUMENTATION.md"><strong>Full Documentation</strong></a> ·
    <a href="#author"><strong>Author</strong></a>
  </p>
</div>

<br/>

## Introduction

Boost sign-ups and form completions with react-promenade by breaking big forms into smaller, manageable steps.

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
