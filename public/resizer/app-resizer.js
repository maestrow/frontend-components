(function(){
    
    function Resizable(grip, container) {
        grip.dragObject = this;
        dragMaster.makeDraggable(grip);

        var rememberHeight,
            startY;

        this.onDragStart = function(x, y) {
            rememberHeight = container.clientHeight;
            startY = y;
        }
         
        this.onDragMove = function(x, y) {
            container.style.height = rememberHeight + (y - startY) + 'px';
        }
         
        this.onDragSuccess = function(dropTarget) { }
         
        this.onDragFail = function() { };
         
        this.toString = function() {
            return grip.id;
        }
    };


    var dragMaster = (function() {
        var dragObject;
        var mouseDownAt;
        var currentDropTarget;

        function mouseDown(e) {
            if (e.which!=1) 
              return;
     
            mouseDownAt = { x: e.pageX, y: e.pageY, element: this };
            addDocumentEventHandlers();
            return false;
        };
     
     
        function mouseMove(e){
            if (mouseDownAt) {
                // Начать перенос
                var elem  = mouseDownAt.element;
                // текущий объект для переноса
                dragObject = elem.dragObject;
                 
                dragObject.onDragStart(mouseDownAt.x, mouseDownAt.y); // начали
                mouseDownAt = null // запомненное значение больше не нужно, сдвиг уже вычислен
            }
     
            dragObject.onDragMove(e.pageX, e.pageY);
            return false;
        };
         
         
        function mouseUp(){
            if (!dragObject) {
                mouseDownAt = null;
            } else {
                dragObject = null;
            }
     
            removeDocumentEventHandlers();
        };
     

        function addDocumentEventHandlers() {
            document.onmousemove = mouseMove;
            document.onmouseup = mouseUp;
            document.ondragstart = document.body.onselectstart = function() {return false};
        };
        
        function removeDocumentEventHandlers() {
            document.onmousemove = document.onmouseup = document.ondragstart = document.body.onselectstart = null;
        };
     
        return {
            makeDraggable: function(element) {
                element.onmousedown = mouseDown;
            }
        };
    }());


    angular.module('appResizer', [])
        .directive('appResizer', ['$document', function($document) {
            
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    var container = $document[0].getElementById(attrs.container);
                    new Resizable(element[0], container);
                }
            }
        }]);
})();