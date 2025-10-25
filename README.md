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

# Hash Map (JavaScript)

An educational, minimal Hash Map implementation in JavaScript with explicit collision handling using separate chaining (per-bucket arrays).

## Repository files

- `hash_map.js` — The HashMap implementation (ES module export: `export { HashMap }`).
- `main.js` — Example usage demonstrating the API.

## Key features

- Collision resolution: separate chaining. Each bucket is an array (list) that holds multiple entries that hash to the same index. When a collision occurs the implementation stores multiple { key, value } objects in the same bucket and scans the bucket for matching keys.
- Hash function: a simple polynomial rolling hash using prime 31 and modulo the current capacity.
- Methods implemented: `set`, `get`, `has`, `remove`, `length`, `clear`, `keys`, `values`, `entries`.

## API (exact)

The implementation exports `HashMap` as an ES module. Example method behavior:

- `new HashMap()` — create a new map instance.
- `set(key, value)` — insert or update a key.
	- If the key already exists in its bucket, the implementation updates the value.
	- Otherwise it appends `{ key, value }` to the bucket (separate chaining).
- `get(key)` — returns the stored entry object `{ key, value }` if found, otherwise `null`.
- `has(key)` — returns `true` if a key exists, otherwise `false`.
- `remove(key)` — removes matching key from its bucket and returns `true` if removed, otherwise `false`.
- `length()` — number of stored key/value pairs.
- `clear()` — reset buckets to the initial empty state.
- `keys()` / `values()` / `entries()` — return arrays of keys, values, or `[key, value]` pairs.

## Collision handling details

- Buckets: `this.buckets` is an array of length `capacity`, and each element is an array used as the chain (list) for that bucket.
- On `set`, the code computes an integer index from `hash(key)` and then:
	1. Iterates the bucket; if an item with the same key is found, it updates `item.value` and returns.
	2. If not found, it pushes `{ key, value }` to the bucket.
- `get`/`has`/`remove` all walk the bucket array and compare `item.key` for equality.

This is simple and robust for demonstration and learning; for production you'd replace per-bucket arrays with linked lists (or other buckets) and implement proper rehashing on resize.