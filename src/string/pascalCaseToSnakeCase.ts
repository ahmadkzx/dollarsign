/**
 * convert pascal case string to snake case
 * @param {string} payload
 * @return {string}
 */
export default function $pascalCaseToSnakeCase(payload: string) {
  if (typeof payload != 'string') throw new Error('$pascalCaseToSnakeCase: payload is not string')

  return payload
    .replace(/(?:^|\.?)([A-Z])/g, (_, letter) => '_' + letter.toLowerCase())
    .replace(/^_/, '')
}
