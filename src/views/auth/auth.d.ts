interface IUser {
  cart: Record<string, number> | null
  id: string
  email: string
  firstname: string
  lastname: string
  city: string
  street: string
  role: ERoles
  last_searched_category: string | null
  phone: string
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
  city: string
  street: string
}
