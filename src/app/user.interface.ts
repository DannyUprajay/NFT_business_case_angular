export interface UserInterface {
  id: number,
  email: string,
  firstName: string,
  lastName: string,
  adress: AdressInterface,
  gender: string,
  password: string,
  birth: any
}

export interface  AdressInterface {
  label: string,
  contry: string,
  postalCode: string
}

export interface result{
  true:string | undefined
  err: string | undefined
  userApi: string | undefined



}

// {
//   "id": 1,
//   "email": "danny@gmail.com",
//   "roles": [
//   "ROLE_ADMIN",
//   "ROLE_USER"
// ],
//   "firstName": "danny",
//   "lastName": "uprajay",
//   "gender": "homme",
//   "adress": {
//   "id": 1,
//     "label": "20 rue charle de gaulle",
//     "postalCode": "69190",
//     "contry": "france"
// },
//   "nfts": [
//   {
//     "id": 1,
//     "price": 50,
//     "pathImage": "https://dragonballsuper-france.fr/wp-content/uploads/2022/03/vegeta-ultra-ego.jpg"
//   }
// ],
//   "galleries": [
//   {
//     "id": 1,
//     "name": "horror",
//     "description": "ca fait peur"
//   }
// ]
// }
