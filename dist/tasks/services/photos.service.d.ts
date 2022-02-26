import { Repository } from 'typeorm';
import { Photo } from './../entities/photo.entity';
import { Profile } from './../entities/profile.entity';
export declare class PhotosService {
    private photoRepo;
    private profileRepo;
    constructor(photoRepo: Repository<Photo>, profileRepo: Repository<Profile>);
    addPhoto(data: any): Promise<Photo>;
}
