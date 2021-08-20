export function getTokenFromUrl(url:string):string{
  let token = '';
  if( url && (url.indexOf('&')!== -1) ){
    token = url.split('&').filter(function(el) { if(el.match('access_token') !== null) return true; })[0].split('=')[1];
    window.__token__ = token;
  }
  return token;
}