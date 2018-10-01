// Import expect library
var expect= require('chai').expect;

// Writing expections
expect(true).to.be.true;


expect(titleCase('the great mouse detective')).to.be.a('string');

function titleCase(title){

    return title;
}