export const allTheory = [
  {
    title: "div vs span",
    category: "html",
    content: `div termasuk block level element artinya selalu memulai baris baru dan mengambil lebar penuh dari konten induknya;
              span termasuk inline-level element artinya span tidak memulai baris baru dan hanya mengambil lebar yang diperlukan
              oleh kontennya`,
  },
  {
    title: "html vs xhtml",
    category: "html",
    content: `html dan xhtml adalah dua bahasa markup untuk membuat halaman web. html hypertext markup language lebih fleksibel
              dan toleran kesalahan, browser web biasanya bisa perbaikinya. tag html tidak case-sensitive dan tag penutup tidak
              selalu diperlukan. xhtml eXtensible hypertext markup language lebih ketat dan sesuai standarr xml yang praktik
              penulisan kodenya lebih bersih dan konsisten.`,
  },
  {
    title: "element vs tag",
    category: "html",
    content: `element adalah unit dasar html yang lengkap terdiri dari tag pembuka, konten dan tag penutup. ia mendefinisikan
              struktur dan konten dari web page. tag adalah komponen dasar html untuk membuat elemen html, ditulis dengan dua
              kurung siku jenisnya ada tag pembuka, tag penutup dan self-closing tag.`,
  },
  {
    title: "semantic html",
    category: "html",
    content: `semantic html adalah penggunaan tag html yang memiliki arti atau makna tertentu yang menggambarkan tujuan dan
              struktur kontent dalam dokumen web tujuannya untuk meningkatkan keterbacaan kode oleh manusia dan mesin,
              aksesibilitas, seo, dan mematuhi standar dan best practice rekomendasi w3c. contohnya tag header, footer, main,
              nav, aside, article, section, figure, figcaption`,
  },
  {
    title: "fungsi !DOCTYPE",
    category: "html",
    content: `!DOCTYPE singkatan dari document type declaration dalah deklarasi yang muncul paling atas yang memberi tahu browser
              mengenai versi dan tipe dokumen html yang digunakan sehingga browser dapat menampilkan halaman yang sesuai. doctype
              penting untuk konsistensi rendering dengan menetapkan mode standar akan dirender secara konsisten di berbagai
              browser dan menghindari quirks mode yakni tampilan tidak terduga karena browser mencoba mendukung prilaku lama
              tidak standar.`,
  },
  { title: "quirks mode", category: "html", content: `quirks mode adalah` },
  {
    title: "bisakah css menggunakan @import",
    category: "css",
    content: `css dapat menggunakan @import untuk import file css ke file css lainnya. yang diimport bisa file css sesuai path
          atau file css yang tersimpan di internet. pertimbangannya file yang diimport ini mau disimpan di manapun akan
          dibaca lebih dulu baru file utama hingga jadi sedikit lambat dan keterbatasan browser lama`,
  },
  {
    title: "magin vs padding",
    category: "css",
    content: `padding dan margin berfungsi untuk mengatur ruang di sekitar element html. padding adalah ruang di dalam element
          antara konten dan border element (ruang internal). margin adalah ruang di luar element antara border element dan
          element lain atau tepi halaman (ruang external)`,
  },
  {
    title: "sebutkan unit baru css3",
    category: "css",
    content: `unit baru css3 diantaranya: viewport units yakni unit yang didasarkan pada ukuran viewport (vw, vh, vmin, vmax);
          rem (root em) unit yang relatif terhadap ukuran font root, berbeda dengan em yang relatif terhadap ukuran font
          element induk. ch (character) unit ch didasarkan pada lebar karakter 0 dari font yang digunakan element untuk
          menetapkan lebar elemen teks berdasarkan ukuran font. misal 20ch artinya seukuran 20 karakter. Ex (x-height) unit
          ex didasarkan pada tinggi huruf kecil dari font yang digunakan element, berguna untuk mengatur tinggi element text
          berdasarkan tinggi karakter. Fr (fraction) unit fr digunakan dalam konteks grid dan mewakili sebagian dari ruang
          yang tersedia dalam grid container untuk tata letak grid fleksibel. Percentages css3 memperluas penggunaan
          percentages dimana dapat digunakan dalam lebih banyak konteks seperti padding, margin yang relatif terhadap ukuran
          induk.`,
  },
  {
    title: "unit untuk desain responseive",
    category: "css",
    content: `Unit-unit untuk membantu web responsive diantaranya: viewport units (vw, vh, vmax, vmin), precentages, rem, fr, em,
          css media queries`,
  },
  {
    title: "css specifity",
    category: "css",
    content: `css specificity adalah aturan browser untuk menerapkan style tertentu ketika ada konflik. style yang spesifikasinya
          paling besar yang akan diterapkan. berikut spesifikasinya: inline style 1000, id selector 100, class dan atribut
          selektor 10, type selektor 1, kombinasi selektor 111. jika ada !important maka diutamakan tapi masih mengikut
          aturan spesifikasi.`,
  },
  {
    title: "cara membuat variable dalam css",
    category: "css",
    content: `variabel css dideklarasikan dengan -- dan diakses dengan fungsi var(), di dalam element :root. variabel bisa diubah
          di element spesifik dengan override nama variabel, dan bisa dibuat nilai opsional atau nilai default jika variabel
          tidak tersedia.`,
  },
  {
    title: "inline vs block vs inline-block",
    category: "css",
    content: `block, inline, dan inline-block merupakan value dari property display. inline tidak memulai baris baru, hanya
          mengambil ruang yang diperlukan kotennya, tidak menerima property width dan height, margin dan padding vertikal
          tidak mempengaruhinya tapi horizontal berfungsi. block memulai baris barus mengambil seluruh lebar baris meskipun
          kontentnya sedikit, menerima properti dimensi width dan height, margin dan padding berfungsi normal baik horizontal
          maupun vertikal. inline-block tidak memulai baris baru, hanyak mengambil ruang yang diperlukan kontennya namun bisa
          diatur dimensi width dan height, margin dan padding berfungsi normal.`,
  },
  {
    title: "pseudo class",
    category: "css",
    content: `pseudo-class adalah keyword yang ditambahkan ke selector dalam css untuk menentukan keadaan khusus dari element.
          diawali dengan :, berikut keadaan khusus: hover, active, focus, first-child, last-child, nth-child(2), not(.class),
          input[type="checkbox"]:checked, iput:disabled, before, after.`,
  },
  {
    title: "cara buat div dalam div ada di tengah",
    category: "css",
    content: `cara membuat div dalam div agar di tengah: dengan flexbox, grid, positioning, dan margin auto`,
  },
  { title: "grid system", category: "css", content: `nanti` },
  { title: "aturen css ruelset", category: "css", content: `nanti` },
  {
    title: "rekomendasi vscode extension",
    category: "vscode",
    content: `codesnap by adpyke https://codesnap.dev/; vscode-pets by anthony shaw; live server by rtwick & live server (five server) by yannick; cuy universe template by afrizaldea; color highlight by sergii n & color picker by anseki; css peek by pranay prakash; css auto prefix by sporiley; error lens by alexander; turbo console log by anas chakroun; quokka.js by wallaby.js; auto complete tag by jun han, paketan dari auto rename tag dan auto close tag; better comments by aaron bond; import cost by wix; path intellisense by christioan kohler; indent-rainbow by oderwat; thunder client by thunder client; one dark pro; vscode-icons`,
  },
  { title: "mysqlf", category: "mysql", content: "halo" },
  {
    title: "Alur",
    category: "eduwork",
    content: `belajar & bangun porto 3-4 bulan. 3-5 porto, CV, linked in, job portal sesuai template eduwork, mulai berkoneksi di
        linkedIn. final projek & mini interview 1-3 minggu, lolos lanjut penyaluran kerja. lalu finalisasi tugas dan
        penyaluran, buat 8 akun job portal, cv, porto, linkedin, ikut fgd di grup penyaluran, lolos QC email jobs, CV, porto
        dan linkedin sebelum disalurkan. (tambahan) talent development, konsul ke mentor, projek tambahan, magang. disalurkan 1-3 bulan tetap belajar tambah porto dan simulasi interview, isi weekly report setiap kamis/jumat untuk
        dapat bantuan job portal dan mulai apply mandiri, disalurkan hiring partner, wajib response dan ikut jika diminta
        interview, kabarkan eduwork jika bisa, kerjakan soal PRETEST sambil konsul ke mentor, wajib konsul offering jika
        dapat tawaran dengan hr eduwork. tersalurkan, hubungi hr lengkapi form tersalurkan, sharing lowongan kantor, pengalaman kerja, wajib jawab jika ada
        siswa yang tanya.`,
  },
  {
    title: "mindset",
    category: "eduwork",
    content: `Awal karir fokus bangun koneksi linkedin dan di kantor, mantapkan skill, tambah porto, latihan interview. ada 2 pilihan: banyak interview dan lolos dengan salary cukup, biaya hidup plus isa dan pengalaman kerja real; Atau tunggu sampai dapat salari yang diinginkan belum tahu kapan. -
Belajar dan dibayar perusahaan (merintis 3 bulan pertama kerja). Terima offering selama biaya cukup. Sambil kerja luangkan belajar dan koneksi linkedin. 3-12 bulan kerja, semakin terampil dan punya koneksi, memiliki bargaining power untuk pekerjaan dan salary lebih baik. Jika tidak lolos probation (tidak lanjut kontrak 3 bulan) atau 6-12 bulan, minimal ada pengalaman kerja untuk pekerjaan berikutnya. -
Cara agar dihubungi hr (pretest/interview) agar hr paham potensi kamu, misal ada 2 kandidat A dan B, A minta 4 juta, B minta 8 juta maka A berpotensi dihubungi duluan. Fokus perbanyak dapat interview lalu jelaskan potensi baru diskusi salary. Caranya set salary minimal jakarta 4,5 jt selain itu 3-4 jt tidak disarankan 6-7 juta dulu. -
Ditanya salary? umr / 5jt / ikut perusahaan / range & terbuka nego. Jawab dengan range gaji dan bisa nego jangan satu angka. siapa tahu perusahaan bisa bayar lebih. Salary ada dasarnya, perlu riset pertimbangan. konsul kalau ada offering dengan hr eduwork/Mas Arif. Range bawah umr + isa, tengah + 1 juta, atas + 2 juta. -
Cara tentukan gaji yang cukup: riset umr perusahaanmu berada; hitung biaya hidup (kos, makan, transport, lainnya), ISA lebihkan 1 jt atau 500 rb untuk cicilan. di awal karir sebaiknya hemat dulu. lihat info salary. contoh hitung detail kebutuhan: Kos 1 jt, makan 1,5 jt, transport 500 k, lainnya 500 k, isa 1jt. total 4.500 rb, umr 4,9 jt sisa 300k. -
Template sampaikan saat nego gaji: 1. ucapan terima kasih dapat kesempatan interview; 2. sampaikan hasil riset kebutuhanmu biaya hidup di kota tersebut; 3. ada cicilan isa; 4. sampaikan hal positif atau potensi (keep humble); 5. sampaikan dengan range mulai umr + 2 angka dan bisa nego, jangan 1 angka mutlak; 6. terima kasih. misal: Sebelumnya terima kasih atas interview nya, untuk salary saya sesuaikan dengan kebutuhan isa 1jt kos 1jt makan 1,5jt transport 500k, lainnya 500k total 4,5 juta. -
Kesimpulan: bangun koneksi dan tetap belajar, set gaji minimal di job portal dan banyak interview, wajib konsul gaji/offering dengan hr eduwork Mas Arif. -
`,
  },
  {
    title: "CvAts",
    category: "eduwork",
    content: `CV baik itu yang menggambarkan dirimu dengan tepat tanpa bertele-tele dan buat kamu diundang interview. ATS atau creative CV. disesuaikan apply ke mana, eduwork menyarankan ATS karena yang tanpa foto sehingga mengurangi bias dan berfokus pada skill atau teknis sehingga peluang diterima lebih besar dan mudah terscan system ATS. pastikan dapat [template cv ats](https://docs.google.com/document/d/1qn0vA5kJsF3-xhqN9SIN4GUXDiZUypWMjVEqHQ3bztQ/edit#) yang aksesnya untuk siapapup dan bisa diedit, lalu upload ke profil web eduwork. profil - curriculum vitae - masukan linknya. -
Format xyz dalam cv (ada angka, %, waktu, dampak, fakta) akan discan sistem ATS job portal, sehingga menjadi kandidat relevan. **X**: apa yang dilakukan? **Y** bagaimana hasilnya (terukur ada angka, %, waktu, fakta, dampak); **Z** bagaimana caranya dan menggunakan apa. Perbedaan XYZ di pekerjaan dan bootcamp hanya di X nya. di Pekerjaan menjawab apa yang kamu kerjakan, di Bootcamp menjawab apa yang kamu pelajari -
Contoh format XYZ: *pekerja* X optimasi responsifitas web Y sebesar 20% selama 3 hari Z menggunakan html dan css; *bootcamp* X belajar/mencoba/menerapkan/mastering membangun script dan automation testing Y menemukan 3 bug dalam seminggu Z menggunakan js dan katalon. -
info dalam cv: (sifatnya penting, relevan, mendukung, yang kurang relevan seperti hobi tidak perlu)**header** nama, domisili (prov), no hp dan wa, email, linkedin, porto; **summary** lengkapi sesuai format cv bagi fresh graduate atau experience. penting, masukan hal unik dan relevan pengalaman karir sebelumnya yang mendukung karir mendatang, khusus yang kuliah kelas karyawan perlu disampaikan di cv summary agar tidak salah paham; **education** lengkapi data sekolah/kuliah sesuai format tambahkan materi/pelajaran apa saja yang mendukung karirmu, khusus kelas karyawan diberik ketarangan hari belajar dan sistemnya; **work experience** urutkan dari yang terbaru ke yang terlama, gunakan format XYZ saat menjelaskan jobdesk minimal 4-5 poin, cantumkan pengalaman pkl/kampus merdeka/magang/freelance; **certification/bootcamp** urutkan dari yang terbaru, gunakan format XYZ; **skills** urutkan dari kiri (paling utama) ke kanan setelahnya skill pendukung atau soft skill, misalnya: Skills QA: Katalon, celenium, cypress, postmant, jmeter, regression test, manual testing, documentation, attention to detail; **interest** masukan minat karir yang paling umum dulu, spesialisasi setelahnya, misal: Interest: Frontend developer, Reactjs Developer; **language** urutkan dari kiri ke kanan, level bahasa: native, proficent, fluent, intermediate, beginner contoh Language: indonesia(native), english (toefl cbt scorre 510); **project** jelaskan projek yang pernah kamu buat agar langsung terbaca dan dipahami dengan mudah; **reference** untuk memastikan kredibilitas kandidat aman sehingga perlu melampirkan kontak mentor/atasan kantor sebelumnya
`,
  },
  {
    title: "Porto",
    category: "eduwork",
    content: `- Portofolio yang bagus itu mudah dipahami HR dan user dan membuat kamu diundang interview. Tidak langsung menuju github/behance/gsheet karena orang pertama yang mengeceknya adalah HR/rekruter, tidak semua HR paham IT. Pakai canva jika tidak bisa membuat website.
- Susunan Portofolio: **judul**, misalnya (Nama - Speciality); **about** foto dan summary dari cv; **skill** ada logo dan nama tools tanpa lever bar; **projects** projek1 projek2 dst; **kontak** wa, email, linkedin, **tidak ada form**
- apa yang ditampilkan di project: visual, keterangan deskripsi, tools (pakai apa saja membuatnya), link, dan demo jika ada
`,
  },
  {
    title: "Linkedin",
    category: "eduwork",
    content: `- Linked penting untuk personal branding (digital personal appearance), suport proses rekrutmen, bisa sediakan jasa profesional dan mencari client. Isi profil, aktif dibuka, install, koneksi, yang banyak dan relevan, sharing hal bermanfaat dan profesional, hindari komentar pemicu keributan, hindari posting full cv, no wa, bangun koneksi dengan HR/recruiter/talent acquisition; Orang di bidang industrimu; Orang di perusahaan impian; jangan hanya request koneksi, kirim DM perkenalan lalu klik request.
- sinkronasi cv dan linkedin; foto profesional; foto profil semi formal/casual tidak disarankan foto ijasah; moto diisi kamu siapa jangan dikosongkan; contoh: backend developer di mana (jika fresh graduate) misal Golang Enthusiast; lokasi saat ini di provinsi, negara.
- beberapa hal yang perlu dilengkapi: sinkronasi about cv dan about linkedin dan tambah ajakan misal "mari berkoneksi / terbuka untuk kolaborasi"; pengalaman kerja, jelaskan singkat company-nya, jobdesc, prestasi (opsional), tambah tools atau bahasa pemrograman yang digunakan selama bekerja; skill list. Maksimalkan Easy apply
- jika kamu dihubungi rekruter. baiknya accept request koneksinya, utamakan dibalas tertarik atau tidak agar clear. jika terlewat lumayan lama sampaikan maaf dan tanyakan apakah masih tersedia, jika masih ada terima request dan sampaikan kamu masih ada kontrak hingga kapan. Sebaiknya jangan tanya gaji via linked in karena cukup sensitif.
- 8 job portal: nama.job@gmail.com; linkedIn, glints, jobstreet, tech in asia, indeed, kalibrr, kitalulus, hiretoday; lengkapi data selengkap mungkin: **about** simpulan singkat kesibukan saat ini, pengalaman, skill atau penghargaan yang bisa ditonjolkan; **skill** tulis sebanyaknya; **cv** upload; **ekspektasi salary** pakai rasio dan bisa nego di jakarta kisaran 5 jt
`,
  },
  {
    title: "Riste & Perkenalan",
    category: "eduwork",
    content: `Dapat kerja itu saat ketemu kesempatan jadi wajib minta simulai interview dan menambah porto. ada 3 hal yang dinilai saat interview: 1. Company Trust (pemahaman perusahaan) riset perusahaan misal ownernya, waktu berdiri, kerjanya, jasanya, akan seperti apa kedepannya; 2. self awereness (paham akan preferensi pribadi) milimal 3 kekurangan dan solusi, kenapa pili bidang ini (termasuk jika swetch career) preferensi tunjangan, lingkungan kerja, rekan dan leader; 3. technical skill (pemahaman teknis dan penerapannya) rist jobdesk, apa yang bisa dibantu/solving/suport. soroti bedanya kamu dengan yang kandidat lain. Jelaskan portofolio, cara buatnya dan toolsnya. latihan menjawab teknikal, sedang mendalami apa. -
Penting untuk siapkan konsep perkenalan interview, 5 menit pertama itu menarik perhatian dan menghilangkan keraguan. -
Perkenalan (exprience): sapa, selamat pagi/siang/sore, ucapan terima kasih telah diundang interview di perusahaan... dan posisi..., perkenalkan nama saya... umur... dll..., Saya memiliki pengalaman... tahun sebelumnya..., keterkaitan/hubungan pengetahuan pengalaman di masa lalu dengan karir di masa mendatang..., saya berdomisili di... dan bersedia relokasi ke... (lokasi perusahaan) harapan saya dengan pengalaman... mengerjakan project... pengetahuan... bisa sesuai dengan yang bapak/ibu perlukan. -
Perkenalan (junior): sapa, selamat pagi/siang/sore, ucapan terima kasih telah diundang interview di perusahaan... dan posisi..., perkenalkan nama saya... umur... dll..., belajar apa saja... dan telah membuat project apa saja..., keterkaitan/hubungan pengetahuan pengalaman di masa lalu dengan karir di masa mendatang..., saya berdomisili di... dan bersedia relokasi ke... (lokasi perusahaan) harapan saya dengan pengetahuan... mengerjakan project... pengetahuan... bisa sesuai dengan yang bapak/ibu perlukan. -
Bagaimana yang switch career/pendidikan non it. cari keterkaitan hubungan pengetahuan dan pengalaman di masa lalu yang mendukung karir mendaatang. -
Perlu dipertegas domisili dan relokasi karena hampir sebagian besar perusahaan it masih meminta untuk on site secara default di kota mereka, jadi sebagai junior jangan membatasi diri hanya untuk wfh. -
`,
  },
  {
    title: "Interview Star",
    category: "eduwork",
    content: `Tahapan: opening (pembuka) perkenalan, ice breaking, panduan interview; body (inti) diskusi dengan hr dan user tentang kemampuan teknis dan culture fit; closing (penutup) info progress rekrutmen dan kandidat diberikan kesempatan bertanya. -
Interviewer bertanya dengan BEI (behaviour event interview) fokus pada kondisi dan pengalaman di masa lalu dan mengurangi pengadaian. -
Intervidwee (pelamar) menjawab dengan STAR. menjelaskan detail kondisi/pengalaman dan hemat waktu. S Situation gambaran kondisi/pengalaman seperti apa (apa kapan di mana kenapa), T Task dapat tugas tanggung jawab apa (tim/sendiri, member/lead, target berapa banyak, deadline berapa lama), A Action apa yang dilakukan untuk menyelesaikan task, R Result apakah sudah berhasil dan optimal karena apa dan apa yang dipelajari. -
Misalnya: Situasi: pengalaman Ani, budi, dudi saat semester 5, Task: ada tugas kelompok membuat aplikasi kasir 2 minggu, Action: ani sebagai ketua membagi tugas sesuai keahlian Ani backend budi frontend dan dudi menyusun laporan. Mereka membuat tugas masing masing dan diskusi tiap malam. namun dudi susah dihubungi dan membuat laporan tertinggal. solusinya ani dan budi menemui dudi membuat laporan bersama. Result: setelah dikerjakan bersama selesai tepat waktu hasil A. -
`,
  },
  {
    title: "10 pertanyaan",
    category: "eduwork",
    content: `Perkenalan: Selamat pagi/siang/sore Mas [sebut nama], pertama tama saya ucapkan terima kasih atas undangan interviewnya di perusahaan [nama perusahaan] dengan posisi [nama posisi]. nama saya M Khotami Rais bisa dipanggil kotami umur 25 tahun asal bandung, saya telah mempelajari teknologi terkait MERN stack, Mongodb, Express, React, dan NodeJS, tentu saja html, css dan javascript itu sudah pasti juga beberapa framework css seperti tailwind dan bootstrap, dan beberapa teknologi terkait seperti redux, axios, react router, multer. adapun Projek yang saya buat ada yang datanya diambil dari public API seperti project Pencarian Berita dari NewsApi ada pula yang datanya dari rest API buatan sendiri seperti toko online yang mencakup fitur crud, upload file dan otentikasi. adapun pengalaman saya terkait teknologi, saya pernah belajar membuat aplikasi kasir tapi dengan MS Excel dengan fitur Visual Basic Application VBA untuk toko di rumah. saya berdomisili di bandung dan bersedia relokasi ke lokasi perusahaan eduwork yakni jogja, harapan saya dengan pengetahuan yang saya miliki dan projek yang telah saya buat bisa sesuai dengan posisi yang bapak/ibu perlukan. -
Kekurangan + solusinya? konsentrasi terganggu dengan suara bising di sekitar solusinya dengan musik menggunakan headset/earphone. Ingatan kurang baik solusinya memiliki satu website untuk menyimpan semua yang pernah dipelajari, jadi tidak perlu repot repot mencari sumber di mana saya mendapatkan ilmu baru tapi tinggal melihat ke website itu. tidak percaya diri dengan kemampuan yang kurang maksimal solusinya terus belajar dan memaksimalkan kemampuan. -
Kelebihan senang berbagi apa yang saya tahu selama itu dirasa bermanfaat untuk orang implementasinya semua sourcode yang saya buat disetting public lalu ada website yang berisi semua yang telah saya pelajari. senang membantu rekan/teman menyelesaikan masalahnya implementasinya saat skripsi saya membantu beberapa teman saya dari mulai persiapan sampai lulus demi kepuasan tersendiri. saya cukup idealis saya tidak pernah nyontek saat ujian baik saat sekolah atau kuliah. -
Kenapa memilih berkarir di bidang ini? peluang kerja yang besar, peluang freelance nya besar, tidak ingin tertinggal dengan kemajuan teknologi dan ingin ambil andil di dalamnya. -
Pengalaman kerja tim? saat kkn, saya jadi sekretaris, yang bertugas mencatat, mengumpulkan dan merapikan data untuk buku kkn. -
Pengalaman kerja/kegiatan yang perlu komunikasi? saya jadi ketua osis ada beberapa program seperti isra miraj, agustusan, dan saya mengurus laporan pertanggungjawaban. -
Coba jelaskan projek yang dibuat paling kompleks, kenapa kompleks? dan bagaimana penyelesaiannya? aplikasi toko online, kompleks karena mencakup semua fitur crud, upload file, relasi, otentikasi, otorisasi. -
Setelah belajar di bootcamp apa yang dulu tidak bisa sekarang bisa? proteksi akun mongodb lokal dan penambahan role, menangani middleware, memahami redux, upload file dengan multer, vercel. -
Apa yang masih belum kamu kuasai dan sedang belajar apa saat ini? axios interceptor, cors, firebase. -
Bedanya kamu dengan kandidat lain dan kenapa kami harus memilih kamu? saya bisa dibilang cukup ideal. saya punya prinsip kuat untuk menentukan arah tujuan saat berada di suatu lembaga. saat sekolah saya berprinsip siswa yang terbaik adalah siswa yang peringkatnya tertinggi sehingga saya belajar dan mendapat pringkat tertinggi. saat kuliah sastra arab saya berprinsip mahasiswa baik adalah mahasiswa yang punya ipk tinggi, awalnya kemampuan bahasa arab saya cukup buruk tapi saat lulus saya mendapat ipk tinggi. adapun sebagai seorang pencari kerja saya berprinsip bahwa pekerja/pegawai yang baik adalah pekerja yang memiliki keahlian mendalam di bidangnya sehingga bisa menyelesaikan setiap tugas secara cepat dengan hasil yang baik. saya rasa kemampuan saya di bidang ini sudah cukup mendalam, namun jika dipandang belum setidaknya saya memiliki arah yang jelas untuk mencapai tujuan, yakni terus meningkatkan kapasitas diri hingga menjadi lebih layak. -
`,
  },
  {
    title: "Personality",
    category: "eduwork",
    content: `Tubuh dan fikiran fit, rilex, jangan banyak berfikir. jika banyak berpikir mengebaik personality diri, banyak yang kamu tanyakan pada diri sehingga bingung dan menyebabkan misread personality diry. -
Baca instruksi dengan jelas. jawab jujur dan tetap perhatikan profesionalitas dan jaga work ethic. posisikan kamu di ranah perusahaan bukan individu atau sosial. -
Posisikan dirimu sebagai role yang kamu pilih. bayangkan kamu tempati posisi yang diinginkan untuk menentukan apakah jawaban yang dipilih cocok dengan sifat atau kelebihan yang harus ada pada role yang diinginkan. -
Jaga konsistensi pilihan. -
Jangan terlalu banyak menjawab skor dominan. contohnya pada kata sangat setuju atau sangat tidak setuju. jawab secara merata dan disesuaikan personality, jangan terlalu sering jawab netral karena akan mempengaruhi persepsi orang lain terhadap diri kamu sebagai orang yang indecisive atau sulit untuk memutuskan. -
Pilih jawaban paling baik dan mengandung positive traits, yakni bentuk positif dalam diri, hal yang cenderung positif. jika ada pertanyaan menjebak, di mana semua terdengan benar benar saja, petimbangkan jawaban yang cenderung memiliki dampak positif untuk kamu dan orang lain bukan hanya netral dan memiliki korelasi baik dengan posisi yang kamu daftar. -
MBTI Personaliti adalah salah satu contoh tes personality. dikembagkan 1940 an oleh Katharine Cook brigs dan putrinya. dikembangkan berdasarkan tipologi kepribadian yang diciptakan oleh psikoanalis Carl Jungs yang sangat menarik perhatian Briggs dan Mayers. Tes ini menilai 4 domain dari keperibadian yang masing masing terbagi dua, kombinasi dari jenis jenisnya yang akan menentukan keperibadian mu. -
Contoh Tes Personality: https://www.16personalities.com/free-personality-test -
`,
  },
  {
    title: "Offering",
    category: "eduwork",
    content: `        hal yang perlu dipertimbagkan: basic salary, kontrak kerja, benefit package, carrer path, jarak tempuh, budaya dan
        lingkungan kerja, kondisi perusahaan, jam kerja, atasan langsung, jaga hubungan baik. <b>basic salari</b> pastikan
        sudah memenuhi kebutuhan, <b>kontrak kerja</b> working agreement berhak ditanyakan kepada perusahaan sebelum mulai
        kerja. jika kamu bertemu kasus penerapan paid pinalty, ajukan negosiasi untuk menggantikannya dalam 1-2 bulan notice
        period sebelum officially resign. <b>benefit package</b> perhatikan tunjangannya, misal bpjs kesehatan,
        ketenagakerjaan, thr, hak cuti dsb. <b>career path</b> ada kejelasan jenjang karir yang diberikan perusahaan, untuk
        junior, bertahanlah minimal 1 tahun. <b>jarak tempuh</b>. <b>budaya dan lingkungan kerja</b> riset kecil kecilan
        mengenai perusahaan, misalnya di google review, glassdor, Qerja, linkedin, bisnis dan produk. misalnya ada isu
        resesi, pastikan perushaan ini bisa bertahan. <b>jam kerja</b> ada yang terapkan fixed time jam 9 - 18, idealnya 40
        jam per minggu dengan pembagian senin - jumat 5 hari kerja. <b>atasan langsung</b> cari di linked in, kamu akan
        bekerja dengan siapa, stalking. <b>jaga hubungan baik</b> jika setelah dipertimbangkan kamu putuskan untuk menolak,
        jaga hubungan baik, berik info kontak, sampaikan kamu tetap tertarik ingin mendapatkan informasi terbaru tentang
        peluang di masa depan. ini juga bisa jadi cara membangun jaringan profesional dengan perekrut. -
        Jika ada kesulitan, konsultasi dengan hrd dan internal eduwork, bagikan keluh kesah. jangan lupa dokumentasi rekam.
        jika diterima, screenshoot buktinya dan segera beri tahu HRD
`,
  },
  {
    title: "Kode etik resignation",
    category: "eduwork",
    content: `Sama seperti daftar kerja, resignation juga butuh waktu 1-2 bulan atau lebih agar diterima (notice period). -
Hindari resign mendadak, beritahu hrd (siapkan surat, minta sesi diskusi dengan hrd, lalu serahkan surat, minta izin hrd untuk dapat beri tahu perihal resignation ke atasan, diskusi verbal dengan atasan, beritahu juga surat yang telah diserahkan ke HRD). -
Selesaikan tanggungjawab, handover, penyerahan materi, kembalikan fasilitas kantor. -
Tinggalkan kesan positif, siapa tahu bertemu lagi, jangan lupa pamitan dengan rekan kerja biar mereka tahu. -
`,
  },
  {
    title: "git github",
    category: "vcs",
    content: `Git adalah salah satu VCS, oleh Linus Torvalds mengatur source code fleksibel, revisi, kolaborasi, sharing
          rekaman snapshot, bisa kembali ke perubahan sebelumnya,{" "}
          <a href="https://git-scm.com/" target="blank" rel="noopener">
            download git; Ada 3 wilayah: Working Tree, Staging Area dan History; git basic, git branch, git guil;
            Mencatat dan trancking seluruh perubahan versi source code, kolaborasi open source; jenisnya github, gitlab,
          bitbucket; tools: git, github, sourcetree, vscode, lightshoot, grepper, screen o matic,
          Git command: git -v; pwd; cd; ls; q; mkdir new_dir; cd new_dir; git init; git config --list; git --list
          --show-origin; git config --global user.name [your_username]; git config --global user.email[your_email]
          git add [new_files]; git add .; git status git commit -m; -am; git config; git branch; git help; git log; log
          -n; index.html; --oneline --graph; git checkout [5 digit hash][file_name]; git show [hash]; git checkout [hash]; git clean -f; git restore [file_name];
ketika folder di init maka otomatis menjadi branch master/main; semua yang dilakukan di sutu branch tidak akan berefek pada branch lain;
git branch; [new_branch]; git log; log --all --decorate --oneline --graph; git config --global alias.graph log --all; decorate --onelie --graph;
alias graph="log --all --decorate --oneline --graph"; git checkout; git merge; git conflict;
`,
  },
  {
    title: "useState",
    category: "react js",
    content: `useState adalah salah satu hook react yang memungkinkan menambah state lokal ke functional component. sebelumnya
        hanya class component yang dapat memiliki state namun dengan useState functional componen juga bisa memiliki staete.
        State adalah object khusus yang bisa diinisialisasi dan dinamis yang menyimpan data atau informasi yang hanya bisa
        diakses di komponen terkait. state: Variabel yang menyimpan nilai state saat ini. setState: Fungsi yang digunakan untuk memperbarui nilai state.
        initialState: Nilai awal dari state, yang bisa berupa tipe data apapun (string, number, object, array, dll).`,
  },
  {
    title: "useEffect",
    category: "react js",
    content: `useEffect (sideeffect/effect) adalah hook react yang digunakan untuk menangai efek samping dalam functional
          component. hook ini menggantikan lifecycle class component. Side effect adalah operasi yang mempengaruhi sesuatu di
          luar ruang lingkup fungsi seperti <b>pemanggilan api, event listener, manipulasi dom, time atau interval.</b>
          Effect dependensi adalah array berisi identifier barupa variable atau fungsi yang tentukan kapan fungsi dipanggil.
          jika tidak ada maka fungsi effect dipanggil saat komponen terdetensi rerender. jika array kosong effect dipanggil
          saat render pertama. Render loop terjadi saat sebuah effect mengubah nilai dependensinya sendiri.
          Clean up function adalah return berupa fungsi dari sebuah effect yang akan dijalankan saat komponen tidak lagi
          digunakan. Banyak yang menyebut mirip componentWillUnmount namun sebenarnya berbeda. componentWillUnmount
          dijalankan ketika komponen dihapus dari interface sedangkan clean up akan dipanggil ketika salah satu nilai dari
          dependecy effect berubah. urutan eksekusi: render, effect, perubahan state, re-render dengan state baru, clean up
          function, effect selanjutnya dijalankan`,
  },
  {
    title: "memoisasi",
    category: "react js",
    content: `memoisasi komponen adalah teknik dalam react untuk meningkatkan performa aplikasi dengan menghindari render ulang
        yang tidak perlu. melalui penyimpanan dan pembanding hasil render sebelumnya.
        saat komponen render ulang, react melakukan sejumlah pekerjaan di belakang layar, termasuk membandingkan virtual dom
        untuk menentukan apakah perlu perbarui tambilan di aktuan DOM. proses ini menjadi malah secara komputasi apalagi
        logikanya kompleks. 
        ketika komponen dibungkus denga memo react secara otomatis melakukan memoisasi komponen tersebut dan memutuskan
        apakah perlu dirender ulang berdasarkan perubahan props atau tidak. 
        proses yang mahal secara komputasi mengacu pada operasi atau perhitungan yang membutuhkan banyak sumber daya
        komputasi, seperti waktu CPU atau memori. Dalam konteks React, ini dapat merujuk pada operasi yang memakan waktu saat
        merender komponen, seperti melakukan perhitungan yang kompleks atau memproses banyak data.`,
  },
  {
    title: "memo vs useMemo",
    category: "react js",
    content: `memo dan useMemo, keduanya berfungsi untuk memoisasi komponen. memo memoisasi keseluruhan komponen. useMemo memoisasi
        nilai di dalam komponen. memo hanya memoisasi referensi dari props yang diterima oleh komponen tersebut. nilai lokal
        tidak akan dimemoisasi, jika ingin memoisasi nilai lokal maka gunakan useMemo.`,
  },
  {
    title: "useMemo vs useCallback",
    category: "react js",
    contet: `useMemo dan useCallback sama-sama untuk memoisasi, bedanya useMemo untuk memoisasi value sedangkan useCallback untuk
        memoisasi function.`,
  },
  {
    title: "useReducer",
    category: "react js",
    contet: `useReducer digunakan untuk mengelola state dengan skala yang lebih luas dibandingkan dengan yang dilakukan useState, dengan kata lain, useReducer adalah state berskala lebih besar dari useState`,
  },
  {
    title: "useContext",
    category: "react js",
    content: "useContent adalah state management lintas komponen, biasanya dipadukan denga useReducer",
  },
];
