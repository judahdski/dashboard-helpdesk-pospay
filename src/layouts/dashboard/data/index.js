const statData = [
    {
        id: 1,
        title: 'TOTAL PERTANYAAN',
        value: 320,
        hexColor: 'text-[#2D81FF]',
    },
    {
        id: 2,
        title: 'BELUM DIJAWAB',
        value: 220,
        hexColor: 'text-[#FF2D2D]',
    },
    {
        id: 3,
        title: 'SUDAH TERJAWAB',
        value: 100,
        hexColor: 'text-[#2DFF5B]',
    },
];

const allTickets = [
    {
        q: 'Apa yang harus saya lakukan jika lupa kata sandi akun?',
        category: 'Akun dan Profil',
        ticketNumber: '918206',
        isAnswered: true,
    },
    {
        q: 'Bagaimana cara menghapus akun saya?',
        category: 'Akun dan Profil',
        ticketNumber: '305496',
        isAnswered: false,
    },
    {
        q: 'Bagaimana cara mengganti alamat email terdaftar?',
        category: 'Akun dan Profil',
        ticketNumber: '487963',
        isAnswered: true,
    },
    {
        q: 'Apa manfaat menggunakan POSPAY?',
        category: 'Tentang POSPAY',
        ticketNumber: '573960',
        isAnswered: false,
    },
    {
        q: 'Bagaimana cara menghubungi tim dukungan POSPAY?',
        category: 'Tentang POSPAY',
        ticketNumber: '764012',
        isAnswered: false,
    },
];

export { statData, allTickets };
