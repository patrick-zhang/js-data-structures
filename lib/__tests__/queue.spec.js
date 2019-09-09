const Queue = require('../queue');

describe('Queue', () => {
  it('works like a queue', () => {
    const queue = new Queue();
    expect(queue.size()).toEqual(0);
    queue.enqueue('first');
    expect(queue.size()).toEqual(1);
    expect(queue.peek()).toEqual('first');
    queue.enqueue('second');
    expect(queue.size()).toEqual(2);
    expect(queue.peek()).toEqual('first');
    queue.dequeue();
    expect(queue.size()).toEqual(1);
    expect(queue.peek()).toEqual('second');
    queue.dequeue();
    expect(queue.size()).toEqual(0);
    expect(queue.peek()).toEqual(undefined);
  });
});