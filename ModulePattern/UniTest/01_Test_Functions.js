// Test JS.Array 
(function () {

describe('Function is really nothing more than a named block of code', function () {

it('a named function', function () {

function isOK() { return true; }
var canFly = function () { return true; };

expect(  isOK()    ).to.equal(true);
                    
})



it('a variable assigned as a function', function () {

var isOK = function () { return true; }

expect(isOK()).to.equal(true);
})



it('We can refer to a function, within itself, by its name.', function () {
function hello(n) {
    return n > 0 ? hello(n - 1) + "a" : "hiy";
}

expect(hello(0)).to.equal("hiy");
expect(hello(1)).to.equal("hiya");
expect(hello(2)).to.equal("hiyaa");
expect(hello(3)).to.equal("hiyaaa");
expect(hello(4)).to.equal("hiyaaaa");

})



it('Declaration of functions and objects', function () {

// Object-declaration
var obj = {};

// Function-declaration
var fn = function () { };

expect( typeof (obj) === "object")  .to.equal(true);
expect( typeof (fn)  === "function").to.equal(true);

})


it('How similar are functions and objects?', function () {

    // Object-declaration
    var obj = {};

    // Function-declaration
    var fn = function () { };

    obj.property1 = "some value";
    fn.property1  = "some value";

    //Both are objects, both have the property.
    expect(obj.property1 === "some value").to.equal(true);
    expect(fn.property1  === "some value").to.equal(true);

})

it('What happens if a function is an object property?', function () {

    var obj = {
        isBoolean: false,
        use: function () {
            this.isBoolean = !this.isBoolean;
        }
    };
    //Call the use(), will make the false become true
    obj.use();

    //Verify the value of isSharp has been changed.
    expect(obj.isBoolean).to.equal(true);

})

}) // end of describe
       
})();