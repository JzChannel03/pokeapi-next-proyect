export function getCookies() {
  const pairs = document.cookie.split("; ");
  const cookies: any = {};
  for (const element of pairs) {
    let pair = element.split("=");
    cookies[pair[0]] = pair[1];
  }
  return cookies;
}
