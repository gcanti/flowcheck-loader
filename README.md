# flowcheck-loader

This is a Webpack loader for **[Flowcheck](https://github.com/gcanti/flowcheck)**.  

Flowcheck is a **runtime assertions** library that uses **[Flow](http://flowtype.org)** syntax but is meant to be ran **in development**.

Chain this loader with **[jsx?stripTypes](https://github.com/petehunt/jsx-loader)** so types are stripped in JS code:

```js
// Webpack config
module.exports = {
  ...
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['jsx?harmony&stripTypes', 'flowcheck'], exclude: /node_modules/ }
    ]
  }
};

```

You can use this with *or* without using Flow or TypeScript itself.  
It can also be a nice first step towards migrating code to Flow.

**[Read more about Flowcheck](http://gcanti.github.io/flowcheck/)**
