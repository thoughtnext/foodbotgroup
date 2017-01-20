(function() {
  var app = angular.module('app');
  app.factory('AppManager', function($q, $http, $log) {
    var baseUrl = 'https://53fc0fff.ngrok.io'
    return {
      checkGroupName: function(group_name) {
        var deferred = $q.defer();
        $http.get(baseUrl + "/groups/check/"+group_name)
          .then(_success, _error);

        function _success(data) {
          console.log(data.data)
          // eventActions.addEvent(eventModel(data.data));
          deferred.resolve(data.data);
        }

        function _error(err) {
          deferred.reject(err);
        }

        return deferred.promise;
      },
      checkGroupNamePassword: function(group_name, password) {
        var deferred = $q.defer();
        $http.get(baseUrl + "/groups/check/"+group_name+"/"+password)
          .then(_success, _error);

        function _success(data) {
          console.log(data.data)
          // eventActions.addEvent(eventModel(data.data));
          deferred.resolve(data.data);
        }

        function _error(err) {
          deferred.reject(err);
        }

        return deferred.promise;
      }, 
      createGroup: function(group) {
        var deferred = $q.defer();
        console.log('hi')
        var req = {
			method: 'POST',
			url: baseUrl + '/new/group/',
			headers: {
				'Content-Type': 'application/json'
			},
			data: group
		}
       
        $http(req).then(_success, _error);

        function _success(data) {
          deferred.resolve(data.data);
        }

        function _error(err) {
          deferred.reject(err);
        }

        return deferred.promise;
      },
      joinGroup: function(group) {
        var deferred = $q.defer();
        console.log('hi')
        var req = {
			method: 'POST',
			url: baseUrl + '/join/group',
			headers: {
				'Content-Type': 'application/json'
			},
			data: group
		}
       
        $http(req).then(_success, _error);

        function _success(data) {
          deferred.resolve(data.data);
        }

        function _error(err) {
          deferred.reject(err);
        }

        return deferred.promise;
      }
    }
  });
})();
