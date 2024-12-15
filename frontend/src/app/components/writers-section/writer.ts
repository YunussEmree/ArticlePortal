export class Writer{
    id: number;
    username: string;
    about: string;
    photo: string;
    rating: string;
    bio: string;
    
    constructor(id: number, username: string, about: string, photo: string, rating: string, bio:string){
        this.id = id;
        this.username = username;
        this.about = about;
        this.photo = photo;
        this.rating = rating;
        this.bio = bio;
    }
}