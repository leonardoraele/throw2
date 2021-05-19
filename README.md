This is a fork of [anton-rudeshko/node-throw](https://github.com/anton-rudeshko/node-throw).
If you are familiar with the original project, see [Fork Changes](#fork-changes) below.

<hr/>

# throw2

You can't use `throw` statement in expressions in JavaScript:

```js
arg = arg || throw new Error('arg is required');
//           ^^^^^
// Uncaught SyntaxError: Unexpected token 'throw'
```

This tiny library is wrapping `throw` in a function:

```js
// Use capital T to distinguish this module from the throw keyword
const Throw = require('throw2');

// ...

arg = arg || Throw('arg is required');
```

This is particularly useful when using
[nullish coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator) and [optional chaining operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining):

```js
value = obj?.nested?.value ?? Throw('value not found');
```

## Installation

```bash
npm i throw2
```

### Require/Import

CommonJS:

```js
const Throw = require('throw2');
```

ESM:

```js
import Throw from 'throw2';
```

## More Usage Options

You can compose dynamic error messages by providing multiple arguments:

```js
typeof arg === 'string' || Throw('Invalid arg. Received:', arg, 'Should be string.');
```

You can also use your own error types:

```js
/*...expression...*/ || Throw(new MyCustomError(arg1, arg2));

// Or

/*...expression...*/ || Throw(MyCustomError, arg1, arg2); // Creates a MyCustomError with arg1 and arg2
```

## Note
Throw as an expression is currently a [Stage 2 TC39 proposal](https://github.com/tc39/proposal-throw-expressions),
so this package might no longer be necessary in the future.

### Fork Changes
The main difference is that `node-throw` uses Node.js API,
so it doesn't work in the browser without a polyfill.
`throw2` works in any CommonJS environment. (e.g. noje.js and webpack)

Also, `printf`-like message formatting is not supported by `throw2`. Use [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) instead; or pass multiple arguments to the function. (see usage examples)

## License

MIT
