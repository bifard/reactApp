interface MyArray<T> {
  [N: number]: T
  reduce<C>(fn:(accum: C, current: T) => C): C
}

const arr: MyArray<number> = [1,2,3];

console.log(arr.reduce<string>((a,b) => 'x'+ a + b));
console.log(arr.reduce<number>((a,b) => a + b));
