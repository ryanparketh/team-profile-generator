const Employee = require('../lib/Employee');

test("Can create Employee object", () => {
    var expectedValue    = "object"
    const e = new Employee();
    var valueGot = typeof(e);
    expect(valueGot).toBe(expectedValue);
  });

  test("Get role returns Employee", () => {
    var expectedValue    = "Employee"
    const e = new Employee();
    var valueGot = e.getRole();
    expect(valueGot).toBe(expectedValue);
  });