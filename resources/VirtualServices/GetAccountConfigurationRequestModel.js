import * as sv from "sv-vsl";

import {GetAccountConfigurationRequestInterface} from "./GetAccountConfigurationRequestInterface.js";

export class GetAccountConfigurationRequestModel extends sv.ServiceModel {

    constructor(service: GetAccountConfigurationRequestInterface) {
        super(service);
        this.service = service;
    }

    @sv.scenario
    AOS_AccountService() {
        const httpHeaders0 = sv.svVar({"Origin":"http://nimbusserver.aos.com:8000","Access-Control-Request-Method":"POST","Accept":"*/*","Access-Control-Request-Headers":"content-type,soapaction","User-Agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36","Referer":"http://nimbusserver.aos.com:8000/","Accept-Encoding":"gzip, deflate","Accept-Language":"en-US,en;q=0.9","Proxy-Connection":"keep-alive"});
        const httpHeaders1 = sv.svVar({"Access-Control-Request-Method":"POST, GET, OPTIONS, DELETE","Access-Control-Allow-Methods":"POST, GET, OPTIONS, DELETE","Access-Control-Max-Age":"3600","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Key, soapaction","Expires":"0","Cache-control":"no-store","Access-Control-Allow-Origin":"*","Date":"Mon, 23 Mar 2020 18:53:26 GMT"});
        const httpHeaders2 = sv.svVar({"Origin":"http://nimbusserver.aos.com:8000","SOAPAction":"com.advantage.online.store.accountserviceGetAccountConfigurationRequest","Accept":"application/xml, text/xml, */*; q=0.01","User-Agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36","Referer":"http://nimbusserver.aos.com:8000/","Accept-Encoding":"gzip, deflate","Accept-Language":"en-US,en;q=0.9","Proxy-Connection":"keep-alive","Content-Type":"text/xml; charset=UTF-8"});
        const httpHeaders3 = sv.svVar({"Access-Control-Request-Method":"POST, GET, OPTIONS, DELETE","Access-Control-Allow-Methods":"POST, GET, OPTIONS, DELETE","Access-Control-Max-Age":"3600","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Key, soapaction","Expires":"0","Cache-control":"no-store","Access-Control-Allow-Origin":"*","Accept":"text/xml, text/html, image/gif, image/jpeg, *; q=.2, */*; q=.2","SOAPAction":"\"\"","Content-Type":"text/xml;charset=utf-8","Date":"Mon, 23 Mar 2020 18:53:26 GMT"});
        this.service.OPTIONS("")
            .withRequest()
            .withHeaders(httpHeaders0)
            .withResponse("T0s=", sv.Binary)
            .withHeaders(httpHeaders1)
            .withStatusCode(200)
            .withDelay(6475);
        this.service.POST("")
            .withRequest(
                <ns0:Envelope xmlns:ns0="http://schemas.xmlsoap.org/soap/envelope/">
                    <ns0:Body>
                      <ns1:GetAccountConfigurationRequest xmlns:ns1="com.advantage.online.store.accountservice"/>
                    </ns0:Body>
                  </ns0:Envelope>
            , sv.XML)
            .withHeaders(httpHeaders2)
            .withDelay(25)
            .withResponse(
                <ns0:Envelope xmlns:ns0="http://schemas.xmlsoap.org/soap/envelope/">
                    <ns0:Header/>
                    <ns0:Body>
                      <ns1:GetAccountConfigurationResponse xmlns:ns1="com.advantage.online.store.accountservice">
                        <ns1:numberOfFailedLoginAttemptsBeforeBlocking>3</ns1:numberOfFailedLoginAttemptsBeforeBlocking>
                        <ns1:loginBlockingIntervalInSeconds>300</ns1:loginBlockingIntervalInSeconds>
                        <ns1:productInStockDefaultValue>10</ns1:productInStockDefaultValue>
                        <ns1:userSecondWsdl>false</ns1:userSecondWsdl>
                        <ns1:userLoginTimeout>60</ns1:userLoginTimeout>
                        <ns1:allowUserConfiguration>true</ns1:allowUserConfiguration>
                        <ns1:productionHostIp>http://34.228.54.91:8081</ns1:productionHostIp>
                        <ns1:productionHostName>http://advantageonlineshopping.com</ns1:productionHostName>
                      </ns1:GetAccountConfigurationResponse>
                    </ns0:Body>
                  </ns0:Envelope>
            , sv.XML)
            .withHeaders(httpHeaders3)
            .withStatusCode(200)
            .withDelay(606);
    }

}