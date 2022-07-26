/**
 * convert kebab case string to camel case
 * @param {string} payload
 * @return {string}
 */
export default function $kebabCaseToCamelCase(payload: string) {
  if (typeof payload != 'string') throw new Error('$kebabCaseToCamelCase: payload is not string')

  return payload.replace(/-./g, (word) => word[1].toUpperCase())
}
