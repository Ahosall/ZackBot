const usedCommandRecently = new Set()

const isFiltered = (from) => !!usedCommandRecently.has(from)

const addFilter = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => usedCommandRecently.delete(from), 1500) 
}

module.exports = {
    isFiltered,
    addFilter
}
