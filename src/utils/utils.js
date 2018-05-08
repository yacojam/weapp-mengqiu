function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export function formatNumber(number) {
  if (number > 10^8) {
    // 大于1亿
    return 
  } else if (number > 10^4) {

  } else if (number > 10^3) {

  } else {
    return number
  }
}

export function formatTime(timestamp) {
  const now = Date.now()
  const passTime = now - timestamp
  const MILLS_OF_DAY = 1000 * 60 * 60 * 24
  if (passTime > MILLS_OF_DAY) {

  }
}
