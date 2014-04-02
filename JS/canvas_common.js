/// <reference path="./ThirdParty/jquery.d.ts" />
var canvasCommon;
(function (canvasCommon) {
    var canvasCommonClass = (function () {
        function canvasCommonClass() {
            console.log("Created Canvas Common Class");
        }
        canvasCommonClass.prototype.startAnimation = function (type, canvasName) {
            switch (type) {
                case 0:
                    this.rotateLine(canvasName, null, null, null, null, null, null);
            }
        };

        canvasCommonClass.prototype.rotateLine = function (canvasName, startPointX, startPointY, axisPointX, axisPointY, endPointX, endPointY) {
            var c = document.getElementById(canvasName);
            var ctx = c.getContext("2d");

            if (startPointX === null) {
                startPointX = 10;
            }
            if (startPointY === null) {
                startPointY = 10;
            }

            if (endPointX === null) {
                endPointX = 30;
            }
            if (endPointY === null) {
                endPointY = 30;
            }
            if (axisPointX === null) {
                axisPointX = startPointX;
            }
            if (axisPointY === null) {
                axisPointY = startPointY;
            }

            ctx.beginPath();
            ctx.moveTo(startPointX, startPointY);
            ctx.lineTo(endPointX, endPointY);
            ctx.stroke();

            ctx.clearRect(0, 0, c.width, c.height);

            ctx.beginPath();
            ctx.moveTo(50, 50);
            ctx.lineTo(90, 90);
            ctx.stroke();
        };
        return canvasCommonClass;
    })();
    canvasCommon.canvasCommonClass = canvasCommonClass;
})(canvasCommon || (canvasCommon = {}));
//# sourceMappingURL=canvas_common.js.map
