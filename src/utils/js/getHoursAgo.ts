export function getHoursAgo(data:number){
  return Math.round((new Date().getTime()/1000 - data)/60/60);
}