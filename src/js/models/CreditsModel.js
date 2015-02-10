define(
    [
        'jquery',
        'underscore',
        'backbone',
        'dataManager'
    ],
    function(jQuery, _, Backbone, dataManager){

        return Backbone.Model.extend( {
            defaults: {
                'credits_intro': '',
                'project_credits': ''
            },

            initialize: function() {
                this.set({
                    'credits_intro': dataManager.data.credits_intro,
                    'project_credits': dataManager.data.project_credits
                });
            }
    });

});