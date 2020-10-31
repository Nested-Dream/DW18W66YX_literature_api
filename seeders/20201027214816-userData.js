"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "admin@admin.com",
          password:
            "$2b$10$MCJ72jlopb1lWo0/D.xhP.c8xVgBe4TLM6nZL7ca4DqZEux1fX6wq",
          fullname: "Iya Siapa?",
          gender: "Male",
          phone: "080801209318",
          address: "Jln. Marvel Universe, RT.21 RW.69",
          avatar: "default.png",
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "user@baru.com",
          password:
            "$2b$10$aqCpZga8XRvNTziA64X6peu5eXTvbeK8YlrkIGGIO2yiRdGkwXtti",
          fullname: "Iya Siapa?",
          gender: "Male",
          phone: "082347660388",
          address: "Jln. Johor No5.A Asrama, Perak Timur, Surabaya",
          avatar: "default.png",
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
