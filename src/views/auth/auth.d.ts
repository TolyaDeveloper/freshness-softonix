enum ERoles {
  User = 'user',
  Admin = 'admin',
}

interface IUser {
  id: string
  email: string
  firstname: string
  lastname: string
  address: {
    city: string
    street: string
  }
  role: ERoles | string
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
  address: {
    city: string
    street: string
  }
}
