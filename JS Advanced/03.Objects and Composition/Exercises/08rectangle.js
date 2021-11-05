function rectangle(width, height, color) {
    color = capitalizeFirstLetter(color);

    return {
        width,
        height,
        color,
        calcArea() {
            return width * height
        }
    }
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());