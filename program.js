
// Lommeregner 1.klasse

// OOP > constructor
var Calculator = function (x , y) {
    this.x = x ;
    this.y = y;
};

//child
Calculator.prototype = {
    plus: function (x, y) { return x + y }
    ,
    minus: function (x, y) { return x - y }
    ,
    sin: function (x) { Math.sin(x) }

};


//Usage: 
var calc = new Calculator(0, 0);

console.log("forventer plus= 30" , calc.plus(10, 20) ) ;


