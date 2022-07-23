/**
 * convert camel case string to snake case
 * @param {string} payload
 * @return {string}
 */
export default function $camelCaseToSnakeCase(payload: string) {
  if (typeof payload != 'string') throw new Error('$camelCaseToSnakeCase: payload is not string')

  return payload.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
}
