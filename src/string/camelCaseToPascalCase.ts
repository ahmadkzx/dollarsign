/**
 * convert camel case string to pascal case
 * @param {string} payload
 * @return {string}
 */
export default function $camelCaseToPascalCase(payload: string) {
  if (typeof payload != 'string') throw new Error('$camelCaseToPascalCase: payload is not string')

  return payload.replace(/^[a-z]/g, payload[0].toUpperCase())
}
