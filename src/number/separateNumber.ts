/**
 *
 * @param {number|string} payload
 * @param {number} size
 * @returns {string}
 */
export default function $separateNumber(payload: number | string, size = 3) {
  if (typeof size != 'number') throw new Error('$separateNumber: size is not number')

  const regex = new RegExp(`\\B(?=(\\d{${size}})+(?!\\d))`, 'g')

  if (typeof payload == 'string') {
    return payload.replace(regex, ',')
  } else if (typeof payload == 'number') {
    return payload.toString().replace(regex, ',')
  } else {
    throw new Error('$separateNumber: payload type should be number or string')
  }
}
