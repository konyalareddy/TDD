const assert = require('chai').assert;
const app = require('../app');

helloworld = app.helloWorld();
addNumbers = app.addNumbers(1,2);

describe('App', function(){
  describe('helloWorld()', function(){
    it('Hello World should return Hello', function(){
      //let result = app.sayHello();
      assert.equal(helloworld, 'Hello');
    });

    it('HelloWorld should return type string', function(){
      assert.typeOf(helloworld, 'string');
    });
  });

  describe('addNumbers()', function(){
    it('addNumbers should be above 1', function(){
      assert.isAbove(addNumbers, 1);
    });

    it('addNumbers should return type number', function(){
      assert.typeOf(addNumbers, 'number');
    });
  });
});
