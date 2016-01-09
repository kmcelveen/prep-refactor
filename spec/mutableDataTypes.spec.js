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

    });

    describe('truckName()', function () {
      it('truckName should be a function', function(){
        expect(truckName).to.be.a('function');
      });

      it('should return an object', function() {
        expect(typeof truckName()).to.equal('object');
      });

      // it('something', function () {
      //   expect()
      // })

    });

    describe('addToObject()', function () {
      it('addToObject should be a function', function(){
        expect(addToObject).to.be.a('function');
      });

      it('should return an object', function() {
        expect(typeof addToObject()).to.equal('object');
      });

      // it('something', function () {
      //   expect()
      // })

    });

    describe('changeObject()', function () {
      it('changeObject should be a function', function(){
        expect(changeObject).to.be.a('function');
      });

      it('should return an object', function() {
        expect(typeof changeObject()).to.equal('object');
      });

      // it('something', function () {
      //   expect()
      // })

    });

    describe('example()', function () {
      it('example should be a function', function(){
        expect(example).to.be.a('function');
      });

      it('should return an object', function() {
        expect(typeof example()).to.equal('object');
      });

      // it('something', function () {
      //   expect()
      // })

    });
  })

  describe('Arrays', function(){

    describe('createArrayOfStrings()', function (){
      it('createArrayOfStrings should be a function', function () {
        expect(createArrayOfStrings).to.be.a('function');

      });

      it('should return an array', function () {
        expect(typeof createArrayOfStrings()).to.equal('array');
      });

      it('should have property named car and value of Tesla', function () {
        var carObj = createArrayOfStrings();
        carObj.should.have.property('car', 'Tesla');
      });

    })


  })
  
})

