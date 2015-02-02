define(['models/VideoModel'], 
    function(VideoModel) {
        describe("VideoModel", function() {

            beforeEach(function() {
                var testData = {
                    'brightcoveID': '123456789',
                    'interviewee': 'First Last',
                    'isActive': false,
                    'videoDescription': 'This is a description',
                    'tags': "Tag1, Tag2, Tag3, Tag4",
                    'shareLanguage': 'Some Share',
                    'stillImage': 'img/yes.jpg'
                };
                this.videoModel = new VideoModel(testData);
            })

           it("should exist", function() {
              expect(this.videoModel).toBeDefined();
           });

           it("should convert a string to an array of tags", function() {
                expect(this.videoModel.get('tags').constructor === Array).toBe(true);
           });

           
        });

});