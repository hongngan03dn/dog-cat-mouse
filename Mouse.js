function Mouse(name) {
    this.name = name;
    this.isDead = false;
}

Mouse.prototype.die = function() {
    this.isDead = true
};

module.exports = Mouse;

// mouse run nek
// 2-commit cho sleep