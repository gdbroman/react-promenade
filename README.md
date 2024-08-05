<img alt="React Promenade – React components for crafting multi-step user flows" src="./assets/cover.png" />

<div align="center">
  <a href="https://github.com/gdbroman/react-promenade" style="text-decoration: underline">
    <h1>
      <u>
        React Promenade
      </u>
    </h1>
  </a>
  <p>
    <b>React components for crafting multi-step user flows</b>
  </p>
  <p align="center">
    <a href="https://x.com/gdbroman">
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

*React Promenade boosts completion rates by breaking big forms into multi-step user flows.*

**View full documentation and examples under [./docs](./docs)**.

## Quick Start

```tsx
import { PromenadeProvider, PromenadeStep, usePromenade } from 'react-promenade';

function Signup() {
  return (
    <PromenadeProvider
      stepCount={3}
      isBackDisabled={(index) => { return index === 0 }}
      isNextDisabled={(index) => { return false }}
      onBack={(index) => { console.log('back clicked on step', index) }}
      onNext={(index) => { console.log('next clicked on step', index) }}
    >
      <PromenadeStep index={0}><EmailStep /></PromenadeStep>
      <PromenadeStep index={1}><AvatarStep /></PromenadeStep>
      <PromenadeStep index={2}><AboutMeStep /></PromenadeStep>
    </PromenadeProvider>
  )
}

function EmailStep() {
  const { isBackDisabled, isNextDisabled, goBackward, goForward } = usePromenade()

  return (
    <div>
      <h1>Step 1</h1>
      <button onClick={goBackward} disabled={isBackDisabled}>Back</button>
      <button onClick={goForward} disabled={isNextDisabled}>Next</button>
    </div>
  )
}
```

## Author

* Gus [@gdbroman](https://x.com/gdbroman) (reach out for questions or feedback)
