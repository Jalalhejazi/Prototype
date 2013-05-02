// Test JS.Array 
(function () {

describe('Prototype', function () {
it('Prototype for extending object functionality', function () {
     
//Constructor defines properties and inits object
var Calculator = function (x, y) {
    this.x = x;
    this.y = y;
};

//Prototype defines functions using JSON syntax
Calculator.prototype = {

    add: function (x, y) {
        return x + y;
    },
    subtract: function (x, y) {
        return x - y;
    }

};
var calc = new Calculator(1, 2);

expect(calc.x).to.equal(1);

expect(calc.y).to.equal(2);

expect(calc.add(1, 2)).to.equal(3);

expect(calc.subtract(2, 1)).to.equal(1);

// Extending more functionality
Calculator.prototype.multiply = function (x, y) {
    return x * y;
};

expect(calc.multiply(10, 20)).to.equal(200);

                    
})
})
       
       
})();