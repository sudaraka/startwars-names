var
  expect = require('chai').expect,
  starWars = require('./index'),

  isArrayOfStrings = function(array) {
    return array.every(function(item) {
      return 'string' === typeof item
    })
  }


describe('starwars-names', function() {
  describe('all', function() {
    it('should be an array of string', function() {
      expect(starWars.all).to.satisfy(isArrayOfStrings)
    })

    it('should contain Luke Skywalker', function() {
      expect(starWars.all).to.include('Luke Skywalker')
    })
  })

  describe('random', function() {
    it('should return a random item from startWars.all', function() {
      var randomItem = starWars.random()

      expect(starWars.all).to.include(randomItem)
    })
  })
})
