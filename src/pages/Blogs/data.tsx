import Image1 from "@/assets/image/bike-1.jpg";
import Image10 from "@/assets/image/bike-10.jpg";
import Image11 from "@/assets/image/bike-11.jpg";
import Image12 from "@/assets/image/bike-12.jpg";

import author1 from "@/assets/author-1.jpg";
import author2 from "@/assets/author-2.jpg";

import avater1 from "@/assets/avater-1.jpg";
import avater3 from "@/assets/avater-3.jpg";
import avater4 from "@/assets/avater-4.jpg";
import Image14 from "@/assets/image/bike-14.jpg";
import Image15 from "@/assets/image/bike-15.jpg";
import Image16 from "@/assets/image/bike-16.jpg";
import Image17 from "@/assets/image/bike-17.jpg";
import Image18 from "@/assets/image/bike-18.jpg";
import Image19 from "@/assets/image/bike-19.jpg";
import Image2 from "@/assets/image/bike-2.jpg";
import Image20 from "@/assets/image/bike-20.jpg";
import Image21 from "@/assets/image/bike-21.jpg";
import Image22 from "@/assets/image/bike-22.jpg";
import Image3 from "@/assets/image/bike-3.jpg";
import Image4 from "@/assets/image/bike-4.jpg";
import Image5 from "@/assets/image/bike-5.jpg";
import Image6 from "@/assets/image/bike-6.jpg";
import Image7 from "@/assets/image/bike-7.jpg";
import Image8 from "@/assets/image/bike-8.jpg";
import Image9 from "@/assets/image/bike-9.jpg";
import blogBike1 from "@/assets/images/blogs/blog-bike-1.jpg";
import blogBike2 from "@/assets/images/blogs/blog-bike-2.jpg";
import blogBike3 from "@/assets/images/blogs/blog-bike-3.jpg";
import blogBike4 from "@/assets/images/blogs/blog-bike-4.jpg";
import blogBike5 from "@/assets/images/blogs/blog-bike-5.jpg";
import blogBike6 from "@/assets/images/blogs/blog-bike-6.jpg";

const blogs = [
  {
    id: 1,
    title: "Top 10 Bike Maintenance Tips",
    image: blogBike1,
    category: "Maintenance",
    description:
      "Learn how to take care of your bike and extend its life with these 10 practical maintenance tips.",
    tags: ["bike", "maintenance", "tips", "repair"],
    gallery: [Image1, Image2, Image3, Image4, Image5, Image6],
    author: {
      name: "Rebeka Sultana",
      image: author1,
      postedAt: "2025-05-01T10:30:00Z",
    },
    comments: [
      {
        id: 1,
        name: "Mahmud Hasan",
        image: avater1,
        comment: "Very informative! Helped me a lot.",
        postedAt: "2025-05-02T09:00:00Z",
      },
      {
        id: 2,
        name: "Rima Akter",

        comment: "Loved the gallery section. Great tips!",
        postedAt: "2025-05-03T14:45:00Z",
      },
    ],
  },
  {
    id: 2,
    title: "How to Choose the Right Bike",
    image: blogBike2,
    category: "Buying Guide",
    description:
      "Choosing the right bike depends on your purpose, budget, and body type. Here’s a detailed guide.",
    tags: ["bike", "buying", "guide"],
    gallery: [Image7, Image8, Image9, Image10, Image11, Image12],
    author: {
      name: "Tariq Aziz",
      image: author2,
      postedAt: "2025-04-21T08:00:00Z",
    },
    comments: [],
  },
  {
    id: 3,
    title: "5 Best Biking Routes in Dhaka",
    image: blogBike3,
    category: "Travel",
    description:
      "Explore the best scenic and traffic-free biking routes inside Dhaka city.",
    tags: ["routes", "dhaka", "biking"],
    gallery: [Image14, Image15, Image16, Image17, Image18, Image19],
    author: {
      name: "Sadia Rahman",
      image: author2,
      postedAt: "2025-03-28T11:20:00Z",
    },
    comments: [
      {
        id: 1,
        name: "Ahsan Kabir",
        image: avater3,
        comment: "I ride on Gulshan route regularly. Awesome!",
        postedAt: "2025-03-29T16:00:00Z",
      },
    ],
  },
  {
    id: 4,
    title: "Bike Safety Essentials for New Riders",
    image: blogBike4,
    category: "Safety",
    description:
      "Essential safety gear and habits every new rider must adopt to avoid accidents.",
    tags: ["safety", "beginners", "gear"],
    gallery: [Image20, Image21, Image22],
    author: {
      name: "Rebeka Sultana",
      image: author1,
      postedAt: "2025-02-10T12:00:00Z",
    },
    comments: [],
  },
  {
    id: 5,
    title: "Budget Bikes Under 1 Lakh in Bangladesh",
    image: blogBike5,
    category: "Reviews",
    description:
      "List of top-performing and affordable bikes under 1 lakh Taka for the year 2025.",
    tags: ["budget", "bangladesh", "bikes"],
    gallery: [Image1, Image2, Image3, Image4, Image5, Image6],
    author: {
      name: "Imran Hossain",
      image: author2,
      postedAt: "2025-01-15T09:00:00Z",
    },
    comments: [],
  },
  {
    id: 6,
    title: "Electric Bikes: Are They Worth It?",
    image: blogBike6,
    category: "Technology",
    description:
      "Electric bikes are gaining popularity. Here’s an in-depth analysis of pros, cons, and cost-benefits.",
    tags: ["electric", "technology", "eco"],
    gallery: [Image7, Image8, Image9, Image10, Image11, Image12],
    author: {
      name: "Sabbir Ahmed",
      image: author1,
      postedAt: "2025-05-01T15:45:00Z",
    },
    comments: [
      {
        id: 1,
        name: "Rita Dey",
        image: avater4,
        comment: "Very helpful. I was planning to buy one!",
        postedAt: "2025-05-01T17:30:00Z",
      },
    ],
  },
];
export default blogs;
