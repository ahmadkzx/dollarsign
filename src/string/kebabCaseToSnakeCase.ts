/**
 * convert kebab case string to snake case
 * @param {string} payload
 * @return {string}
 */
export default function $kebabCaseToSnakeCase(payload: string) {
  if (typeof payload != 'string') throw new Error('$kebabCaseToSnakeCase: payload is not string')

  return payload.replace(/-/g, '_')
}
