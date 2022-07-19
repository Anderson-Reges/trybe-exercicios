const myFizzBuzz = require('./myFizzBuzz');

it('retorne um numero divisivel por 3 e 5', () =>{
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
})
it('retorne um numero divisivel por 3', () =>{
    expect(myFizzBuzz(3)).toBe('fizz')
})
it('retorne um numero divisivel por 5', () =>{
    expect(myFizzBuzz(5)).toBe('buzz')
})
it('retorne um numero nao divisivel por 3 e 5', () =>{
    expect(myFizzBuzz(2)).toBe(2)
})
it('retorne um nao numero', () =>{
    expect(myFizzBuzz('a')).toBe(false)
})