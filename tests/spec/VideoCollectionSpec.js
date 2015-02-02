define(['collections/VideoCollection'], 
    function(VideoCollection) {
        describe("VideoCollection", function() {

            it("should exist", function() {
                var videoCollection = new VideoCollection();

                expect(videoCollection).toBeDefined();
            });

    });
});