export function transformUrlToId(url: string): string {
  const id = url.split(/([^/]+)\/?$/gm);

  return id[1];
}
