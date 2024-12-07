export class Article{
    content: string;
    author: string;
    thumbnail: string;
    readTime: string;

    constructor(content: string, author: string, thumbnail: string, readTime: string) {
        this.content = content;
        this.author = author;
        this.thumbnail = thumbnail;
        this.readTime = readTime;
    }
}