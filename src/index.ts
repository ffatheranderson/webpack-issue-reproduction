import {ENVIRONMENT}  from "./globals";
import {ANOTHER_VARIABLE} from "./globals";
 export class Utils {
    public env: string; 
    public jj: any;
    constructor() {
        this.env = ENVIRONMENT; //this is undefined
        this.env = `${process.env.ENVIRONMENT}` //read a value from environment 
      };
    public static isProduction(): boolean { 
        if (ANOTHER_VARIABLE === 'some value') {
            const jj = 1;
        }

        return ENVIRONMENT === 'production';
    }
}

const utils = new Utils()
console.log(utils.env) 
