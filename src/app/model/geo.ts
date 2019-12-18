export class Geo{
    private lat: string;
    private lng: string;

    public constructor(lat:string, lng:string){
        this.lat = lat;
        this.lng = lng;
    }

    public getLat():string{
        return this.lat;
    }
    public setLat(lat:string):void{
        this.lat = lat;
    }

    public getLng():string{
        return this.lng;
    }
    public setLng(lng:string):void{
        this.lng = lng;
    }
}