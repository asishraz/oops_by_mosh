_items = new WeakMap();

class Stack {
  constructor() {
    _items.set(this, []);
  }

  //push method
  push(obj) {
    _items.get(this).push(obj);
  }

  //pop method
  pop() {
    const items = _items.get(this);
    if (items.length === 0) throw new Error("stack is empty");
    return items.pop();
  }

  // peek method
  peek() {
    const items = _items.get(this);
    if (items.length === 0) throw new Error("empty stack");

    return items[items.length - 1];
  }

  get count() {
    return _items.get(this).length;
  }
}

const st = new Stack();
