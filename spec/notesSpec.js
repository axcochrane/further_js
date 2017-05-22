(function(describe) {

  function toEq(test_name, expected_outcome, test_function) {
    if (test_function === expected_outcome) {
      document.write (test_name + " - Pass");
    } else {
      document.write (test_name + " - Fail");
    }
  }

  function arrayToContain(test_name, element, array) {
    if (array.find["element_1"] === true)  {
      document.write (test_name + " - Pass");
    } else {
      document.write (test_name + " - Fail");
    }
  }


    toEq("returns true value", "true", test_function());
    arrayToContain("array contain element", "test_element", ["element_1", "element_2", "test_element"]);

})(this);
