'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Harry Potter and the Philosopher\'s Stone',
        author: 'J. K. Rowling',
        pageQuantity: 223,
        createdAt: new Date(),
        updatedAt: new Date(),
  },
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J. K. Rowling',
    pageQuantity: 251,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J. K. Rowling',
    pageQuantity: 317,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
    ], {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
