import {FacilitaRestController} from "@/src/controllers/base/FacilitaRestController";
import {FacilitaRestRequest} from "@/src/controllers/base/FacilitaRestRequest";
import {UserDto} from "@/src/dto/UserDto";
import {FacilitaRestResponse} from "@/src/controllers/base/FacilitaRestResponse";


export class UserController extends FacilitaRestController {
    response: FacilitaRestResponse
    constructor(request: FacilitaRestRequest) {
        super(request);
    }

    async listUsers(): Promise<FacilitaRestResponse> {
        const users: UserDto[] = [
            {
                "id": "user_1",
                "name": "user 1",
                "email": "user1@email.com",
                "telephone": "+5511123412345"
            },
            {
                "id": "user_2",
                "name": "user 2",
                "email": "user2@email.com",
                "telephone": "+5511123412345"
            },
            {
                "id": "user_3",
                "name": "user 3",
                "email": "user3@email.com",
                "telephone": "+5511123412345"
            }
        ]

        this.response.data = users;
        this.response.status = 200;
        return this.response
    }
}