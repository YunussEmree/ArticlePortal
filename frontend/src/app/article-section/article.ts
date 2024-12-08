export class Article{
    content: string;
    author: string;
    thumbnail: string;
    readTime: string;
    id: number;

    constructor(content: string, author: string, thumbnail: string, readTime: string, id: number){ 
        this.id = id;
        this.content = content;
        this.author = author;
        this.thumbnail = thumbnail;
        this.readTime = readTime;
    }
}