let Pages = [
  {
    title: "Home",
    link: "Home",
    isDropDown: false,
    childItems: [],
    isActive: "",
  },
  {
    title: "Register Now",
    link: "RegisterNow",
    isDropDown: false,
    childItems: [],
    isActive: "",
  },
  {
    title: "Our Services",
    link: "OurServices",
    isDropDown: true,
    childItems: [
      {
        title: "Quran Recitation",
        link: "QuranRecitation",
      },
      {
        title: "Quran Tafseer",
        link: "QuranTafseer",
      },
      {
        title: "Fiqhi Masail (Modern Propositions)",
        link: "FiqhiMasail",
      },
    ],
    isActive: "",
  },
  {
    title: "About",
    link: "About",
    isDropDown: false,
    childItems: [],
    isActive: "",
  },
  {
    title: "Contact Us",
    link: "ContactUs",
    isDropDown: false,
    childItems: [],
    isActive: "",
  },
];

export default Pages;
