export function formatNumber(num: number) {
  return new Intl.NumberFormat('en-US').format(num)
}

export function formatCurrency(num: number, currency: string = 'UZS') {
  // Форматируем число с разделителями тысяч, но без символа валюты
  const formattedNumber = new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(num)
  
  // Добавляем код валюты после числа
  return `${formattedNumber} ${currency}`
}
