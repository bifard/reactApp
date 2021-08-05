type TypeConcat = (str1:string, str2:string) => string;

const concat: TypeConcat = (right, left) => right + left;

console.log(concat('Hello', 'World!!'));