export function formatVND(value) {
  let number = value || 0
  return number.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    useGrouping: true,
  })
}

/**
 * return yyyyMMdd format
 * @param {*} inputDate
 * @returns
 */
export const formatAPIParamsDate = (inputDate) => {
  const year = inputDate.getFullYear();
  let month = inputDate.getMonth() + 1
  let date = inputDate.getDate();

  if (month < 10) {
    month = "0" + month
  }

  if (date < 10) {
    date = "0" + date
  }
  return year + month + date
}
