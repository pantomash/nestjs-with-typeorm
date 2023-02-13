import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./users.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  getAll() {
    // return products;
    return this.repo.find();
  }

  getById(id: number) {
    // return products.find(x => x.id === id);
    return this.repo.findOneBy({id});
  }

  add(name: string) {
    const newProduct = this.repo.create({name});
    return this.repo.save(newProduct);
  }

  async remove(id: number) {
    // products = products.filter(x => x.id !== id);

    const product = await this.repo.findOneBy({id});
    await this.repo.remove(product);
  }

  async edit(id: number, name: string) {
    // const product = products.find(x => x.id === id);
    // product.price = price;
    // return product;

    const user = await this.repo.findOneBy({id});
    user.name = name;
    return this.repo.save(user);
  }

}
