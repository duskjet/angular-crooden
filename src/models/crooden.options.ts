import { DetailsPageMiddleWare } from "./middleware/details.middleware";
import { DetailsOptions } from "./options";

class CroodenExtensions {
    useDetailsPage: (options: DetailsOptions) => CroodenService;
    usePaging: Function;
}

export class CroodenService extends CroodenExtensions {
    public urlForAll: string

    public pipe: Array<() => CroodenService>
}

CroodenService.prototype.useDetailsPage = (options: DetailsOptions) => {

    let middleware = new DetailsPageMiddleWare(options);

    this.uses.details = true;

    this.pipe.push(middleware.pipe);

    return this;
}

CroodenService.prototype.usePaging = (options: any) => {

    let middleware = new DetailsPageMiddleWare(options);

    this.uses.paging = true;
    
    this.pipe.push(middleware.pipe);
}


