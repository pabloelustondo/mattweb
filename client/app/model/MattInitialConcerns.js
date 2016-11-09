System.register(['./MattConcern'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
                },
                {
                    id: 3,
                    parent: 0,
                    name: "A3-Family",
                    description: "This reprent your family",
                    tasks: "what",
                    photo: "photourl",
                    status: MattConcern_1.MattStatus.Green,
                    points: 1
                },
                {
                    id: 4,
                    parent: 0,
                    name: "A4-Look",
                    description: "This reprent your body",
                    tasks: "what",
                    photo: "photourl",
                    status: MattConcern_1.MattStatus.Green,
                    points: 1
                },
                {
                    id: 5,
                    parent: 0,
                    name: "B1-Things",
                    description: "This reprent paperworks, taxes,etc",
                    tasks: "what",
                    photo: "photourl",
                    status: MattConcern_1.MattStatus.Green,
                    points: 1
                },
                {
                    id: 6,
                    parent: 0,
                    name: "B2-Home",
                    description: "This reprent your home and home projects",
                    tasks: "what",
                    photo: "photourl",
                    status: MattConcern_1.MattStatus.Green,
                    points: 1
                },
                {
                    id: 7,
                    parent: 0,
                    name: "B3-Money",
                    description: "This reprent your money, accounts, costs, investments",
                    tasks: "what",
                    photo: "photourl",
                    status: MattConcern_1.MattStatus.Green,
                    points: 1
                },
                {
                    id: 8,
                    parent: 0,
                    name: "B4-InfoIT",
                    description: "This reprent your information",
                    tasks: "what",
                    photo: "photourl",
                    status: MattConcern_1.MattStatus.Green,
                    points: 1
                },
                {
                    id: 9,
                    parent: 0,
                    name: "B5-Nice",
                    description: "This reprent your nice things photos..",
                    tasks: "what",
                    photo: "photourl",
                    status: MattConcern_1.MattStatus.Green,
                    points: 1
                },
                {
                    id: 10,
                    parent: 0,
                    name: "C1-Work",
                    description: "This reprent your actual work.. what you do.",
                    tasks: "what",
                    photo: "photourl",
                    status: MattConcern_1.MattStatus.Green,
                    points: 1
                },
                {
                    id: 11,
                    parent: 0,
                    name: "C2-BePro",
                    description: "This reprent your career buildign, skills, etc.",
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