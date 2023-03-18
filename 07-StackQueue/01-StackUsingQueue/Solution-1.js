/**
 * Optimizing Insertion O(1)
 * Pop and Top operation will be O(n)
 *
 * Using array to simulae Queue behaviour
 * Unshift operation will insert element from the behind [4,3,2,1]
 * Similarly Pop will remove the element which was inserted first 1,2,3,4
 */

var MyStack = function () {
  this.q1 = [];
  this.q2 = [];
  this.size = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.q1.unshift(x); // Inserting from the behind to simulate Q behaviour
  this.size++;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (this.size > 0) {
    for (let i = this.size; i > 1; i--) {
      this.q2.unshift(this.q1.pop());
    }
    let top = this.q1.pop();
    this.size--; // Reducting the size for the last pop operation
    // Swap the queue reference
    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
    return top;
  }
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  if (this.size > 0) {
    for (let i = this.size; i > 1; i--) {
      this.q2.unshift(this.q1.pop());
    }
    let top = this.q1.pop();
    this.q2.unshift(top);
    // Swap the queue reference
    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
    return top;
  }
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.size <= 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 */
var obj = new MyStack();
obj.push(10);
console.log(obj.pop());
console.log(obj.top());
console.log(obj.empty());
