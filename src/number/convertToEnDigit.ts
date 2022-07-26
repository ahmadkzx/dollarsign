/**
 * convert persian and arabic numbers to english
 * @param {number|string} payload
 * @param {boolean} convertToNumber
 * @returns {string|number}
 */
export default function $convertToEnDigit(payload: number | string, convertToNumber = false) {
  if (typeof payload != 'number' && typeof payload != 'string')
    throw new Error('$convertToEnDigit: payload is not valid')

  if (typeof payload == 'number') payload = payload.toString()

  payload = payload
    .replace(/[۰-۹]/g, (num) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(num).toString())
    .replace(/[٠-٩]/g, (num) => '٠١٢٣٤٥٦٧٨٩'.indexOf(num).toString())

  return convertToNumber ? +payload : payload
}
