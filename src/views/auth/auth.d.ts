type TUser = IDatabase['public']['Tables']['profiles']['Row']
type TUserUpdate = IDatabase['public']['Tables']['profiles']['Update']

interface ILoginPayload {
  email: string
  password: string
}

interface ISignUpPayload {
  email: string
  password: string
  firstname: string
  lastname: string
  city: string
  street: string
}
