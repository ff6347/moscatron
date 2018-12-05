"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var ReactDOM = __importStar(require("react-dom"));
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { count: 0 };
        return _this;
    }
    App.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("h2", null, this.props.greeting),
            React.createElement("button", { onClick: function () { return _this.setState({ count: _this.state.count + 1 }); } },
                "This button has been clicked ",
                this.state.count,
                " times.")));
    };
    return App;
}(React.Component));
// foo
ReactDOM.render(React.createElement(App, { greeting: "Hello, crude React world!" }), document.getElementById("main"));
//# sourceMappingURL=App.js.map