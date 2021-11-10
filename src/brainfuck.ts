export class BrainFuck {
  register: number = 0;
  memLeft: Array<number> = [];
  memRight: Array<number> = [];
  input: Array<number> = [];
  output: Array<number> = [];
  left() {
    this.memLeft.push(this.register);
    this.register = this.memRight.pop() ?? 0;
    return;
  }
  right() {
    this.memRight.push(this.register);
    this.register = this.memLeft.pop() ?? 0;
    return;
  }
  increment() {
    this.register++;
  }
  decrement() {
    this.register--;
  }
  read() {
    this.register = this.input.pop() ?? 0;
  }
  write() {
    this.output.push(this.register);
  }
}
