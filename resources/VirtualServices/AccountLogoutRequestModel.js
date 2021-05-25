import * as sv from "sv-vsl";

import {AccountLogoutRequestInterface} from "./AccountLogoutRequestInterface.js";

export class AccountLogoutRequestModel extends sv.ServiceModel {

    constructor(service: AccountLogoutRequestInterface) {
        super(service);
        this.service = service;
    }

    @sv.scenario
    AOS_AccountService() {
        const text = sv.svVar("237715057");
        const httpHeaders0 = sv.svVar({"Origin":"http://nimbusserver.aos.com:8000","Access-Control-Request-Method":"POST","Accept":"*/*","Access-Control-Request-Headers":"content-type,soapaction","User-Agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36","Referer":"http://nimbusserver.aos.com:8000/","Accept-Encoding":"gzip, deflate","Accept-Language":"en-US,en;q=0.9","Proxy-Connection":"keep-alive"});
        const httpHeaders1 = sv.svVar({"Access-Control-Request-Method":"POST, GET, OPTIONS, DELETE","Access-Control-Allow-Methods":"POST, GET, OPTIONS, DELETE","Access-Control-Max-Age":"3600","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Key, soapaction","Expires":"0","Cache-control":"no-store","Access-Control-Allow-Origin":"*","Date":"Mon, 23 Mar 2020 18:53:49 GMT"});
        const httpHeaders2 = sv.svVar({"Origin":"http://nimbusserver.aos.com:8000","SOAPAction":"com.advantage.online.store.accountserviceAccountLogoutRequest","Accept":"application/xml, text/xml, */*; q=0.01","User-Agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36","Referer":"http://nimbusserver.aos.com:8000/","Accept-Encoding":"gzip, deflate","Accept-Language":"en-US,en;q=0.9","Proxy-Connection":"keep-alive","Content-Type":"text/xml; charset=UTF-8"});
        const httpHeaders3 = sv.svVar({"Access-Control-Request-Method":"POST, GET, OPTIONS, DELETE","Access-Control-Allow-Methods":"POST, GET, OPTIONS, DELETE","Access-Control-Max-Age":"3600","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Key, soapaction","Expires":"0","Cache-control":"no-store","Access-Control-Allow-Origin":"*","Accept":"text/xml, text/html, image/gif, image/jpeg, *; q=.2, */*; q=.2","SOAPAction":"\"\"","Content-Type":"text/xml;charset=utf-8","Date":"Mon, 23 Mar 2020 18:53:49 GMT"});
        this.service.OPTIONS("")
            .withRequest()
            .withHeaders(httpHeaders0)
            .withResponse("T0s=", sv.Binary)
            .withHeaders(httpHeaders1)
            .withStatusCode(200)
            .withDelay(7);
        this.service.POST("")
            .withRequest(
                <ns0:Envelope xmlns:ns0="http://schemas.xmlsoap.org/soap/envelope/">
                    <ns0:Body>
                      <ns1:AccountLogoutRequest xmlns:ns1="com.advantage.online.store.accountservice">
                        <ns1:loginUser>{text}</ns1:loginUser>
                        <ns1:base64Token>Basic RGVtb1VzZXI6RGVtb1VzZXIxMjM=</ns1:base64Token>
                      </ns1:AccountLogoutRequest>
                    </ns0:Body>
                  </ns0:Envelope>
            , sv.XML)
            .withHeaders(httpHeaders2)
            .withDelay(7)
            .withResponse(
                <ns0:Envelope xmlns:ns0="http://schemas.xmlsoap.org/soap/envelope/">
                    <ns0:Header/>
                    <ns0:Body>
                      <ns1:AccountLogoutResponse xmlns:ns1="com.advantage.online.store.accountservice">
                        <ns1:StatusMessage>
                          <ns1:success>true</ns1:success>
                          <ns1:userId>{text}</ns1:userId>
                          <ns1:reason>Logout Successful</ns1:reason>
                        </ns1:StatusMessage>
                      </ns1:AccountLogoutResponse>
                    </ns0:Body>
                  </ns0:Envelope>
            , sv.XML)
            .withHeaders(httpHeaders3)
            .withStatusCode(200)
            .withDelay(81);
    }

}