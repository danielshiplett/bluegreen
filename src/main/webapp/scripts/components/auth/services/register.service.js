'use strict';

angular.module('bluegreenApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


