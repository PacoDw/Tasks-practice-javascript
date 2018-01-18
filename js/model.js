"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
    function Task() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Name of the task";
        var description = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Description';

        _classCallCheck(this, Task);

        this.name = name;
        this.description = description;
        this.isCompleted = false;
    }

    _createClass(Task, [{
        key: "Completed",
        value: function Completed() {
            if (this.isCompleted) this.isCompleted = false;else this.isCompleted = true;
        }
    }, {
        key: "Edit",
        value: function Edit(name, description) {
            this.name = name;
            this.description = description;
        }
    }]);

    return Task;
}();

var List_tasks = function () {
    function List_tasks() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Name of the list";

        _classCallCheck(this, List_tasks);

        this.name = name;
        this.array_task = new Array();
    }

    _createClass(List_tasks, [{
        key: "addTask",
        value: function addTask(newTask) {
            this.array_task.push(newTask);
        }
    }, {
        key: "removeTask",
        value: function removeTask(indice) {
            this.array_task.splice(indice, 1);
        }
    }, {
        key: "editNameList",
        value: function editNameList(name) {
            this.name = name;
        }
    }]);

    return List_tasks;
}();