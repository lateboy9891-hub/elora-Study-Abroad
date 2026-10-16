export interface Testimonial {
  id: string;
  name: string;
  nameBn: string;
  hometown: string;
  hometownBn: string;
  university: string;
  universityBn: string;
  program: string;
  programBn: string;
  country: string;
  countryFlag: string;
  countryId: string;
  intake: string;
  avatar: string;
  rating: number;
  highlight: string;
  highlightBn: string;
  reviewEn: string;
  reviewBn: string;
  visaStatus: string;
  visaStatusBn: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'tanvir-canada',
    name: 'Tanvir Ahmed',
    nameBn: 'তানভীর আহমেদ',
    hometown: 'Dhaka, Bangladesh',
    hometownBn: 'ঢাকা, বাংলাদেশ',
    university: 'University of Windsor',
    universityBn: 'ইউনিভার্সিটি অব উইন্ডসর',
    program: 'Master of Applied Computing (MAC)',
    programBn: 'মাস্টার্স অব অ্যাপ্লায়েড কম্পিউটিং (ম্যাক)',
    country: 'Canada',
    countryFlag: '🇨🇦',
    countryId: 'canada',
    intake: 'Fall Intake',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    highlight: 'Got Canadian Student Visa in 28 Days',
    highlightBn: 'মাত্র ২৮ দিনে কানাডিয়ান স্টাডি পারমিট প্রাপ্তি',
    reviewEn: 'Coming from a non-CS background originally, other agencies told me Canada was impossible. Elora Study Abroad reviewed my transcript, helped me craft a genuine SOP explaining my career shift, and guided every financial document without hidden charges. I am now in Ontario!',
    reviewBn: 'আমার ব্যাকগ্রাউন্ড পরিবর্তনের কারণে অন্য এজেন্সিগুলো কানাডার ব্যাপারে নিরুৎসাহিত করেছিল। ইলোরা টিম আমার প্রোফাইল গভীরভাবে বিশ্লেষণ করে নিখুঁত এসওপি তৈরি ও স্বচ্ছ ব্যাংক ডকুমেন্টেশনে সাহায্য করে। কোন গোপন ফি ছাড়াই আমি উইন্ডসরে ভিসা পেয়েছি।',
    visaStatus: 'Visa Approved (SDS Category)',
    visaStatusBn: 'ভিসা অনুমোদিত (এসডিএস ক্যাটাগরি)'
  },
  {
    id: 'nusrat-uk',
    name: 'Nusrat Jahan',
    nameBn: 'নুসরাত জাহান',
    hometown: 'Chittagong, Bangladesh',
    hometownBn: 'চট্টগ্রাম, বাংলাদেশ',
    university: 'University of Greenwich',
    universityBn: 'ইউনিভার্সিটি অব গ্রিনউইচ',
    program: 'MSc International Business & Management',
    programBn: 'এমএসসি ইন্টারন্যাশনাল বিজনেস অ্যান্ড ম্যানেজমেন্ট',
    country: 'United Kingdom',
    countryFlag: '🇬🇧',
    countryId: 'uk',
    intake: 'January Intake',
    avatar: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    highlight: '£3,000 International Merit Scholarship',
    highlightBn: '৩,০০০ পাউন্ড আন্তর্জাতিক মেধা স্কলারশিপ',
    reviewEn: 'The team at Elora helped me prepare thoroughly for the credibility interview with mock sessions that simulated actual UKVI questions. Their counselor in Dhaka gave me continuous updates until CAS issuance and biometric appointment. Highly recommend their honest guidance.',
    reviewBn: 'ইউকেভিআই ক্রেডিবিলিটি ইন্টারভিউয়ের জন্য ইলোরার মক সেশনগুলো অসাধারণ ছিল। ঢাকা অফিসের কাউন্সেলররা সিএএস লেটার এবং বায়োমেট্রিক পর্যন্ত প্রতিটি ধাপে নিয়মিত আপডেট দিয়েছিলেন। তাদের শতভাগ স্বচ্ছতা প্রশংসনীয়।',
    visaStatus: 'Visa Granted • 2-Yr Post-Study Work',
    visaStatusBn: 'ভিসা অনুমোদিত • ২ বছর পিএসডব্লিউ'
  },
  {
    id: 'raihan-usa',
    name: 'Raihan Kabir',
    nameBn: 'রায়হান কবির',
    hometown: 'Sylhet, Bangladesh',
    hometownBn: 'সিলেট, বাংলাদেশ',
    university: 'University of Texas at Arlington',
    universityBn: 'ইউনিভার্সিটি অব টেক্সাস অ্যাট আর্লিংটন',
    program: 'MS in Computer Science & AI',
    programBn: 'এমএস ইন কম্পিউটার সায়েন্স অ্যান্ড এআই',
    country: 'United States',
    countryFlag: '🇺🇸',
    countryId: 'usa',
    intake: 'Spring Intake',
    avatar: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    highlight: 'F-1 Visa Approved on First Attempt',
    highlightBn: 'প্রথম প্রচেষ্টায় এফ-১ ভিসা অনুমোদন',
    reviewEn: 'The US visa interview was my biggest fear. Elora’s senior advisors conducted 4 dedicated 1-on-1 mock interviews focused on my financial ties to Bangladesh and why UTA fits my academic goals. When the consular officer asked about my post-graduation plans, I answered with complete confidence.',
    reviewBn: 'আমেরিকান ভিসা ইন্টারভিউ নিয়ে খুব ভয়ে ছিলাম। ইলোরার সিনিয়র টিম আমাকে চারবার ওয়ান-অন-ওয়ান মক ইন্টারভিউ করিয়ে প্রস্তুত করে। কনস্যুলার অফিসারের প্রতিটি প্রশ্নের সঠিক উত্তর দিতে পেরে প্রথমবারেই ভিসা পাই।',
    visaStatus: 'F-1 Student Visa Approved',
    visaStatusBn: 'এফ-১ স্টুডেন্ট ভিসা অনুমোদিত'
  },
  {
    id: 'farzana-australia',
    name: 'Farzana Yeasmin',
    nameBn: 'ফারজানা ইয়াসমিন',
    hometown: 'Rajshahi, Bangladesh',
    hometownBn: 'রাজশাহী, বাংলাদেশ',
    university: 'Deakin University',
    universityBn: 'ডেকিন ইউনিভার্সিটি',
    program: 'Master of Information Technology (Cybersecurity)',
    programBn: 'মাস্টার অব ইনফরমেশন টেকনোলজি (সাইবার সিকিউরিটি)',
    country: 'Australia',
    countryFlag: '🇦🇺',
    countryId: 'australia',
    intake: 'July Intake',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    highlight: '25% Vice-Chancellor’s Academic Scholarship',
    highlightBn: '২৫% ভাইস-চ্যান্সেলরস একাডেমিক স্কলারশিপ',
    reviewEn: 'Australia tightened its Genuine Student (GS) requirement recently, but Elora’s rigorous assessment and documentation helped me secure a 25% scholarship and unconditional offer. Their post-visa briefing on accommodation in Melbourne was invaluable.',
    reviewBn: 'অস্ট্রেলিয়ার নতুন জেনুইন স্টুডেন্ট (জিএস) নিয়মে ভিসা পাওয়া কঠিন হলেও ইলোরার নির্ভুল গাইডলাইনে আমি ২৫% স্কলারশিপসহ অফার লেটার ও ভিসা পাই। মেলবোর্নে বাসস্থান বিষয়ক পরামর্শও অনেক উপকারে এসেছে।',
    visaStatus: 'Subclass 500 Visa Approved',
    visaStatusBn: 'সাবক্লাস ৫০০ ভিসা অনুমোদিত'
  },
  {
    id: 'sabbir-germany',
    name: 'Sabbir Hossain',
    nameBn: 'সাব্বির হোসেন',
    hometown: 'Khulna, Bangladesh',
    hometownBn: 'খুলনা, বাংলাদেশ',
    university: 'Rhine-Waal University of Applied Sciences',
    universityBn: 'রাইন-ভাল ইউনিভার্সিটি অব অ্যাপ্লায়েড সায়েন্সেস',
    program: 'BSc Mechanical Engineering (English Taught)',
    programBn: 'বিএসসি মেকানিক্যাল ইঞ্জিনিয়ারিং (ইংরেজি মাধ্যম)',
    country: 'Germany',
    countryFlag: '🇩🇪',
    countryId: 'germany',
    intake: 'Winter Semester',
    avatar: 'https://images.unsplash.com/photo-1596075780750-81249df16d19?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    highlight: 'Zero Tuition Fees & Blocked Account Setup',
    highlightBn: 'টিউশন ফি বিহীন পাবলিক বিশ্ববিদ্যালয় ও ব্লকড অ্যাকাউন্ট',
    reviewEn: 'Finding English-taught public university programs in Germany with €0 tuition seemed daunting. Elora shortlisted accredited public universities, managed Uni-Assist submissions, and walked me step-by-step through Expatrio blocked account opening.',
    reviewBn: 'জার্মানিতে শূন্য টিউশন ফিতে ইংরেজি মাধ্যম পাবলিক বিশ্ববিদ্যালয় খুঁজে পেতে ইলোরা অসাধারণ সহায়তা করেছে। ইউনি-অ্যাসিস্ট আবেদন এবং এক্সপ্যাট্রিও ব্লকড অ্যাকাউন্ট খোলা পর্যন্ত তাদের দিকনির্দেশনা ছিল নিখুঁত।',
    visaStatus: 'German National Visa (D)',
    visaStatusBn: 'জার্মান ন্যাশনাল স্টুডেন্ট ভিসা (ডি)'
  },
  {
    id: 'tahmina-malaysia',
    name: 'Tahmina Akter',
    nameBn: 'তাহমিনা আক্তার',
    hometown: 'Cumilla, Bangladesh',
    hometownBn: 'কুমিল্লা, বাংলাদেশ',
    university: 'Asia Pacific University (APU)',
    universityBn: 'এশিয়া প্যাসিফিক ইউনিভার্সিটি (এপিইউ)',
    program: 'BSc (Hons) in Software Engineering',
    programBn: 'বিএসসি (অনার্স) সফটওয়্যার ইঞ্জিনিয়ারিং',
    country: 'Malaysia',
    countryFlag: '🇲🇾',
    countryId: 'malaysia',
    intake: 'September Intake',
    avatar: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    highlight: 'EMGS Approval in Record 14 Days',
    highlightBn: 'রেকর্ড ১৪ দিনে ইএমজিএস ভিসা অ্যাপ্রুভাল',
    reviewEn: 'For students looking for world-class IT education with affordable tuition close to Bangladesh, APU is top tier. Elora’s counselors processed my offer within 48 hours and kept track of the EMGS approval percentage online every single day.',
    reviewBn: 'কম খরচে বিশ্বমানের প্রযুক্তি শিক্ষার জন্য মালয়েশিয়ার এপিইউ সেরা। ইলোরার সহায়তায় ৪৮ ঘণ্টার মধ্যে অফার লেটার এবং দুই সপ্তাহের মধ্যে ইএমজিএস অ্যাপ্রুভাল চলে আসে। সাশ্রয়ী বাজেটে পড়ার স্বপ্ন পূরণ হলো।',
    visaStatus: 'Single Entry Visa (eVAL Approved)',
    visaStatusBn: 'ইভ্যাল অনুমোদিত (ই-ভিসা)'
  },
  {
    id: 'arifur-hungary',
    name: 'Arifur Rahman',
    nameBn: 'আরিফুর রহমান',
    hometown: 'Barisal, Bangladesh',
    hometownBn: 'বরিশাল, বাংলাদেশ',
    university: 'University of Debrecen',
    universityBn: 'ইউনিভার্সিটি অব ডেব্রেসেন',
    program: 'Doctor of General Medicine (MD)',
    programBn: 'ডক্টর অব জেনারেল মেডিসিন (এমডি)',
    country: 'Hungary',
    countryFlag: '🇭🇺',
    countryId: 'hungary',
    intake: 'September Intake',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    highlight: 'Schengen Area Medical Degree',
    highlightBn: 'ইউরোপীয় শেঞ্জেনভুক্ত মেডিকেল ডিগ্রি',
    reviewEn: 'Studying medicine in Europe was my lifelong ambition. Elora handled the entire entrance exam coordination, embassy apostille process in Dhaka, and interview preparation with Debrecen medical faculty. Now living my dream in Hungary!',
    reviewBn: 'ইউরোপে চিকিৎসাবিজ্ঞান পড়ার আজন্ম স্বপ্ন পূরণ হয়েছে ইলোরার মাধ্যমে। ঢাকা ও হাঙ্গেরির ডেব্রেসেন মেডিকেল ফ্যাকাল্টির সাথে তাদের সমন্বয় ও দিকনির্দেশনা ছিল অভাবনীয়।',
    visaStatus: 'Type-D Schengen Residence Permit',
    visaStatusBn: 'টাইপ-ডি শেঞ্জেন রেসিডেন্স পারমিট'
  }
];
