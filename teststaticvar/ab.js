function getMaVariableStatique() {
    return JSON.parse(localStorage.getItem('myStaticNumber'))
}
/**
 * @param {number} n 
 */
function setMaVariableStatique(n) {
    localStorage.setItem('myStaticNumber', JSON.stringify(n))
}