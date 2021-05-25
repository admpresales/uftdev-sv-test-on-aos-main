import * as sv from "sv-vsl";

import {GetAccountConfigurationRequestModel} from "./GetAccountConfigurationRequestModel.js";
import {AccountLogoutRequestModel} from "./AccountLogoutRequestModel.js";
import {AccountLoginRequestModel} from "./AccountLoginRequestModel.js";

export class AOS_AccountServiceApplicationModel extends sv.ApplicationModel {

    constructor(smGetAccountConfigurationRequestModel: GetAccountConfigurationRequestModel, smAccountLogoutRequestModel: AccountLogoutRequestModel, smAccountLoginRequestModel: AccountLoginRequestModel) {
        super();
        this.smGetAccountConfigurationRequestModel = smGetAccountConfigurationRequestModel;
        this.smAccountLogoutRequestModel = smAccountLogoutRequestModel;
        this.smAccountLoginRequestModel = smAccountLoginRequestModel;
    }

    @sv.applicationScenario
    AOS_AccountService() {
        sv.forkScenario(() => this.smGetAccountConfigurationRequestModel.AOS_AccountService());
        sv.forkScenario(() => this.smAccountLoginRequestModel.AOS_AccountService())
            .withDelay(24825);
        sv.forkScenario(() => this.smAccountLogoutRequestModel.AOS_AccountService())
            .withDelay(29009);
    }

}