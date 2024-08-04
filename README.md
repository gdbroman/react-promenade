# react-promenade

Boost sign-ups and form completions with react-promenade by breaking big forms into smaller, manageable steps.

---

**View full documentation and examples on [react-promenade.vercel.app](https://react-promenade.vercel.app)**


---

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
