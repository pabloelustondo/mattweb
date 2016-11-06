/**
 * Created by pabloelustondo on 2016-11-03.
 */
export enum MattStatus {
    Blue,
    Green,
    White,
    Yellow,
    Red
}

export class MattConcern {
    id: Number   //identifies the class
    parent: Number
    name: String
    description: String
    tasks: String
    photo: String
    status: MattStatus
    points: Number
}


