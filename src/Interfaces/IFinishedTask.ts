import IProject from "./IProject";

export default interface IFinishedTask {
    timeSeconds: number,
    taskTitle: string,
    project: IProject,
}