export interface PreventDefault<T = any> {
  preventDefault: () => void;
  stopPropagation: () => void;
  cancelBubble: boolean;
  relatedTarget?: T;
}
