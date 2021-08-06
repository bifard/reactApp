interface MyArray<T> {
  [N: number]: T
  reduce<T>(fn:(accum: T, current: T) => T): T
}

const arr: MyArray<number> = [1,2,3];

console.log(arr.reduce((a,b):MyArray<number> => ' x'+ a + b));
console.log(arr.reduce((a,b):MyArray<number> => a + b));
