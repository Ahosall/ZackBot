const usedCommandRecently = new Set()

const isFiltered = (from) => !!usedCommandRecently.has(from)

const addFilter = (from) => {
    console.log(from)
    usedCommandRecently.add(from)
    setTimeout(() => usedCommandRecently.delete(from), 3000) 
}

module.exports = {
    isFiltered,
    addFilter
}
