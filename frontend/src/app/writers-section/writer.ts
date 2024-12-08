export class Writer{
    id: number;
    username: string;
    about: string;
    photo: string;
    rating: string;
    constructor(id: number, username: string, about: string, photo: string, rating: string){
        this.id = id;
        this.username = username;
        this.about = about;
        this.photo = photo;
        this.rating = rating;
    }
}