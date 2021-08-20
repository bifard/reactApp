export function thousandToK(num:number = 0):string|number{
  return (num > 1000) ? `${Math.round(num/100)/10}K` : num;
}