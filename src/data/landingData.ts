export interface Course {
  id: string;
  title: string;
  category: string;
  image: string;
  rating: number;
  reviewsCount: number;
  studentsCount: string;
  duration: string;
  lessons: number;
  level: string;
  price: string;
  author: {
    name: string;
    avatar: string;
  };
}

export interface LearningCategory {
  id: string;
  title: string;
  coursesCount: string;
  iconName: "PenTool" | "Code" | "Laptop" | "Briefcase" | "Megaphone" | "Camera";
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  comment: string;
  rating: number;
}

export const CATEGORY_TABS = [
  "Popular",
  "Design",
  "Coding & Technology",
  "Marketing",
  "Data Science",
  "Audio Music",
  "Video Editing",
  "Content Creation",
  "Business & Finance",
  "Web & Mobile",
  "Game",
  "Personal & Career Development",
  "Leadership",
  "Photography",
  "Cyber Security",
  "Data Development",
  "New Release",
  "Trending",
] as const;

export const COURSES_DATA: Course[] = [
  {
    id: "course-1",
    title: "Learn Figma: User Experience Design Essentials",
    category: "Design",
    image: "/courses/course-1.jpg",
    rating: 4.8,
    reviewsCount: 420,
    studentsCount: "1.8k",
    duration: "18h 30m",
    lessons: 28,
    level: "Beginner",
    price: "$45.00",
    author: {
      name: "Marcus Vance",
      avatar: "/avatars/avatar-2.jpg",
    },
  },
  {
    id: "course-2",
    title: "Complete Icon & Design System Masterclass",
    category: "Design",
    image: "/courses/course-2.jpg",
    rating: 4.9,
    reviewsCount: 310,
    studentsCount: "1.2k",
    duration: "12h 15m",
    lessons: 20,
    level: "All Levels",
    price: "$35.00",
    author: {
      name: "Elena Rostova",
      avatar: "/avatars/avatar-1.jpg",
    },
  },
  {
    id: "course-3",
    title: "Modern Data Science & Analytics Dashboard",
    category: "Data Science",
    image: "/courses/course-3.jpg",
    rating: 4.7,
    reviewsCount: 512,
    studentsCount: "2.4k",
    duration: "26h 00m",
    lessons: 42,
    level: "Intermediate",
    price: "$60.00",
    author: {
      name: "David Chen",
      avatar: "/avatars/avatar-3.jpg",
    },
  },
  {
    id: "course-4",
    title: "Full-Stack Web Dev: React & Next.js Pro",
    category: "Coding & Technology",
    image: "/courses/course-4.jpg",
    rating: 4.9,
    reviewsCount: 680,
    studentsCount: "3.1k",
    duration: "34h 45m",
    lessons: 54,
    level: "Intermediate",
    price: "$55.00",
    author: {
      name: "Alex Ramirez",
      avatar: "/avatars/avatar-2.jpg",
    },
  },
  {
    id: "course-5",
    title: "Financial Trading & Market Growth Strategies",
    category: "Business & Finance",
    image: "/courses/course-5.jpg",
    rating: 4.8,
    reviewsCount: 290,
    studentsCount: "1.5k",
    duration: "14h 20m",
    lessons: 22,
    level: "Beginner",
    price: "$40.00",
    author: {
      name: "Sarah Jenkins",
      avatar: "/avatars/avatar-1.jpg",
    },
  },
  {
    id: "course-6",
    title: "Agile Product Strategy & Team Collaboration",
    category: "Personal & Career Development",
    image: "/courses/course-6.jpg",
    rating: 4.8,
    reviewsCount: 340,
    studentsCount: "1.9k",
    duration: "16h 10m",
    lessons: 24,
    level: "All Levels",
    price: "$49.00",
    author: {
      name: "Michael Chang",
      avatar: "/avatars/avatar-3.jpg",
    },
  },
];

export const LEARNING_PATHS: LearningCategory[] = [
  {
    id: "path-1",
    title: "Design",
    coursesCount: "140+ Courses",
    iconName: "PenTool",
  },
  {
    id: "path-2",
    title: "Development",
    coursesCount: "220+ Courses",
    iconName: "Code",
  },
  {
    id: "path-3",
    title: "IT & Software",
    coursesCount: "115+ Courses",
    iconName: "Laptop",
  },
  {
    id: "path-4",
    title: "Business",
    coursesCount: "95+ Courses",
    iconName: "Briefcase",
  },
  {
    id: "path-5",
    title: "Marketing",
    coursesCount: "80+ Courses",
    iconName: "Megaphone",
  },
  {
    id: "path-6",
    title: "Photography",
    coursesCount: "65+ Courses",
    iconName: "Camera",
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Sarah M.",
    role: "UI/UX Designer & Learner",
    avatar: "/avatars/avatar-1.jpg",
    comment:
      "ByteSpace completely transformed my career path. The practical projects and community feedback helped me land my dream role as a Product Designer within 4 months.",
    rating: 5,
  },
  {
    id: "test-2",
    name: "James L.",
    role: "Course Creator & Instructor",
    avatar: "/avatars/avatar-2.jpg",
    comment:
      "As a creator, the platform is extraordinarily smooth to work with. Course creation tools and audience analytics gave me complete freedom to teach what I love.",
    rating: 5,
  },
  {
    id: "test-3",
    name: "Alex D.",
    role: "Frontend Developer",
    avatar: "/avatars/avatar-3.jpg",
    comment:
      "The quality of tutorials and interactive exercises is top-notch. I went from basic HTML/CSS to building complex full-stack web applications with complete confidence.",
    rating: 5,
  },
];
