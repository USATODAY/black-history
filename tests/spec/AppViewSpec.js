define(['views/AppView'], 
    function(AppView) {
        describe("AppView", function() {

            beforeEach(function() {
                this.appView = new AppView();
            })

           it("should exist", function() {
            expect(this.appView).toBeDefined();
           });

           it("should return itself from the render method", function() {
            expect(this.appView.render()).toEqual(this.appView);
           });

           it("should create a div when rendered", function() {
            expect(this.appView.render().el.tagName.toLowerCase()).toEqual("div");
           });
        });

});