import { ISortable } from './ISortable';

export class NumberGroup implements ISortable {
  constructor(data: number[]) {
    this.data = data;
  }

  data: number[];

  get length(): number {
    let numLength = length.toString().length
    return length
  };

  compare(leftPos: number, rightPos: number): boolean {
    if(leftPos > rightPos) {
      this.swap
      return true
    }else {
      return false
    }
  }

  swap(left: number, right: number): void {
    // I am not sure how to do this part. I am thinking in a javascript but I am not sure what the way to tackle this is.
  }
}
