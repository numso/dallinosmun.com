/*global console, require */

require.config({
    paths: {
        'jquery': 'lib/jquery',
        'underscore': 'lib/underscore',
        'backbone': 'lib/backbone',
        'tmpl': 'lib/tmpl'
    },

    shim: {
        'jquery': {
            deps: [],
            exports: '$'
        },

        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

require([
    'jquery'
], function (
    $
) {
    $(".item").click(function (e) {
        $(".overlay").show();
    });

    $(".proj-img").click(function (e) {
        $(".overlay").show();
    });

    $(".overlay").click(function (e) {
        $(".overlay").hide();
    });

});
