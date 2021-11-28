import {ENVIRONMENT} from "./globals";
import {ANOTHER_VARIABLE} from "./globals";

export class Utils {
    public static isProduction(): boolean {
        if (ANOTHER_VARIABLE === 'some value') {
            const jj = 1;
        }
        return ENVIRONMENT === 'production';
    }
}