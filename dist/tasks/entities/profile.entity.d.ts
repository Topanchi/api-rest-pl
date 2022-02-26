import { User } from './user.entity';
import { Photo } from './photo.entity';
export declare class Profile {
    id: number;
    name: string;
    lastName: string;
    user: User;
    photos: Photo[];
}
