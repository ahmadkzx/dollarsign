/**
 * convert pascal case string to camel case
 * @param {string} payload
 * @return {string}
 */
export default function $pascalCaseToCamelCase(payload: string) {
  if (typeof payload != 'string') throw new Error('$pascalCaseToCamelCase: payload is not string')

  return payload.replace(/^[A-Z]/g, payload[0].toLowerCase())
}
