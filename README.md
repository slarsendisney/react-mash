# react-mash

A button component that has the ability to trigger a seperate function when repeatedly clicked. 

Demo: https://codesandbox.io/s/lucid-pine-giitu


NPM install:

```
npm install react-mash
```

### Use

All props that you normally pass to a``<button/>` can be used as normal.

#### props

- `onClick` -  Function you would like to call when the button is clicked.
- `onMash` -  Function you would like to call when the button is repeatedly clicked.
- `clicks` -  Number of clicks that should trigger onMash.
- `interval` -  Iime in which the number of clicks should trigger onMash.
- `resetOnMash` - Default true.When set to false, mashing the button passed the number of clicks will continue to call the onMash function.

Example Usage:

```
import React from "react";
import ButtonMash from "react-mash";

export default function App() {

  return (
    <div>
      <ButtonMash
        clicks={12}
        interval={2000}
        onClick={() => console.log("clicked")}
        onMash={() => console.log("mashed")}
      >
        The Button
      </ButtonMash>
    </div>
  );
}

```
