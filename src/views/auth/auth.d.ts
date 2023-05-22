type TRoles = 'user' | 'seller'

interface IUser {
  email: string
  firstName: string
  lastName: string
  defaultAddress: string
  role: TRoles
}

interface ILoginPayload {
  email: string
  password: string
}

interface ISignUpPayload {
  email: string
  password: string
  firstName: string
  lastName: string
  defaultAddress: string
}
