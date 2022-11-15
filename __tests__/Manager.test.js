const Manager = require('../lib/Manager');

test("Can create Manager object", () => {
    var expectedValue    = "object"
    const e = new Manager();
    var valueGot = typeof(e);
    expect(valueGot).toBe(expectedValue);
  });

  test("Get role returns Manager", () => {
    var expectedValue    = "Manager"
    const e = new Manager();
    var valueGot = e.getRole();
    expect(valueGot).toBe(expectedValue);
  });
  
  test("Get officeNumber returns officeNumber of the Manager", () => {
    var expectedValue    = "officeNumber123"
    const e = new Manager('newManager', 'newManager@email.com', '123', expectedValue);
    var valueGot = e.getOfficenumber();
    expect(valueGot).toBe(expectedValue);
  });