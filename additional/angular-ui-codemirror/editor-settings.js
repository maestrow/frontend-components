(function() {
	angular
	.module('app', ['ui.codemirror'])
	.controller('CodemirrorSettings', [ '$scope', function($scope) {
	    $scope.editorOptions = {
	        lineWrapping : true,
	        lineNumbers: true,
	        mode: 'gfm',
	    };
	}]);
})();