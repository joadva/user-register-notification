'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        address: '123 Main St, Anytown, USA',
        age: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Jane',
        last_name: 'Smith',
        email: 'jane.smith@example.com',
        address: '456 Elm St, Othertown, USA',
        age: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Michael',
        last_name: 'Johnson',
        email: 'michael.johnson@example.com',
        address: '789 Oak St, Thistown, USA',
        age: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Emily',
        last_name: 'Brown',
        email: 'emily.brown@example.com',
        address: '101 Pine St, Anothertown, USA',
        age: 28,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'David',
        last_name: 'Martinez',
        email: 'david.martinez@example.com',
        address: '555 Maple St, Yetanothertown, USA',
        age: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Sarah',
        last_name: 'Taylor',
        email: 'sarah.taylor@example.com',
        address: '222 Cedar St, Lasttown, USA',
        age: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Chris',
        last_name: 'Garcia',
        email: 'chris.garcia@example.com',
        address: '777 Walnut St, Finaltown, USA',
        age: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Jessica',
        last_name: 'Hernandez',
        email: 'jessica.hernandez@example.com',
        address: '999 Fir St, Endtown, USA',
        age: 27,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Andrew',
        last_name: 'Rodriguez',
        email: 'andrew.rodriguez@example.com',
        address: '333 Birch St, Almosttown, USA',
        age: 31,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Amanda',
        last_name: 'Lopez',
        email: 'amanda.lopez@example.com',
        address: '444 Beech St, Soonertown, USA',
        age: 29,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
