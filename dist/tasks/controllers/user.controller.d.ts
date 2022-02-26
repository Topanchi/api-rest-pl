import { UserService } from './../services/user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    findAll(): Promise<import("../entities/user.entity").User[]>;
    create(body: any): Promise<import("../entities/user.entity").User>;
}
