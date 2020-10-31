"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('Literature', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Literature",
      [
        {
          title: "Management Sistem",
          publication: "2016-07-31",
          pages: 12,
          ISBN: "1234567891012",
          author: "Rizky E E",
          file: "file-1604104712449.pdf",
          thumbnail: "thumbnail-1604104448598.png",
          status: "Approved",
          year: 2016,
          month: "July",
          uploadBy: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Sistem Informasi Standar BAN-PT",
          publication: "2017-08-12",
          pages: 8,
          ISBN: "123123123123",
          author: "Haris Astina",
          file: "file-1604104712449.pdf",
          thumbnail: "thumbnail-1604104526940.png",
          status: "Approved",
          year: 2017,
          month: "August",
          uploadBy: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Manajemen Laba",
          publication: "2008-01-24",
          pages: 19,
          ISBN: "113451212214",
          author: "S Sulistiyanto",
          file: "file-1604104712449.pdf",
          thumbnail: "thumbnail-1604104612134.png",
          status: "Approved",
          year: 2008,
          month: "January",
          uploadBy: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "istem Informasi Keuangan",
          publication: "2020-10-15",
          pages: 12,
          ISBN: "122456541231",
          author: "Ganteng Egi",
          file: "file-1604104712449.pdf",
          thumbnail: "thumbnail-1604104712468.png",
          status: "Approved",
          year: 2020,
          month: "October",
          uploadBy: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Soal gemastik Sandi geser",
          publication: "2020-10-30",
          pages: 7,
          ISBN: "1234567891010",
          author: "Gemastik",
          file: "file-1604104197120.pdf",
          thumbnail: "thumbnail-1604104197125.jpg",
          status: "Approved",
          year: 2020,
          month: "October",
          uploadBy: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Daftar Hasil Kelulusan Siswa Kelas XII TP 2018-2019",
          publication: "2019-07-09",
          pages: 7,
          ISBN: "1234567891011",
          author: "SMA N 1 Halsel",
          file: "file-1604104292497.pdf",
          thumbnail: "thumbnail-1604104292510.png",
          status: "Approved",
          year: 2019,
          month: "July",
          uploadBy: null,
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
     * await queryInterface.bulkDelete('Literature', null, {});
     */
    await queryInterface.bulkDelete("Literature", null, {});
  },
};
