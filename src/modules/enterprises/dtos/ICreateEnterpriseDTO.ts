export interface ICreateEnterpriseDTO {
  name: string;
  email?: string;
  password?: string;
  description: string;
  telephone: string;
  address: string;
  number: number;
  city: string;
  state: string;
  postalCode: string;
  user_id?: string;
}
