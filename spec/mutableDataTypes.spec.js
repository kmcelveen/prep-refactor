describe('Mutable Data Types', function(){

  describe('Objects', function(){

    describe('createCarObject()', function () {
    'use strict';

    it('createCarObject should be a function', function () {
      expect(createCarObject).to.be.a('function');

    });

    it('should return an object', function () {
      expect(typeof createCarObject()).to.equal('object');
    });

    it('should have property named car and value of Tesla', function () {
      var carObj = createCarObject();
      carObj.should.have.property('car', 'Tesla');
    });

    // Add more assertions here
    });

  })

  describe('Arrays', function(){
    it('createArray should be a function', function () {
      expect(createArray).to.be.a('function');

    });

    it('should return an array', function () {
      expect(typeof createArray()).to.equal('array');
    });

    it('should have property named car and value of Tesla', function () {
      var carObj = createArray();
      carObj.should.have.property('car', 'Tesla');
    });


  })
  
})


// describe('createCarObject()', function () {
//   'use strict';

//   it('createCarObject should be a function', function () {
//     expect(createCarObject).to.be.a('function');

//   });

//   it('should return an object', function () {
//     expect(typeof createCarObject()).to.equal('object');
//   });

//   it('should have property named car and value of Tesla', function () {
//     var carObj = createCarObject();
//     carObj.should.have.property('car', 'Tesla');
//   });

//   // Add more assertions here
// });


// describe('createCarObject()', function () {
//   'use strict';

//   it('createCarObject should be a function', function () {
//     expect(createCarObject).to.be.a('function');

//   });

//   it('should return an object', function () {
//     expect(typeof createCarObject()).to.equal('object');
//   });

//   it('should have property named car and value of Tesla', function () {
//     var carObj = createCarObject();
//     carObj.should.have.property('car', 'Tesla');
//   });

//   // Add more assertions here
// });

// describe('createCarObject()', function () {
//   'use strict';

//   it('createCarObject should be a function', function () {
//     expect(createCarObject).to.be.a('function');

//   });

//   it('should return an object', function () {
//     expect(typeof createCarObject()).to.equal('object');
//   });

//   it('should have property named car and value of Tesla', function () {
//     var carObj = createCarObject();
//     carObj.should.have.property('car', 'Tesla');
//   });

//   // Add more assertions here
// });