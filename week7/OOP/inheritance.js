var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Schrijftool = /** @class */ (function () {
    function Schrijftool(isLeeg) {
        this.isLeeg = isLeeg;
    }
    Schrijftool.prototype.schrijf = function () {
        console.log("We schrijven met de schrijftool.");
    };
    Schrijftool.prototype.setIsLeeg = function (isLeeg) {
        this.isLeeg = isLeeg;
    };
    return Schrijftool;
}());
var Pen = /** @class */ (function (_super) {
    __extends(Pen, _super);
    function Pen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pen.prototype.schrijf = function () {
        if (this.isLeeg) {
            console.log("We kunnen niet schrijven met de pen.");
            return;
        }
        console.log("We schrijven met de pen.");
    };
    return Pen;
}(Schrijftool));
var LekkendeVulpen = /** @class */ (function (_super) {
    __extends(LekkendeVulpen, _super);
    function LekkendeVulpen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LekkendeVulpen.prototype.schrijf = function () {
        _super.prototype.schrijf.call(this);
        _super.prototype.setIsLeeg.call(this, true);
    };
    return LekkendeVulpen;
}(Pen));
var Balpen = /** @class */ (function (_super) {
    __extends(Balpen, _super);
    function Balpen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Balpen;
}(Schrijftool));
var lievelingspen = new Pen(true);
// lievelingspen.isLeeg = true;
lievelingspen.schrijf();
var balpen1 = new Balpen(false);
balpen1.schrijf();
var lekkendeVulpen1 = new LekkendeVulpen(false);
lekkendeVulpen1.schrijf();
lekkendeVulpen1.schrijf();
