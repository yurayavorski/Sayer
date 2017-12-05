import { Comment } from './comment'
export class Task {
    name: string;
    comments: Comment[] = [];
    constructor (name) {
        this.name = name;
    }
}