// mockData.ts
import type { Organization, Project, ProjectStatus, ProjectUpdate, Supporter } from '$lib/types';

export const organizations: Organization[] = [
 {
   id: "org1",
   name: "Eğitim Derneği",
   description: "Eğitimde fırsat eşitliği için çalışıyoruz",
   logo: "/images/edu-logo.png",
   email: "info@egitimder.org",
   phone: "+90 212 555 0101",
   address: "Şişli, İstanbul",
   website: "www.egitimder.org",
   socialMedia: {
     facebook: "egitimder",
     instagram: "egitimder"
   },
   verified: true,
   createdAt: new Date("2023-01-15"),
   projects: ["proj1", "proj2"]
 },
 {
   id: "org2",
   name: "Doğa Koruma Vakfı",
   description: "Doğal yaşamı korumak için projeler geliştiriyoruz",
   logo: "/images/nature-logo.png",
   email: "iletisim@dogakoruma.org",
   phone: "+90 216 444 0202",
   address: "Kadıköy, İstanbul",
   verified: true,
   createdAt: new Date("2023-03-20"),
   projects: ["proj3"]
 }
];

export const projects: Project[] = [
 {
   id: "proj1",
   mainImage: "src/lib/assets/images/civciv.jpg",
   organizationId: "org1",
   title: "Köy Okulları İçin Kütüphane",
   description: "10 köy okuluna kütüphane kuruyoruz",
   longDescription: "Türkiye'nin çeşitli bölgelerindeki 10 köy okuluna...",
   category: "education",
   target: 100000,
   raised: 65000,
   currency: "TRY",
   startDate: new Date("2024-01-01"),
   endDate: new Date("2024-06-30"),
   status: "active",
   images: ["/images/library1.jpg", "/images/library2.jpg"],
   updates: [
     {
       id: "upd1",
       content: "İlk 3 kütüphane kurulumu tamamlandı!",
       images: ["/images/update1.jpg"],
       createdAt: new Date("2024-02-15")
     }
   ],
   supporters: [
     {
       id: "sup1",
       amount: 1000,
       message: "Çocuklarımız için",
       anonymous: false,
       createdAt: new Date("2024-01-20")
     }
   ],
   createdAt: new Date("2023-12-15")
 },
 {
   id: "proj2",
   organizationId: "org1",
   mainImage: "src/lib/assets/images/civciv.jpg",
   title: "Burs Programı 2024",
   description: "100 öğrenciye eğitim bursu",
   longDescription: "Üniversite öğrencilerine 12 ay boyunca...",
   category: "education",
   target: 500000,
   raised: 150000,
   currency: "TRY",
   startDate: new Date("2024-01-01"),
   endDate: new Date("2024-12-31"),
   status: "active",
   images: ["/images/scholarship1.jpg"],
   updates: [],
   supporters: [],
   createdAt: new Date("2023-12-20")
 }
];

export const stats = {
  totalDonations: '₺815.000',
  projectCount: 45,
  activeOrgs: 12,
  volunteers: 250
 };