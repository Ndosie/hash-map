class HashMap {

    constructor() {
        this.capacity = 16
        this.buckets = Array.from({ length: this.capacity }, () => [])
        this.loadingFactor = 0.75
    }

    hash(key) {
        let hashcode = 0
        const primeNumber = 31

        for (let i = 0; i < key.length; i++) {
            hashcode = (primeNumber * hashcode + key.charCodeAt(i)) % this.capacity
        }
        return hashcode
    }

    set(key, value) {
        const filledBuc = this.buckets.filter(bucket => bucket.length !== 0)
        if (filledBuc.length > (this.capacity * this.loadingFactor)) {
            this.buckets = [...this.buckets, ...Array.from({length: this.capacity}, () => [])]
            this.capacity *= 2
        }
        const hashcode = this.hash(key)
        const bucket = this.buckets[hashcode]
        if (bucket.length !== 0) {
            for (let item of bucket) {
                if (item.key === key) {
                    item.value = value
                    return
                }
            }
        }
        this.buckets[hashcode].push({ key, value })
    }

    get(key) {
        const hashcode = this.hash(key)
        const bucket = this.buckets[hashcode]
        for (let item of bucket) {
            if (item.key === key) return item
        }
        return null
    }

    has(key) {
        const hashcode = this.hash(key)
        const bucket = this.buckets[hashcode]
        for (let item of bucket) {
            if (item.key === key) return true
        }
        return false
    }

    remove(key) {
        const hashcode = this.hash(key)
        const bucket = this.buckets[hashcode]
        if (bucket.length !== 0){
            let i = 0
            for (let item of bucket) {
                if (item.key === key) {
                    bucket.splice(i, 1)
                    return true
                }
                i++
            }
        }
        return false
    }

    length() {
        let length = 0
        for (let bucket of this.buckets) {
            length += bucket.length
        }
        return length
    }

    clear() {
        this.buckets = Array.from({ length: 16 }, () => [])
    }

    keys() {
        const keys = []
        for (let bucket of this.buckets) {
            if (bucket.length !== 0) {
                for (let item of bucket) {
                    keys.push(item.key)
                }
            } 
        }
        return keys
    }

    values() {
        const values = []
        for (let bucket of this.buckets) {
            if (bucket.length !== 0) {
                for (let item of bucket) {
                    values.push(item.value)
                }
            }
        }
        return values
    }

    entries() {
        const entries = []
        for (let bucket of this.buckets) {
            if (bucket.length !== 0) {
                for (let item of bucket) {
                    entries.push([item.key, item.value])
                }
            } 
        }
        return entries
    }
}

export { HashMap }