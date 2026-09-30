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
    title: "Learn Figma from Basic",
    category: "Design",
    image: "/courses/Frame (1).png",
    rating: 4.5,
    reviewsCount: 59,
    studentsCount: "26+",
    duration: "2 hours 16 mins",
    lessons: 17,
    level: "Beginner",
    price: "$25",
    author: {
      name: "purepearl studio",
      avatar: "/avatars/avatar-2.jpg",
    },
  },
  {
    id: "course-2",
    title: "Build Digital Asset",
    category: "Design",
    image: "/courses/Frame (2).png",
    rating: 4.5,
    reviewsCount: 59,
    studentsCount: "26+",
    duration: "2 hours 16 mins",
    lessons: 17,
    level: "Beginner",
    price: "$25",
    author: {
      name: "purepearl studio",
      avatar: "/avatars/avatar-1.jpg",
    },
  },
  {
    id: "course-3",
    title: "the Power of Big Data",
    category: "Development",
    image: "/courses/Frame (3).png",
    rating: 4.5,
    reviewsCount: 59,
    studentsCount: "26+",
    duration: "2 hours 16 mins",
    lessons: 17,
    level: "Beginner",
    price: "$25",
    author: {
      name: "purepearl studio",
      avatar: "/avatars/avatar-3.jpg",
    },
  },
  {
    id: "course-4",
    title: "Balancing Productivity an...",
    category: "Marketing",
    image: "/courses/Frame (4).png",
    rating: 4.5,
    reviewsCount: 59,
    studentsCount: "26+",
    duration: "2 hours 16 mins",
    lessons: 17,
    level: "Beginner",
    price: "$25",
    author: {
      name: "purepearl studio",
      avatar: "/avatars/avatar-2.jpg",
    },
  },
  {
    id: "course-5",
    title: "Mastering Money Manage...",
    category: "Finance",
    image: "/courses/Frame (5).png",
    rating: 4.5,
    reviewsCount: 59,
    studentsCount: "26+",
    duration: "2 hours 16 mins",
    lessons: 17,
    level: "Beginner",
    price: "$25",
    author: {
      name: "purepearl studio",
      avatar: "/avatars/avatar-1.jpg",
    },
  },
  {
    id: "course-6",
    title: "From Idea to Startup Succ...",
    category: "Music",
    image: "/courses/Frame (6).png",
    rating: 4.5,
    reviewsCount: 59,
    studentsCount: "26+",
    duration: "2 hours 16 mins",
    lessons: 17,
    level: "Beginner",
    price: "$25",
    author: {
      name: "purepearl studio",
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
