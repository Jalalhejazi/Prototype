// Test Variable scope 
(function () {

describe("Variable is a name, associated with a value.", function () {
        
it('x is undefined variable', function () {
var x ;
expect(x).to.equal(undefined);

})// end of it()
            
it('x is defined variable', function () {
var x = null;
expect(x).to.equal(null);

})// end of it()


it('x is assigned a value (variable initialization)', function () {
var x = 0;
expect(x).to.equal(0);

})// end of it()


it('JavaScript has two levels of scope, global and local', function () {
//A global variable is one that is defined everywhere in your script
var x = 'global';

function testTheScope() {
//A local variable is one that is local to a function. 
x = 'local';
console.log("Se the console to expect x=",x);
}

testTheScope();
    
})



it('JavaScript has no block scope :-( ', function () {
console.log("//The following code will print 'local' twice, which is perhaps not what we intended.")
var x = '************* global **************';

function testTheScope() {
    x = '************* local **************';
    console.log(x);
}

testTheScope();
console.log(x);
})


it('JavaScript has no block scope. So always explicit declare a variable inside a function :-) ', function () {
console.log("//The following code will print 'local' first, then global");
var x = '************* global **************';

function testTheScope() {
var x = '************* local **************';
console.log(x);
}

testTheScope();
console.log(x);
})

it('Best practice: always define variable using var', function () {
var x = 1 + 2 * 3 + 4;
expect(x).to.equal(11);
                    

})

}) // end of describe()
   
})(); // end if module()