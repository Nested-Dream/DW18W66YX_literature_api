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
          title:
            "Sistem Pengawasan dan Pengendalian pH, Suhu dan Kekeruhan Air Dalam Akuarium Berbasis Aplikasi Mobile",
          publication: "2020-01-15",
          pages: 21,
          ISBN: "Unknown",
          author: "Muhammad Rizky Iqbal Syaifullah",
          file:
            "Literature_Project/files/LKTI2019FINAL__Sistem_Pengawasan_dan_Pengendalian_pH_Suhu_dan_Kekeruhan_Air_Dalam_Akuarium_Berbasis_Aplikasi_Mobile.pdf",
          thumbnail:
            "Literature_Project/thumbnails/LKTI2019FINAL__Sistem_Pengawasan_dan_Pengendalian_pH_Suhu_dan_Kekeruhan_Air_Dalam_Akuarium_Berbasis_Aplikasi_Mobile.png",
          status: "Approved",
          year: 2020,
          month: "January",
          uploadBy: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Aplikasi Petak Kontainer (PEKON)",
          publication: "2020-06-15",
          pages: 7,
          ISBN: "Unknown",
          author: "Muhammad Rizky Iqbal Syaifullah",
          file:
            "Literature_Project/files/1201190016-Muhammad_Rizky_Iqbal_Syaifullah-PETA_KONTEN.pdf",
          thumbnail: "Literature_Project/thumbnails/Aplikasi_Peta_Konten.png",
          status: "Approved",
          year: 2020,
          month: "June",
          uploadBy: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Soal gemastik Sandi geser",
          publication: "2020-10-30",
          pages: 2,
          ISBN: "Unknown",
          author: "Gemastik XII",
          file: "Literature_Project/files/soal_Gemastik_Sandi_Geser.pdf",
          thumbnail: "Literature_Project/thumbnails/soal_Gemastik.png",
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
          ISBN: "Unknown",
          author: "SMA N 1 Halsel",
          file:
            "Literature_Project/files/DAFTAR_HASIL_KELULUSAN_SISWA_KELAS_XII_TP_2018-2019.pdf",
          thumbnail: "Literature_Project/thumbnails/daftarKelulusan.png",
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
