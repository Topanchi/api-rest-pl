import { PhotosService } from './../services/photos.service';
export declare class PhotosController {
    private photosService;
    constructor(photosService: PhotosService);
    addPhoto(body: any): Promise<import("../entities/photo.entity").Photo>;
}
