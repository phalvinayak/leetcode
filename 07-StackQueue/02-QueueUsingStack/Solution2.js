/**
 * Optimizing Pop (dequeue) and Peak operation will be O(1)
 * Push (enqueue) operation O(n)
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
  for (let i = this.size; i >= 1; i--) {
    this.s2.push(this.s1.pop());
  }
  this.s2.push(x);
  this.size++;
  for (let i = this.size; i >= 1; i--) {
    this.s1.push(this.s2.pop());
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.size > 0) {
    this.size--;
    return this.s1.pop();
  }
  return -1;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.size > 0) {
    return this.s1[this.size - 1];
  }
  return -1;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.size <= 0;
};
