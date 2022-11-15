const Engineer = require('../lib/Engineer');

test("Can create Engineer object", () => {
    var expectedValue    = "object"
    const e = new Engineer();
    var valueGot = typeof(e);
    expect(valueGot).toBe(expectedValue);
  });

  test("Get role returns Engineer", () => {
    var expectedValue    = "Engineer"
    const e = new Engineer();
    var valueGot = e.getRole();
    expect(valueGot).toBe(expectedValue);
  });
  
  test("Get Github returns Github handle of Engineer", () => {
    var expectedValue    = "TestGithub123"
    const e = new Engineer('TestEngineer', 'testEngineer@email.com', '123', expectedValue);
    var valueGot = e.getGithub();
    expect(valueGot).toBe(expectedValue);
  });