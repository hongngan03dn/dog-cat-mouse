function Dog() {
    this.stomach = [];
}

Dog.prototype.eat = function(cat) {
    this.stomach.push(cat);
};
// 1-commit  dog eat
// 2-commit dog drink