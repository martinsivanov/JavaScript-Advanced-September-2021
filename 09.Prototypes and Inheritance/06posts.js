function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            let result = [`Post: ${this.title}`, `Content: ${this.content}`];
            return result.join('\n');
        }
    }
    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this._comments = [];
        }
        addComment(comment) {
            this._comments.push(comment);
        }
        toString() {
            let result = [`Post: ${this.title}`, `Content: ${this.content}`,
            `Rating: ${this.likes - this.dislikes}`];
            if (this._comments.length > 0) {
                result.push(`Comments:`)
                this._comments.forEach(comment => result.push(` * ${comment}`));
            }

            return result.join('\n');
        }
    }
    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this._views = views = views < 0 ? 0 : views;

        }
        view() {
            this._views = this._views + 1;
            let result = { 'views': this._views };
            return result;
        }
        toString() {
            let result = [`Post: ${this.title}`, `Content: ${this.content}`,
            `Views: ${this._views}`];

            return result.join('\n');
        }
    }
    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}
const classes = solve();

let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post 
// Content: Content 

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle 
// Content: TestContent 
// Rating: -5 
// Comments: 
//  * Good post 
//  * Very good post 
//  * Wow! 

let bp = new classes.BlogPost('test', 'contenttest', 2);
console.log(bp.view());
console.log(bp.view());
console.log(bp.view());
console.log(bp.toString());