const Intern = require('../lib/Intern');

test("Can create Intern object", () => {
    var expectedValue    = "object"
    const e = new Intern();
    var valueGot = typeof(e);
    expect(valueGot).toBe(expectedValue);
  });

  test("Get role returns Intern", () => {
    var expectedValue    = "Intern"
    const e = new Intern();
    var valueGot = e.getRole();
    expect(valueGot).toBe(expectedValue);
  });
  
  test("Get School returns School name of intern", () => {
    var expectedValue    = "School123"
    const e = new Intern('newIntern', 'newIntern@email.com', '123', expectedValue);
    var valueGot = e.getSchool();
    expect(valueGot).toBe(expectedValue);
  });