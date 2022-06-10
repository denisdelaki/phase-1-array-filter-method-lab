// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(function (eliminate){
        return eliminate.toLowerCase().indexOf(name.toLowerCase()) !==-1
    })
}
function fuzzyMatch(drivers, query) {
    return drivers.filter(function (first) {
       return first.toLowerCase().indexOf(query.toLowerCase())===0
    })
}
function matchName(drivers, matched) {
    return drivers.filter(function (matching){
        return matching.name===matched
       })
}