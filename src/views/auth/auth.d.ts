type TRoles = 'user' | 'seller'

interface IUser {
  id: string
  email: string
  firstname: string
  lastname: string
  address: string
  role: TRoles
}

interface ILoginPayload {
  email: string
  password: string
}

interface ISignUpPayload {
  email: string
  password: string
  firstname: string
  lastname: string
  address: string
}
