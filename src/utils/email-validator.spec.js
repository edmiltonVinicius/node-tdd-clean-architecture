
const EmailValidator = require('./email-validator')
const validator = require('validator')

// Nesse caso o 'sut' é a classe EmailValidator ou sejá o alvo dos testes é testar ela
// E aqui criamos um make (fake) para que possamos testar em diferentes casos porem sempre retornando a classe sut (EmailValidator)
const makeSut = () => {
  return new EmailValidator()
}

describe('E-mail validator', () => {
  test('should return true if validator returns true', () => {
    const sut = makeSut()
    const isEMailValid = sut.isValid('valid@email.com.br')

    expect(isEMailValid).toBe(true)
  })

  test('should return false if validator returns false', () => {
    validator.isEmailValid = false
    const sut = makeSut()
    const isEMailValid = sut.isValid('invalid_email@')

    expect(isEMailValid).toBe(false)
  })

  test('should return false if validator returns false', () => {
    const sut = makeSut()
    sut.isValid('any_email@mail.com')

    expect(validator.email).toBe('any_email@mail.com')
  })
})
