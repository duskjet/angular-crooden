import { DetailsOptions } from "../options";

export class DetailsPageMiddleWare implements CroodenMiddleware<DetailsOptions> {

    constructor(public options: DetailsOptions) { }

    pipe = () => {
        console.log('ti pidor')
    }
}

interface CroodenMiddleware<TOptions> {
    options: TOptions;
    pipe: Function;
}