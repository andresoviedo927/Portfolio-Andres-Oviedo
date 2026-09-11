export function formatDisplayUrl(url: string) {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
}
