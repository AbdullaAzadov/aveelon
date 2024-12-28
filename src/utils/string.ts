export function removeDomain(url: string) {
  return url.replace(/^https?:\/\/[^/]+/, '');
}
