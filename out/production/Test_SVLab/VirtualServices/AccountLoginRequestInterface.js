import * as sv from "sv-vsl";


export class AccountLoginRequestInterface extends sv.RestServiceInterface {

    constructor() {
        super();
        this.importExternal("./AccountLoginRequestInterfaceSwagger.json");
    }

}