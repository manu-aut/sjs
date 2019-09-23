import { Task , PerformsTasks} from "serenity-js/protractor";
import { protractor } from "protractor/built/ptor";

export class Navegar implements Task{

    private url: string;

    constructor(url:string){
        this.url=url;
    }

    performAs(actor: PerformsTasks): PromiseLike<void>{
        return protractor.browser.get(this.url);
    }

    public static a(url:string): Navegar{
        return new Navegar(url);
    }
}