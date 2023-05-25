enum ERoles {
  user = 'user',
  admin = 'admin',
}

interface IUser {
  id: string
  email: string
  firstname: string
  lastname: string
  city: string
  street: string
  role: ERoles
  last_searched_category: string | null
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
