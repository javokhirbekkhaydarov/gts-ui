type DebouncedFunction = (...args: string[]) => void;

export const debounce = <F extends DebouncedFunction>(fn: F, ms: number): DebouncedFunction => {
  let timeout: ReturnType<typeof setTimeout>
  return (...args: string[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), ms)
  };
};
