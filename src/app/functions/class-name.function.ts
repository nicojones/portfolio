export const addClass = (className: string, element: HTMLElement) => {
  element.className += ' ' + className;
}

export const removeClass = (className: string, element: HTMLElement) => {
  const classRegexp = new RegExp(` ?${ className } ?`, 'g');
  element.className = element.className.replace(classRegexp, '');
}
