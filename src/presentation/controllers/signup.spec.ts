import { expect } from 'chai'
import { SignupController } from './signup'

describe('Signup Controller', () => {
  it('Should return 400 if no name is provided', () => {
    const sut = new SignupController()
    const httpRequest = {
      body: {
        // name: 'any_name',
        email: 'any_email@mail.com',
        password: 'any-password',
        passwordConfirmation: 'any-password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).to.equal(400)
  })
})
