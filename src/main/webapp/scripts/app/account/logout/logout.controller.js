'use strict';

angular.module('bluegreenApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
