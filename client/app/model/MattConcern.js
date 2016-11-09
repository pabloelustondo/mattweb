System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MattStatus, MattConcern;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by pabloelustondo on 2016-11-03.
             */
            (function (MattStatus) {
                MattStatus[MattStatus["Blue"] = 0] = "Blue";
                MattStatus[MattStatus["Green"] = 1] = "Green";
                MattStatus[MattStatus["White"] = 2] = "White";
                MattStatus[MattStatus["Yellow"] = 3] = "Yellow";
                MattStatus[MattStatus["Red"] = 4] = "Red";
            })(MattStatus || (MattStatus = {}));
            exports_1("MattStatus", MattStatus);
            MattConcern = (function () {
                function MattConcern() {
                }
                return MattConcern;
            }());
            exports_1("MattConcern", MattConcern);
        }
    }
});
//# sourceMappingURL=MattConcern.js.map