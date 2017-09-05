export class Room {
  id: number;
  title: string;
  address: string;
  price: number;
  image: string;
  city: string = "Curitiba";
  email: string;
  type: string;


  constructor();
  constructor(id?: number, title?: string, address?: string, image?: string, price?: number);
  constructor(id?: number, title?: string, address?: string, image?: string, price?: number) {
    this.id = id;
    this.title = title;
    this.address = address;
    this.price = price;
    this.image = image;
  }



  showFormattedAddress() : string {
    return this.address + ", " + this.city
  }

}
