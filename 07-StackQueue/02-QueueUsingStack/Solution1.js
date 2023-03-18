/**
 * Optimizing push (enqueue) operation O(1)
 * Pop and Peak operation will be O(n)
 *
 * Simulating Queue using Stack
 * Array will be used to simulte stack behaviour
 * Array PUSH and POP api will be used to perform the operations
 * TOP pointer will be maintianed to get the top position and size of the stack
 */
var MyQueue = function () {
  this.s1 = [];
  this.s2 = [];
  this.size = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.s1.push(x);
  this.size++;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.size > 0) {
    for (let i = this.size; i > 1; i--) {
      this.s2.push(this.s1.pop());
    }
    let first = this.s1.pop();
    this.size--;
    while (this.s2.length > 0) {
      this.s1.push(this.s2.pop());
    }
    return first;
  }
  return -1;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.size > 0) {
    for (let i = this.size; i > 1; i--) {
      this.s2.push(this.s1.pop());
    }
    let first = this.s1.pop();
    this.s2.push(first);
    while (this.s2.length > 0) {
      this.s1.push(this.s2.pop());
    }
    return first;
  }
  return -1;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.size <= 0;
};
