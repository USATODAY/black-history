define(['dataManager'], 
    function(dataManager) {
        describe("dataManager", function() {

            beforeEach(function() {
                var testData = {
                    videos: [
                        {
                            'tags': 'one, two, three'
                        },
                        {
                            'tags': 'one, four, five'
                        },
                        {
                            'tags': 'four, five, six'
                        }]
                };

                spyOn(dataManager, "getData").and.returnValue(testData);
                dataManager.data = dataManager.getData();
                dataManager.organizeTags();
            })

            

            it("should exist", function() {
                expect(dataManager).toBeDefined();
            });

            it("should have a getData() method", function() {
                expect(typeof dataManager.getData).toBe('function');
            });

            it("should convert video tags from string to array", function() {
                expect(dataManager.data.tags.constructor === Array).toBe(true);
            });

            it("should have a duplicate-free array of tags", function() {
                expect(dataManager.data.tags.length).toEqual(6);
            });
        });
});