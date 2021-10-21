class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }
    addArticle(articleModel, articleName, quantity) {
        let arr = Object.keys(this.possibleArticles)
        articleModel = articleModel.toLowerCase();
        if (!arr.includes(articleModel)) {
            throw Error('This article model is not included in this gallery!');
        }
        let article = this.listOfArticles.find(x => x.articleModel == articleModel && x.articleName == articleName);
        if (article != undefined) {
            article.quantity += quantity;
        } else {
            this.listOfArticles.push({ articleModel, articleName, quantity });
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }
    inviteGuest(guestName, personality) {
        if (this.guests.some(x => x.guestName == guestName)) {
            throw Error(`${guestName} has already been invited.`);
        }

        let guest = {
            guestName,
            points: 0,
            purchaseArticle: 0
        }
        if (personality == 'Vip') {
            guest.points = 500;
        } else if (personality == 'Middle') {
            guest.points = 250;
        } else {
            guest.points = 50;
        }

        this.guests.push(guest);
        return `You have successfully invited ${guestName}!`;
    }
    buyArticle(articleModel, articleName, guestName) {
        let arr = Object.keys(this.possibleArticles)
        articleModel = articleModel.toLowerCase();
        let articleFind = this.listOfArticles.find(x => x.articleName == articleName && x.articleModel == articleModel);
        if (articleFind == undefined || !arr.includes(articleModel)) {
            throw Error('This article is not found.');
        }
        if (articleFind.quantity == 0) {
            throw Error(`The ${articleName} is not available.`);
        }
        let guestFind = this.guests.find(x => x.guestName == guestName);
        if (guestFind == undefined) {
            throw Error('This guest is not invited.');
        }
        if (guestFind.points < this.possibleArticles[articleModel]) {
            return `You need to more points to purchase the article.`;
        }
        let pointsForArticle = this.possibleArticles[articleModel];
        guestFind.points -= pointsForArticle;
        articleFind.quantity--;
        guestFind.purchaseArticle++;
        return `${guestName} successfully purchased the article worth ${pointsForArticle} points.`;
    }
    showGalleryInfo(criteria) {
        let result = [];
        if (criteria == 'article') {
            result.push('Articles information:');
            this.listOfArticles.forEach(x => result.push(`${x.articleModel} - ${x.articleName} - ${x.quantity}`));
        } else if (criteria == 'guest') {
            result.push('Guests information:');
            this.guests.forEach(x => result.push(`${x.guestName} - ${x.purchaseArticle}`))
        }
        return result.join('\n');
    }
}

const artGallery = new ArtGallery('Curtis Mayfield'); 

artGallery.addArticle('picture', 'Mona Liza', 0); 

artGallery.addArticle('Item', 'Ancient vase', 2); 

artGallery.addArticle('picture', 'Mona Liza', 0); 

artGallery.inviteGuest('John', 'Vip'); 

artGallery.inviteGuest('Peter', 'Middle'); 
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John')); 

console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter')); 

console.log(artGallery.buyArticle('item', 'Mona Liza', 'John')); 