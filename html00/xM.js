import {y} from './yM.js'

function x(params) {
    y("x");
    console.log("x: "+ params)
    return "fin x"
}

function dd(params){
    return "fin dd"
}

export {x, dd}