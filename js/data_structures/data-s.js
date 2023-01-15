"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inspector_js_1 = require("../src/lib/inspector.js");
var Node = /** @class */ (function () {
    function Node(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
    Object.defineProperty(Node.prototype, "left", {
        set: function (val) {
            this.left = val;
        },
        enumerable: false,
        configurable: true
    });
    return Node;
}());
var a = new Node('a');
(0, inspector_js_1.inspect)();
