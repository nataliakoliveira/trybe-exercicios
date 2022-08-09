const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};
it('Verificando se uppercase test é igual a TEST', (done) => {
uppercase('test', (strUppercase) => {
  try {
    expect(strUppercase).toBe('TEST');
    done();
  } catch (error) {
    done (error)
  }
})
})