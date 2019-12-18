import { User } from './user'

export class Tasks{
    private userId: number;
    private id:number;
    private title:string;
    private completed: boolean;

    public constructor(userId:number, id:number, title:string, completed:boolean){
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.completed = completed;
    }

    public getUserId():number{
        return this.userId;
    }
    public setUserId(userId:number):void{
        this.userId = userId;
    }

    public getId():number{
        return this.id;
    }
    public setId(id:number):void{
        this.id = id;
    }

    public getTitle():string{
        return this.title;
    }
    public setTitle(title:string):void{
        this.title = title;
    }

    public getCompleted():boolean{
        return this.completed;
    }
    public setCompleted(completed:boolean):void{
        this.completed = completed;
    }
}