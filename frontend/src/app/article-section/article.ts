export class Article{
    title: string;
    author: string;
    thumbnail: string;
    readTime: string;
    id: number;
    content: string;

    constructor(title: string, author: string, thumbnail: string, readTime: string, id: number, content: string){ 
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
        this.thumbnail = thumbnail;
        this.readTime = readTime;
    }
}