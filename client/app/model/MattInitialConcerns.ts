import {MattConcern, MattStatus} from './MattConcern';
export var MattInitialConcerns: MattConcern[] = [

    {
        id: 0,   //identifies the class
        parent: -1,
        name: "Life",
        description: "This represents your whole life, everything you are concerned with",
        tasks: "what is most important today?",
        photo: "photourl",
        status: MattStatus.Green,
        points: 1
    },
    {
        id: 1,   //identifies the class
        parent: 0,
        name: "A1-Mind",
        description: "before anything, make sure your mind is in the right track",
        tasks: "what",
        photo: "photourl",
        status: MattStatus.Green,
        points: 1
    },
    {
        id: 2,   //identifies the class
        parent: 0,
        name: "A2-Body",
        description: "This reprent your body",
        tasks: "what",
        photo: "photourl",
        status: MattStatus.Green,
        points: 1
    },
    {
        id: 3,   //identifies the class
        parent: 0,
        name: "A3-Family",
        description: "This reprent your family",
        tasks: "what",
        photo: "photourl",
        status: MattStatus.Green,
        points: 1
    },
    {
        id: 4,   //identifies the class
        parent: 0,
        name: "A4-Look",
        description: "This reprent your body",
        tasks: "what",
        photo: "photourl",
        status: MattStatus.Green,
        points: 1
    },
    {
        id: 5,   //identifies the class
        parent: 0,
        name: "B1-Things",
        description: "This reprent paperworks, taxes,etc",
        tasks: "what",
        photo: "photourl",
        status: MattStatus.Green,
        points: 1
    },
    {
        id: 6,   //identifies the class
        parent: 0,
        name: "B2-Home",
        description: "This reprent your home and home projects",
        tasks: "what",
        photo: "photourl",
        status: MattStatus.Green,
        points: 1
    },
    {
        id: 7,   //identifies the class
        parent: 0,
        name: "B3-Money",
        description: "This reprent your money, accounts, costs, investments",
        tasks: "what",
        photo: "photourl",
        status: MattStatus.Green,
        points: 1
    },
    {
        id: 8,   //identifies the class
        parent: 0,
        name: "B4-InfoIT",
        description: "This reprent your information",
        tasks: "what",
        photo: "photourl",
        status: MattStatus.Green,
        points: 1
    },
    {
        id: 9,   //identifies the class
        parent: 0,
        name: "B5-Nice",
        description: "This reprent your nice things photos..",
        tasks: "what",
        photo: "photourl",
        status: MattStatus.Green,
        points: 1
    },
    {
        id: 10,   //identifies the class
        parent: 0,
        name: "C1-Work",
        description: "This reprent your actual work.. what you do.",
        tasks: "what",
        photo: "photourl",
        status: MattStatus.Green,
        points: 1
    },
    {
        id: 11,   //identifies the class
        parent: 0,
        name: "C2-BePro",
        description: "This reprent your career buildign, skills, etc.",
        tasks: "what",
        photo: "photourl",
        status: MattStatus.Green,
        points: 1
    }

];