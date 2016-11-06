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
    }

];