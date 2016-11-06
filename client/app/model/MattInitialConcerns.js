System.register(['./MattConcern'], function(exports_1) {
    var MattConcern_1;
    var MattInitialConcerns;
    return {
        setters:[
            function (MattConcern_1_1) {
                MattConcern_1 = MattConcern_1_1;
            }],
        execute: function() {
            exports_1("MattInitialConcerns", MattInitialConcerns = [
                {
                    id: 0,
                    parent: -1,
                    name: "Life",
                    description: "This represents your whole life, everything you are concerned with",
                    tasks: "what is most important today?",
                    photo: "photourl",
                    status: MattConcern_1.MattStatus.Green,
                    points: 1
                },
                {
                    id: 1,
                    parent: 0,
                    name: "A1-Mind",
                    description: "before anything, make sure your mind is in the right track",
                    tasks: "what",
                    photo: "photourl",
                    status: MattConcern_1.MattStatus.Green,
                    points: 1
                },
                {
                    id: 2,
                    parent: 0,
                    name: "A2-Body",
                    description: "This reprent your body",
                    tasks: "what",
                    photo: "photourl",
                    status: MattConcern_1.MattStatus.Green,
                    points: 1
                }
            ]);
        }
    }
});
//# sourceMappingURL=MattInitialConcerns.js.map