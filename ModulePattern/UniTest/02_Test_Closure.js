// Test JS.Array 
(function () {

describe('Function inside a function === Closure', function () {
it('an inner function always has access to the vars and params of its outer function', function () {
                    
function myClosure() {
// This variable 
var x = 1;
    //nested_function
    return function () {
        return x;
    };

}// end of myClosure

expect(typeof (myClosure) === "function").to.equal(true) 
})

it('A basic Closure function', function () {

var num = 1;

function add(p) {
    return num + p;
}
//Add two numbers together, one from a closure.
expect( add(10)   ).to.equal(11);


})

it("The variable from closure is reAssigned", function () {

    var num = 1;

    function add(p) {
        return num + p;
    }

    num = 100; //<------  The num variable is reAssigned

    //Add two numbers together, one from a closure.
    expect(add(10)).to.equal(110);


})

})//end of describe
       
       
})();