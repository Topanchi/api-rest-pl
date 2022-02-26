import { Repository } from 'typeorm';
import { User } from './../entities/user.entity';
import { Profile } from './../entities/profile.entity';
export declare class UserService {
    private usersRepo;
    private profilesRepo;
    constructor(usersRepo: Repository<User>, profilesRepo: Repository<Profile>);
    findAll(): Promise<User[]>;
    create(body: any): Promise<User>;
}
