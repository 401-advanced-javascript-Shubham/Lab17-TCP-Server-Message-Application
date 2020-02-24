const util = require('util');
const file = `${__dirname}/files/test.txt`;
const app = require('../app.js');

let expectedText = "THIS IS SOME SAMPLE TEXT";

describe('alterFile', () => {
  it('can properly uppercase contents', () => {
    mockRead(file)
      .then(app)
      .then(buffer => {
        expect(buffer).toEqual(expectedText);
      });
  });
})