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
    <a href="#installation"><strong>Installation</strong></a> ·
    <a href="./docs/DOCUMENTATION.md"><strong>Documentation</strong></a> ·
    <a href="#author"><strong>Author</strong></a>
  </p>
</div>

<br/>

## Introduction

React Promenade is an unstyled component library that makes it easy to create multi-step user flows with step-by-step validation and navigation.

## Why Multi-Step User Flows?

Breaking big forms into multi-step user flows will almost always:

* **improve UX**
* **increase user engagement**
* **boost signups & completion rates**

## Installation

```bash
npm i react-promenade
# or
pnpm add react-promenade
# or
yarn add react-promenade
# or
bun add react-promenade
```

## Example

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
  const { isBackDisabled, isNextDisabled, goBack, goForward } = usePromenade()

  return (
    <div>
      <h1>Step 1</h1>
      <button onClick={goBack} disabled={isBackDisabled}>Back</button>
      <button onClick={goForward} disabled={isNextDisabled}>Next</button>
    </div>
  )
}
```

**View full documentation and examples under [./docs](./docs)**.

## Author

* Gus [@gdbroman](https://x.com/gdbroman) (reach out for questions or feedback)
