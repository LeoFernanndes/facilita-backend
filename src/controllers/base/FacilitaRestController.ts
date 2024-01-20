import {FacilitaRestResponse} from "@/src/controllers/base/FacilitaRestResponse";
import {FacilitaRestRequest} from "@/src/controllers/base/FacilitaRestRequest";

export abstract class FacilitaRestController {
    protected request: FacilitaRestRequest;
    protected response: FacilitaRestResponse;


    protected constructor(request: FacilitaRestRequest) {
        this.request = request;
        this.response = new FacilitaRestResponse();
    }


}