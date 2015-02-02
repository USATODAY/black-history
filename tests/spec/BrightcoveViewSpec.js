define(['backbone', 'views/BrightcoveView'], 
    function(Backbone, BrightcoveView) {
        describe("BrightcoveView", function() {
            
            beforeEach(function() {
                this.brightcoveView = new BrightcoveView();

            })

           it("should exist", function() {
            expect(this.brightcoveView).toBeDefined();
           });

           it("should have a render method", function() {
            expect(typeof this.brightcoveView.render).toEqual("function");
           });

           it("should return itself from the render method", function() {
            expect(this.brightcoveView.render()).toEqual(this.brightcoveView);
           });

           it("should create a brightcove dom object when rendered", function() {
            expect(this.brightcoveView.render().$("object")).toBeDefined();
           });
           
        });

});