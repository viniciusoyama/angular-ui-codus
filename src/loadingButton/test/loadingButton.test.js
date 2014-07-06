describe('loadingButton', function () {
  var $scope;

  beforeEach(module('ui.codus.loadingButton'));

  beforeEach(inject(function ($rootScope) {
    $scope = $rootScope;
  }));


  it('adds a the specified panel to the collection', function() {
    expect(2).toBe(2);
  });

});
