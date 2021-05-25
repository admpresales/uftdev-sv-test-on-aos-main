import * as sv from "sv-vsl";


export class AccountLogoutRequestInterface extends sv.RestServiceInterface {

    constructor() {
        super();
        this.importExternal("./AccountLogoutRequestInterfaceSwagger.json");
    }

}