define(['app'], function(app) {


  describe("app", function() {
    it("should exist", function() {
      expect(app).toBeDefined();
    });

    it("should have an init method", function() {
        expect(typeof app.init).toEqual('function');
    });
  });

});


