import { Address } from './address'
import { Company } from './company';

export class User{
    private id: number;
    private name: string;
    private username: string;
    private email: string;
    private address: Address;
    private phone: string;
    private website: string;
    private company: Company;

    public constructor (id:number, name:string, username: string, email:string, address:Address, phone:string, website:string, company:Company){
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }
    public getId():number{
        return this.id;
    }
    public setId(id:number):void{
        this.id = id;
    }

    public getName():string{
        return this.name;
    }
    public setName(name:string):void{
        this.name = name;
    }

    public getUserName():string{
        return this.username;
    }
    public setUserName(username:string):void{
        this.username = username;
    }

    public getEmail():string{
        return this.email;
    }
    public setEmail(email:string):void{
        this.email = email;
    }

    public getAddress():Address{
        return this.address;
    }
    public setAddress(address:Address):void{
        this.address = address;
    }

    public getPhone():string{
        return this.phone;
    }
    public setPhone(phone:string):void{
        this.phone = phone;
    }

    public getWebsite():string{
        return this.website;
    }
    public setWebsite(website:string):void{
        this.website = website;
    }

    public getCompany():Company{
        return this.company;
    }
    public setCompany(company:Company):void{
        this.company = company;
    }
}