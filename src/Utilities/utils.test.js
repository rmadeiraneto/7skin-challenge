import utils from './_utils'

// stringToHuman
const stringToHuman = utils.stringToHuman
describe('stringToHuman function', () => {
  it('converts "camel case string" to human readable string with capitalized words', () => {
    expect(stringToHuman('camelCaseString', true)).toBe('Camel case string')
  })

  it('converts "camel case string" to human readable string with lowercase words', () => {
    expect(stringToHuman('camelCaseString', false)).toBe('camel case string')
  })

  it('converts empty string to empty string', () => {
    expect(stringToHuman('', true)).toBe('')
    expect(stringToHuman('', false)).toBe('')
  })

  it('converts "word" single word string to capitalized word', () => {
    expect(stringToHuman('word', true)).toBe('Word')
  })

  it('converts "word" single word string to human readable string with lowercase words', () => {
    expect(stringToHuman('word', false)).toBe('word')
  })

  it('handles snake case strings with capitalized words', () => {
    expect(stringToHuman('snake_case_string', true)).toBe('Snake case string')
  })

  it('converts snake case strings to human readable string with lowercase words', () => {
    expect(stringToHuman('snake_case_string', false)).toBe('snake case string')
  })

  it('handles kebab case strings with capitalized words', () => {
    expect(stringToHuman('kebab-case-string', true)).toBe('Kebab case string')
  })

  it('converts kebab case strings to human readable string with lowercase words', () => {
    expect(stringToHuman('kebab-case-string', false)).toBe('kebab case string')
  })
})
