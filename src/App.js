import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './components/ui/card';
import { Button } from './components/ui/button';
import { Check, Camera, Video, Users, Clock, MapPin, Phone, Mail, Instagram, Facebook, Info } from 'lucide-react';


export default function BalinesePhotoVideoPricelist() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const whatsappNumber = '6285137871816';
  const instagramUrl =
    'https://www.instagram.com/antaracapture?igsh=MWdyNjkxdnh1NGczMg==';

  const generateWhatsAppLink = (packageName, price) => {
    const message = `Halo AntaraCapture! Saya tertarik dengan ${packageName} (${price}). Mohon info lebih lanjut.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
  };

  const packages = [
    {
      id: 1,
      category: 'wedding',
      name: 'Paket Pernikahan Gold',
      price: 'Rp 1.850.000',
      originalPrice: null,
      duration: '5 Jam',
      features: [
        '1 Fotografer Profesional',
        '1 Videografer',
        '200+ Foto Editing',
        'Video Highlight 5 Menit',
        'Semua File Mentah',
        'USB Flashdisk',
        'Online Gallery',
      ],
      popular: true,
      discount: null,
    },
    {
      id: 2,
      category: 'wedding',
      name: 'Paket Pernikahan Silver',
      price: 'Rp 1.200.000',
      originalPrice: null,
      duration: '4 Jam',
      features: [
        '1 Fotografer Profesional',
        '150+ Foto Editing',
        'Video Dokumentasi 3 Menit',
        'Semua File Mentah',
        'USB Flashdisk',
        'Online Gallery',
      ],
      popular: false,
      discount: null,
    },
    {
      id: 3,
      category: 'metatah',
      name: 'Paket Metatah Gold',
      price: 'Rp 1.500.000',
      originalPrice: null,
      duration: '5 Jam',
      features: [
        '1 Fotografer Profesional',
        '1 Videografer',
        '200+ Foto Editing',
        'Video Dokumentasi 5 Menit',
        'Liputan Lengkap Upacara',
        'Semua File Mentah',
        'USB Flashdisk',
        'Online Gallery',
      ],
      popular: true,
      discount: null,
    },
    {
      id: 4,
      category: 'metatah',
      name: 'Paket Metatah Silver',
      price: 'Rp 1.050.000',
      originalPrice: null,
      duration: '4 Jam',
      features: [
        '1 Fotografer Profesional',
        '150+ Foto Editing',
        'Video Dokumentasi 3 Menit',
        'Liputan Momen Utama',
        'Semua File Mentah',
        'USB Flashdisk',
        'Online Gallery',
      ],
      popular: false,
      discount: null,
    },
    {
      id: 5,
      category: 'tigabulanan',
      name: 'Paket 3 Bulanan Gold',
      price: 'Rp 1.400.000',
      originalPrice: null,
      duration: '3 Jam',
      features: [
        '1 Fotografer Profesional',
        '1 Videografer',
        '150+ Foto Editing',
        'Video Highlight 3 Menit',
        'Dokumentasi Acara Lengkap',
        'Semua File Mentah',
        'USB Flashdisk',
        'Online Gallery',
      ],
      popular: false,
      discount: null,
    },
    {
      id: 6,
      category: 'tigabulanan',
      name: 'Paket 3 Bulanan Silver',
      price: 'Rp 950.000',
      originalPrice: null,
      duration: '2 Jam',
      features: [
        '1 Fotografer Profesional',
        '100+ Foto Editing',
        'Video Dokumentasi 2 Menit',
        'Dokumentasi Momen Spesial',
        'Semua File Mentah',
        'USB Flashdisk',
        'Online Gallery',
      ],
      popular: false,
      discount: null,
    },
    {
      id: 7,
      category: 'melaspas',
      name: 'Paket Melaspas Gold',
      price: 'Rp 1.300.000',
      originalPrice: 'Rp 1.600.000',
      duration: '4 Jam',
      features: [
        '1 Fotografer Profesional',
        '1 Videografer',
        '180+ Foto Editing',
        'Video Dokumentasi 4 Menit',
        'Liputan Prosesi Lengkap',
        'Semua File Mentah',
        'USB Flashdisk',
        'Online Gallery',
      ],
      popular: true,
      discount: '19% OFF',
    },
    {
      id: 8,
      category: 'melaspas',
      name: 'Paket Melaspas Silver',
      price: 'Rp 899.000',
      originalPrice: 'Rp 1.200.000',
      duration: '3 Jam',
      features: [
        '1 Fotografer Profesional',
        '120+ Foto Editing',
        'Video Dokumentasi 3 Menit',
        'Liputan Momen Penting',
        'Semua File Mentah',
        'USB Flashdisk',
        'Online Gallery',
      ],
      popular: false,
      discount: '25% OFF',
    },
  ];

  const categories = [
    { id: 'all', name: 'Semua Paket' },
    { id: 'wedding', name: 'Pernikahan' },
    { id: 'metatah', name: 'Metatah' },
    { id: 'tigabulanan', name: '3 Bulanan' },
    { id: 'melaspas', name: 'Melaspas' },
  ];

  const filteredPackages =
    selectedCategory === 'all'
      ? packages
      : packages.filter((pkg) => pkg.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-amber-50/40">
        {/* Dekor lingkaran – sembunyikan di mobile */}
        <div className="pointer-events-none absolute inset-0 opacity-5 hidden md:block">
          <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full border-4 border-amber-500" />
          <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full border-4 border-amber-500" />
          <div className="absolute -bottom-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full border-4 border-amber-500" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-14 sm:px-6 lg:px-8 lg:py-20 text-center">
          {/* Ornament icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-xl" />
              <div className="relative rounded-full border-4 border-amber-400/30 bg-gradient-to-br from-amber-100 to-amber-50 p-4 sm:p-6 shadow-lg">
                <div className="flex items-center gap-3 text-amber-600">
                  <Camera className="h-8 w-8 sm:h-9 sm:w-9" />
                  <div className="h-8 w-[2px] bg-amber-400 sm:h-10" />
                  <Video className="h-8 w-8 sm:h-9 sm:w-9" />
                </div>
              </div>
            </div>
          </div>

          {/* Logo */}
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-2xl" />
              <img
                src='/Antaracapture.png'
                alt="AntaraCapture"
                className="relative mx-auto h-32 w-32 object-contain drop-shadow-2xl sm:h-40 sm:w-40"
              />
            </div>
          </div>

          {/* Title */}
          <div className="mb-4">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400 sm:w-16" />
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400 sm:w-16" />
            </div>

            <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 bg-clip-text text-transparent">
              Antaracapture
            </h1>

            <div className="mt-3 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400 sm:w-16" />
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400 sm:w-16" />
            </div>
          </div>

          {/* Tagline */}
          <p className="mb-6 max-w-2xl font-serif italic text-lg text-amber-800 sm:text-xl md:text-2xl">
            "Selalu Ada Di Antara Moment Kalian"
          </p>

          {/* Deskripsi */}
          <div className="mb-8 w-full max-w-3xl">
            <Card className="border-amber-200 rounded-[28px] bg-white/85 shadow-[0_18px_40px_rgba(0,0,0,0.06)] backdrop-blur">
              <CardContent className="pt-6">
                <p className="leading-relaxed text-sm sm:text-base md:text-lg text-foreground/90">
                  Kami adalah fotografer dan videografer profesional yang
                  berspesialisasi dalam dokumentasi upacara adat Bali,
                  pernikahan tradisional, dan acara-acara budaya. Dengan
                  pemahaman mendalam tentang tradisi Bali, kami mengabadikan
                  setiap momen dengan penuh hormat dan keindahan.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <Button
            size="lg"
            className="
              inline-flex items-center justify-center gap-3
              rounded-full px-8 py-5
              text-sm sm:text-base font-semibold
              bg-gradient-to-r from-amber-500 to-amber-600 text-white
              shadow-lg hover:from-amber-600 hover:to-amber-700 hover:shadow-xl
              transition-all duration-300
            "
            onClick={() =>
              window.open(
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  'Halo AntaraCapture! Saya ingin menanyakan paket foto/video untuk acara saya.'
                )}`,
                '_blank'
              )
            }
          >
            <Phone className="w-5 h-5" />
            <span>Hubungi Kami Sekarang</span>
          </Button>
        </div>
      </section>


{/* LAYANAN */}
<section className="bg-primary-foreground">
  <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-15">
    <h2 className="mb-10 text-center text-3xl font-bold sm:text-4xl">
      Layanan Kami
    </h2>

    <div className="grid gap-1 lg:py-5 text-center sm:grid-cols-2 lg:grid-cols-4">
      {/* Pernikahan */}
      <div className="flex flex-col items-center">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-amber-50 to-amber-200 shadow-sm">
          <Users className="h-10 w-10 text-amber-500" />
        </div>
        <h3 className="mb-3 text-xl font-semibold">Pernikahan</h3>
        <p className="max-w-xs text-sm text-muted-foreground">
          Dokumentasi lengkap upacara pernikahan tradisional Bali dengan
          kesakralan dan keindahan.
        </p>
      </div>

      {/* Metatah */}
      <div className="flex flex-col items-center">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-amber-50 to-amber-200 shadow-sm">
          <Camera className="h-10 w-10 text-amber-500" />
        </div>
        <h3 className="mb-3 text-xl font-semibold">Metatah</h3>
        <p className="max-w-xs text-sm text-muted-foreground">
          Dokumentasi upacara metatah (potong gigi) dengan detail dan
          momen-momen sakral.
        </p>
      </div>

      {/* 3 Bulanan */}
      <div className="flex flex-col items-center">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-amber-50 to-amber-200 shadow-sm">
          <Video className="h-10 w-10 text-amber-500" />
        </div>
        <h3 className="mb-3 text-xl font-semibold">3 Bulanan</h3>
        <p className="max-w-xs text-sm text-muted-foreground">
          Dokumentasi acara tiga bulanan bayi dengan momen-momen istimewa
          dan penuh makna.
        </p>
      </div>

      {/* Melaspas */}
      <div className="flex flex-col items-center">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-amber-50 to-amber-200 shadow-sm">
          <Users className="h-10 w-10 text-amber-500" />
        </div>
        <h3 className="mb-3 text-xl font-semibold">Melaspas</h3>
        <p className="max-w-xs text-sm text-muted-foreground">
          Dokumentasi upacara melaspas bangunan atau rumah dengan prosesi
          adat yang lengkap.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* FILTER KATEGORI */}
<section className="bg-primary-foreground">
  <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
    <div className="flex flex-wrap justify-center gap-4">
      {categories.map((category) => {
        const isActive = selectedCategory === category.id;

        return (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={[
              "min-w-[140px] rounded-md border px-6 py-2 text-sm sm:text-base font-medium transition-colors",
              isActive
                ? "border-amber-600 bg-amber-600 text-white hover:bg-amber-700 hover:border-amber-700"
                : "border-amber-700 bg-transparent text-amber-800 hover:bg-amber-50"
            ].join(" ")}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  </div>
</section>

      {/* PAKET HARGA */}
      <section className="bg-primary-foreground border-t border-amber-100">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="mb-3 text-center text-3xl font-bold sm:text-4xl text-foreground">
            Paket Harga
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-muted-foreground sm:text-base">
            Pilih paket yang sesuai dengan kebutuhan acara Anda. Semua paket dapat
            disesuaikan dengan request khusus Anda.
          </p>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredPackages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`relative flex h-full flex-col justify-between rounded-3xl border-2 bg-[#FFF8EC] px-6 py-8 md:px-8 md:py-10
                  ${
                    pkg.popular
                      ? 'border-amber-500 shadow-[0_18px_40px_rgba(0,0,0,0.08)]'
                      : 'border-amber-200'
                  }`}
              >
                {/* Badge Paling Populer */}
                {pkg.popular && (
                  <div className="absolute -top-7 lg:py-3 left-1/2 -translate-x-1/2">
                    <span className="inline-block rounded-full bg-amber-500 px-8 py-2 text-xs font-semibold tracking-wide text-amber-50 shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
                      Paling Populer
                    </span>
                  </div>
                )}

                {/* Badge Diskon (kalau ada) */}
                {pkg.discount && (
                  <div className="absolute -top-4 -right-4">
                    <span className="rounded-full bg-destructive px-3 py-1 text-xs font-semibold text-destructive-foreground">
                      {pkg.discount}
                    </span>
                  </div>
                )}

                {/* Header paket */}
                <CardHeader className="pt-4 md:pt-6">
                  <CardTitle className="text-[1.4rem] md:text-2xl font-semibold text-foreground">
                    {pkg.name}
                  </CardTitle>
                  <CardDescription className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {pkg.duration}
                  </CardDescription>
                </CardHeader>

                {/* Harga + fitur */}
                <CardContent className="pt-2">
                  <div className="mb-5">
                    {pkg.originalPrice && (
                      <p className="mb-1 text-sm text-muted-foreground line-through">
                        {pkg.originalPrice}
                      </p>
                    )}
                    <p className="text-[2.4rem] md:text-[2.8rem] font-extrabold leading-tight tracking-tight text-amber-500">
                      {pkg.price}
                    </p>
                  </div>

                  <ul className="space-y-3 text-[0.95rem] md:text-base text-foreground">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-[3px] flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-100">
                          <Check className="h-3 w-3 text-amber-500" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                {/* Tombol */}
                <CardFooter className="mt-6 pt-2">
                  <Button
                    className={`w-full rounded-full text-sm sm:text-base font-semibold tracking-wide py-3
                      ${
                        pkg.popular
                          ? 'bg-amber-500 text-amber-50 hover:bg-amber-600'
                          : 'border border-amber-500 text-amber-600 hover:bg-amber-50'
                      }`}
                    variant={pkg.popular ? 'default' : 'outline'}
                    onClick={() =>
                      window.open(
                        generateWhatsAppLink(pkg.name, pkg.price),
                        '_blank'
                      )
                    }
                  >
                    Pilih Paket Ini
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          </div>
        </section>
  

        {/* Catatan */}
        <div className="mt-12">
          <Card className="relative mx-auto max-w-5xl overflow-hidden border border-amber-100 bg-gradient-to-r from-amber-50/80 via-muted/60 to-amber-50/80 shadow-sm">
            {/* Dekorasi blur */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-40 w-40 rounded-full bg-amber-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 -bottom-24 h-40 w-40 rounded-full bg-amber-200/30 blur-3xl" />

            <CardContent className="relative grid gap-6 px-6 py-8 sm:px-8 md:grid-cols-[auto,1fr]">
              {/* Header catatan */}
              <div className="flex flex-col items-center md:items-start">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-white shadow-md">
                  <Info className="h-6 w-6" />
                </div>
                <p className="text-lg font-semibold text-amber-800 sm:text-xl">
                  Catatan Penting
                </p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  Mohon dibaca terlebih dahulu sebelum melakukan pemesanan.
                </p>
              </div>

              {/* List catatan */}
              <ul className="grid gap-3 text-xs text-foreground/80 sm:text-sm md:grid-cols-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/10">
                    <Check className="h-3 w-3 text-amber-600" />
                  </span>
                  <span>Harga dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya.</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/10">
                    <Check className="h-3 w-3 text-amber-600" />
                  </span>
                  <span>Tersedia paket custom yang bisa disesuaikan dengan kebutuhan Anda.</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/10">
                    <Check className="h-3 w-3 text-amber-600" />
                  </span>
                  <span>DP minimal 30% diperlukan untuk memastikan booking tanggal.</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/10">
                    <Check className="h-3 w-3 text-amber-600" />
                  </span>
                  <span>Pembayaran dapat dicicil hingga H-7 sebelum acara berlangsung.</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/10">
                    <Check className="h-3 w-3 text-amber-600" />
                  </span>
                  <span>Gratis konsultasi konsep dan survey lokasi sebelum hari H.</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/10">
                    <Check className="h-3 w-3 text-amber-600" />
                  </span>
                  <span>Pengiriman file selesai dalam waktu 14–30 hari kerja.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>


          {/* KONTAK */}
      <section className="bg-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-14 text-center sm:px-6 lg:px-8 lg:py-16">
          {/* Judul + subjudul */}
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Hubungi Kami
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Siap mengabadikan momen berharga Anda? Hubungi kami sekarang untuk
            konsultasi gratis!
          </p>

          {/* Kartu kontak */}
          <div className="mx-auto mt-10 grid max-w-3xl gap-6 md:grid-cols-2">
            {/* WhatsApp */}
            <Card
              className="flex rounded-[28px] h-full flex-col border-2 border-amber-100 bg-primary-foreground shadow-[0_18px_40px_rgba(0,0,0,0.06)] transition-transform hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(0,0,0,0.09)] cursor-pointer"
              onClick={() =>
                window.open(`https://wa.me/${whatsappNumber}`, '_blank')
              }
            >
              <CardContent className="flex flex-1 flex-col items-center justify-center gap-4 pt-10 pb-6">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-50">
                  <Phone className="h-10 w-10 text-green-600" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground">WhatsApp</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    +62 851-3787-1816
                  </p>
                </div>
              </CardContent>

              {/* Footer gaya bar di bawah kartu */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(`https://wa.me/${whatsappNumber}`, '_blank');
                }}
                className="w-full border-t border-amber-100 bg-primary-foreground px-6 py-3 text-center text-sm font-semibold text-foreground hover:bg-amber-50"
              >
                Chat Sekarang
              </button>
            </Card>

            {/* Instagram */}
            <Card
              className="flex rounded-[28px] h-full flex-col border-2 border-amber-100 bg-primary-foreground shadow-[0_18px_40px_rgba(0,0,0,0.06)] transition-transform hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(0,0,0,0.09)] cursor-pointer"
              onClick={() => window.open(instagramUrl, '_blank')}
            >
              <CardContent className="flex flex-1 flex-col items-center justify-center gap-4 pt-10 pb-6">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-purple-50 to-pink-50">
                  <Instagram className="h-10 w-10 text-pink-600" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground">Instagram</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    @antaracapture
                  </p>
                </div>
              </CardContent>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(instagramUrl, '_blank');
                }}
                className="w-full border-t border-amber-100 bg-primary-foreground px-6 py-3 text-center text-sm font-semibold text-foreground hover:bg-amber-50"
              >
                Lihat Portfolio
              </button>
            </Card>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground py-6 text-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold">AntaraCapture</h3>
            <p className="text-xs text-background/80 sm:text-sm">
              Akan Selalu Ada Di Antara Moment Kalian
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-background hover:bg-background/10 hover:text-background/80"
              onClick={() => window.open(instagramUrl, '_blank')}
            >
              <Instagram className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-background hover:bg-background/10 hover:text-background/80"
              onClick={() =>
                window.open(`https://wa.me/${whatsappNumber}`, '_blank')
              }
            >
              <Phone className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="mt-4 border-t border-background/20 pt-2 text-center text-xs text-background/60">
          <p>&copy; 2025 AntaraCapture. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
