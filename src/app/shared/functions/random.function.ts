export function r(): string {
  return (Math.random() + "").substr(2);
}

export function randTime(): string {
  return `?t=${ r() }`;
}
