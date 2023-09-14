export interface Test {
  id: number,
  firstName: string,
  email: string,
  adress: Address,
  galleries: Gallery,
  roles: string[];
}

export interface Address {
  label: string,
  contry: string,
  postalCode: string
}

export interface Gallery {
  name: string,
  description: string
}
