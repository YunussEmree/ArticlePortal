export class Writer{
    id: number;
    username: string;
    about: string;
    photo: string;
    rating: string;
    bio: string;
    awards: string;
    articles: string;
    projects: string;
    
    constructor(id: number, username: string, about: string, photo: string, rating: string, bio:string, awards: string, articles: string, projects: string){
        this.id = id;
        this.username = username;
        this.about = about;
        this.photo = photo;
        this.rating = rating;
        this.bio = bio;
        this.awards = awards;
        this.articles = articles;
        this.projects = projects;
    }
}