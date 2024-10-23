import { CreateUserInput } from "src/users/dto/create-user.input";

export const users: CreateUserInput[] = [
  { firstName: "Root", lastName: "Admin", username: "root", email: "xxx@example.com", isAdmin: true, password: "root" },
];
