class HashMap {

    constructor() {
        this.capacity = 16
        this.buckets = new Array(this.capacity)
        this.loadingFactor = 0.75
    }

    hash(key) {
        let hashcode = 0
        const primeNumber = 31

        for (let i = 0; i < key.length; i++) {
            hashcode = primeNumber * hashcode + key.charCodeAt(i)
        }
        return hashcode
    }

    set(key, value) {
        if (this.length() > (this.capacity * this.loadingFactor)) {
            this.capacity *= 2
            this.buckets.length = this.capacity
        }
        const hashcode = this.hash(key)
        this.buckets[hashcode] = { key, value }
    }

    get(key) {
        const hashcode = this.hash(key)
        return this.buckets[hashcode] ? this.buckets[hashcode] : null
    }

    has(key) {
        const hashcode = this.hash(key)
        return this.buckets[hashcode] ? true : false
    }

    remove(key) {
        const hashcode = this.hash(key)
        if (this.buckets[hashcode]){
            this.buckets[hashcode] = undefined
            this.length--
            return true
        }
        return false
    }

    length() {
        return this.buckets.filter(bucket => bucket !== undefined).length
    }

    clear() {
        this.buckets = new Array(16)
        this.length = 0
    }

    keys() {
        const keys = []
        for (let bucket of this.buckets) {
            if (bucket) keys.push(bucket.key)
        }
        return keys
    }

    values() {
        const values = []
        for (let bucket of this.buckets) {
            if (bucket) values.push(bucket.value)
        }
        return values
    }

    entries() {
        const entries = []
        for (let bucket of this.buckets) {
            if(bucket) entries.push([bucket.key, bucket.value])
        }
        return entries
    }
}

export { HashMap }