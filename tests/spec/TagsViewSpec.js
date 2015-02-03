define(['views/TagsView', 'collections/TagCollection'], 
    function(TagsView, TagCollection) {
        describe("TagsView", function() {

            beforeEach(function() {
                this.testData = ['tag1', 'tag2', 'tag3', 'tag4'];
                this.tagsView = new TagsView({collection: new TagCollection(this.testData)});

                
            });

            afterEach(function() {
                this.tagsView.remove();
            });

           it("should exist", function() {
            expect(this.tagsView).toBeDefined();
           });

           it("should return itself from the render method", function() {
            expect(this.tagsView.render()).toEqual(this.tagsView);
           });

           it("should create a div when rendered", function() {
            expect(this.tagsView.render().el.tagName.toLowerCase()).toEqual("div");
           });

           it("should contain a tag div for each tag", function() {
               expect(this.tagsView.render().$(".iapp-tag-item").length).toEqual(4);
           });

           it("should start with a className of upcoming", function() {
                expect(this.tagsView.render().$el.hasClass('upcoming')).toBe(true);
           });
        });

});