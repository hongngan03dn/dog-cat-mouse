function Dog() {
    this.stomach = [];
}

Dog.prototype.eat = function(cat) {
    this.stomach.push(cat);
};
// 2-commit dog drink