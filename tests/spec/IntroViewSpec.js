define(['views/IntroView'], 
    function(IntroView) {
        describe("IntroView", function() {

            beforeEach(function() {
                this.introView = new IntroView();

                this.testData = {'head': 'head', 'chatter': 'chatter chatter chatter'};
            });

            afterEach(function() {
                this.introView.remove();
            });

           it("should exist", function() {
            expect(this.introView).toBeDefined();
           });

           it("should return itself from the render method", function() {
            expect(this.introView.render(this.testData)).toEqual(this.introView);
           });

           it("should create a div when rendered", function() {
            expect(this.introView.render(this.testData).el.tagName.toLowerCase()).toEqual("div");
           });

           it("should contain a h2 and a p tag and a next button", function() {
               expect(this.introView.render(this.testData).$("h2").length).toEqual(1);
               expect(this.introView.render(this.testData).$("p").length).toEqual(1);
               expect(this.introView.render(this.testData).$(".button").length).toEqual(1);
           });

           it("should start with a className of active", function() {
                expect(this.introView.render(this.testData).$el.hasClass('active')).toBe(true);
           });
        });

});