import { faker } from '@faker-js/faker';

export function generateCheckoutData() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
    cpf: faker.string.numeric(11),
    email: faker.internet.email({ firstName, lastName }),
    phone: faker.phone.number('119########'),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zip: faker.location.zipCode(),
    },
  };
}
