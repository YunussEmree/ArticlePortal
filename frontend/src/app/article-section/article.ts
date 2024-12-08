export class Article{
    readTime: number;
    id: number;
    
    title: string;
    author: string;
    thumbnail: string;
    content: string;

    constructor(title: string, author: string, thumbnail: string, readTime: number, id: number, content: string){ 
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
        this.thumbnail = thumbnail;
        this.readTime = readTime;
    }
}