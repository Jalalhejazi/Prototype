// Test JS.Array 
(function () {

describe('Revealing Module', function () {
it.skip('Module-Pattern hide private members and Reveal pubic members ', function () {
     
//calculator.js
var calculator = function () {
    //private members
    add = function (x, y) { x + y },
    substract = function (x, y) {x - y };

    //This is how the Module reveals public members
    return {
        add: add,
        subtract: substract
    };

}();

console.log(calculator.add(2, 2));

//var calc = new calculator();
//Without calling new constructor, Just access .Add() method
//expect(calculator.Add(2, 2)).to.equal(4);

                    
})
})
       
       
})();