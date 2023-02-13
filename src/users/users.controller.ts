import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { EditUserDto } from "./dto/edit-user.dto";

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getAll();
  }

  // localhost:3000/products/1
  @Get('/:id')
  getProduct(@Param('id') id: string) {
    return this.usersService.getById(parseInt(id));
  }

  // localhost:3000/products POST
  @Post()
  addProduct(@Body() body: CreateUserDto) {
    return this.usersService.add(body.name);
  }

  // localhost:3000/products/1 DELETE
  @Delete('/:id')
  @HttpCode(204)
  removeProduct(@Param('id') id: string) {
    this.usersService.remove(+id);
  }

  // localhost:3000/products/1 PATCH
  @Patch('/:id')
  editProduct(@Body() body: EditUserDto, @Param('id') id: string) {
    return this.usersService.edit(+id, body.name)
  }
}
