array = []
afterEach(() => {
  array = []
})
it('teste', () => {
  array.push('Paulo')
expect(array).toEqual(['nat', 'Robs', 'Paulo'])
})
it('teste2', () => {
  expect(array.includes('Paulo')).toBe(false)
})