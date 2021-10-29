
(function solve() {
    String.prototype.ensureStart = function (str) {
        let newString = this.toString();
        if (!newString.startsWith(str)) {
            newString = `${str}${this}`;
        }
        return newString;
    }
    String.prototype.ensureEnd = function (str) {
        let newString = this.toString();
        if (!newString.endsWith(str)) {
            newString = `${this}${str}`;
        }
        return newString;
    }
    String.prototype.isEmpty = function () {
        if (this.length == 0) {
            return true;
        }
        return false;
    }
    String.prototype.truncate = function (n) {
        let result;
        if (this.length <= n) {
            return this.toString();
        }
        if (this.includes(' ')) {
            let words = this.split(' ');
            while (words.join(' ').length + 3 > n) {
                words.pop();
            };

            return `${words.join(' ')}...`;
        }
        if (n > 3) {
            let string = `${this.slice(0, n - 3)}...`;
            return string;
        }
        return '.'.repeat(n);
    }
    String.format = function (string, ...params) {
        let regex = /{(\d+)}/g;
        let replacedString = string.replace(regex, (match, group1) => {
            let index = Number(group1);
            if (params[index] !== undefined) {
                return params[index];
            }
            return match;
        })
        return replacedString;
    }

})();

let str = 'quick brown fox jumps over the lazy dog';

str = str.ensureStart('the ');

str = str.ensureStart('hello ');

str = str.truncate(16);

console.log(str);
str = str.truncate(14);

console.log(str);
str = str.truncate(8);

console.log(str);
str = str.truncate(4);

console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox',

    'quick', 'brown');
console.log(str);

str = String.format('jumps {0} {1}',

    'dog');
console.log(str);