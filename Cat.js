function Cat() {
    this.stomach = [];
    // today is 27012023
}

Cat.prototype.eat = function(mouse) {
    this.stomach.push(mouse);
};

module.exports = Cat;