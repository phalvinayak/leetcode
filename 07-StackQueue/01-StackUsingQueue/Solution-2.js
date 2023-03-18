/**
 * Optimizing Pop and Top O(1)
 * Insertion will be O(n)
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
  this.q2.unshift(x); // Inserting to the second queue and copying element from tthe first queue
  for (let i = this.size; i >= 1; i--) {
    this.q2.unshift(this.q1.pop());
  }
  this.size++;
  // Swap the queue reference
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (this.size > 0) {
    let top = this.q1.pop();
    this.size--; // Reducting the size for the last pop operation
    return top;
  }
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  if (this.size > 0) {
    let top = this.q1[this.size - 1]; // Usually front pointer points to this element
    return top;
  }
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.size <= 0;
};
