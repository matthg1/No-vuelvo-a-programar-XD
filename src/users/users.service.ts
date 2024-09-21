import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = []; // O bien, tu lógica para manejar la persistencia

  create(createUserDto: CreateUserDto): User {
    const user = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.password = createUserDto.password; // Asegúrate de hashear la contraseña
    user.address = createUserDto.address;
    user.phone = createUserDto.phone;
    user.country = createUserDto.country;
    user.city = createUserDto.city;

    this.users.push(user); // O guardar en la base de datos
    return user;
  }

  // Otros métodos...
}
