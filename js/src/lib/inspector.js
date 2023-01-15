'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.inspect = void 0;
var util_1 = __importDefault(require('util'));
function inspect(itemToInspect) {
  console.log(util_1.default.inspect(itemToInspect, false, Infinity, true));
}
exports.inspect = inspect;
