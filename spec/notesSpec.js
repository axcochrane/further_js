// .toEqual

describe ('Class', function(){
  it ('does a certain action',function(){
    expect(test_function()). toEqual () // toBeTrue
  });
});


expect
toEqual

var Test = new function() {

}

Test.prototype.expect = function( testFunction ) {
  testFunction()
};

Test.prototype.toEqual = function( assertion ) {
  if (function === assertion ) {return 'test passes'}
  else {return 'test fails'}

};