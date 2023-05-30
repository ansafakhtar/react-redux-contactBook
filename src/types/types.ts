export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  linkedIn?: string;
  twitter?: string;
}

export interface Contacts {
  contacts: Contact[];
}
