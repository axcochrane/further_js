// .toEqual

// describe ('Class', function(){
//   it ('does a certain action',function(){
//     expect(test_function()). toEqual () // toBeTrue
//   });
// });
//
//
// expect
// toEqual

(function(describe) {
  function testEqualsArgument(arguement) {
    var test_function = new Test_function();

    if (test_function !== arguement) {
      throw new Error("Does not equal");
    } else {
      return "Equals";
    }
  }
    testEqualsArgument("true");
})(this);
