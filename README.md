# Hash Map (JavaScript)

A small educational implementation of a hash map written in JavaScript.

Repository files

- `hash_map.js` — Implementation of the hash map data structure (put/get/remove, hashing logic).
- `main.js` — Example usage and a simple runner to demonstrate the hash map.

Requirements

- Node.js (v12+ recommended)

Quick start

1. Open a terminal in the repository root (where `hash_map.js` and `main.js` live).
2. Run the example:

```powershell
node main.js
``

```js
const HashMap = require('./hash_map');

// Example usage (adapt to actual exported API in `hash_map.js`):
const map = new HashMap();
map.set('key1', 'value1');
console.log(map.get('key1'));
```

API (summary)

The exact API surface depends on the implementation in `hash_map.js`. Typical operations you should expect:

- create a map instance: `new HashMap()`
- set/put a key: `map.set(key, value)`
- get a value: `map.get(key)`
- remove a key: `map.remove(key)`
- check size or existence: `map.length()` / `map.has(key)`

Open `hash_map.js` to confirm the exported class/function and method names and adjust your code accordingly.

License

Specify a license if you plan to share or publish this project. Example: add an `MIT` license by creating a `LICENSE` file.