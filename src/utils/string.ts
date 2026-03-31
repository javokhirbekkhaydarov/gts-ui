export function padStart(num: number, length = 2) {
  return num.toString().padStart(length, '0')
}
