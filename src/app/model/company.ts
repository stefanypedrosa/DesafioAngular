export class Company{
    private name: string;
    private catchPhrase: string;
    private bs: string;

    public constructor(name: string, catchPhrase:string, bs: string){
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }

    public getName():string{
        return this.name;
    }
    public setName(name:string):void{
        this.name = name;
    }

    public getCatchPhrase():string{
        return this.catchPhrase;
    }
    public setCatchPhrase(catchPhrase:string):void{
        this.catchPhrase = catchPhrase;
    }

    public getBs():string{
        return this.bs;
    }
    public setBs(bs:string):void{
        this.bs = bs;
    }
}