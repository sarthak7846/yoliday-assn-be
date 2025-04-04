"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
// const main = async () => {
//   const projects = await prisma.projects.createMany({
//     data: [
//       {
//         title: "AI Chatbot",
//         author: "Alice",
//         description: "An AI-powered chatbot for customer service",
//         category: "AI",
//         image_url:
//           "https://www.cnet.com/a/img/resize/dbe775423efc71ed6061d48898166e9dbd3853be/hub/2023/08/24/821b0d86-e29b-4028-ac71-ef63ca020de8/gettyimages-1472123000.jpg?auto=webp&fit=crop&height=1200&width=1200",
//       },
//       {
//         title: "E-commerce Store",
//         author: "Bob",
//         description:
//           "A modern e-commerce store with secure payment integration",
//         category: "Web Development",
//         image_url:
//           "https://sklc-tinymce-2021.s3.amazonaws.com/comp/2023/02/179_1675948994.png",
//       },
//       {
//         title: "Stock Predictor",
//         author: "Charlie",
//         description: "A machine learning model to predict stock trends",
//         category: "AI",
//         image_url:
//           "https://bsmedia.business-standard.com/_media/bs/img/article/2023-02/12/full/1676220256-6112.jpg?im=FeatureCrop,size=(826,465)",
//       },
//       {
//         title: "Social Media App",
//         author: "David",
//         description: "A new social media platform for connecting people",
//         category: "Mobile App",
//         image_url:
//           "https://www.hauper.com/wp-content/uploads/2021/07/Mobile-apps.jpg",
//       },
//       {
//         title: "Crypto Wallet",
//         author: "Eve",
//         description: "A secure wallet for managing cryptocurrency",
//         category: "Blockchain",
//         image_url:
//           "https://i0.wp.com/epthinktank.eu/wp-content/uploads/2018/09/shutterstock_1054622195.jpg?fit=1000%2C1000&ssl=1",
//       },
//       {
//         title: "Weather App",
//         author: "Frank",
//         description: "A real-time weather forecasting application",
//         category: "Mobile App",
//         image_url:
//           "https://cdn.prod.website-files.com/619e15d781b21202de206fb5/642e5f92f6147ed845692f97_How-Mobile-App-Testing-Makes-or-Breaks-Mobile-User-Experience.webp",
//       },
//       {
//         title: "Task Manager",
//         author: "Grace",
//         description: "A to-do list and productivity tracking app",
//         category: "Productivity",
//         image_url:
//           "https://hbr.org/resources/images/article_assets/2017/09/oct17-04-623455200.png",
//       },
//       {
//         title: "Fitness Tracker",
//         author: "Hank",
//         description: "A fitness tracking app with workout suggestions",
//         category: "Health & Fitness",
//         image_url:
//           "https://sklc-tinymce-2021.s3.amazonaws.com/comp/2023/02/179_1675948994.png",
//       },
//       {
//         title: "Blog Platform",
//         author: "Ivy",
//         description: "A blogging platform with user authentication",
//         category: "Web Development",
//         image_url:
//           "https://sklc-tinymce-2021.s3.amazonaws.com/comp/2023/02/179_1675948994.png",
//       },
//       {
//         title: "Online Learning",
//         author: "Jack",
//         description: "An e-learning platform with video lectures",
//         category: "Education",
//         image_url:
//           "https://sklc-tinymce-2021.s3.amazonaws.com/comp/2023/02/179_1675948994.png",
//       },
//       {
//         title: "Recipe App",
//         author: "Karen",
//         description: "A cooking recipe sharing platform",
//         category: "Food",
//         image_url:
//           "https://sklc-tinymce-2021.s3.amazonaws.com/comp/2023/02/179_1675948994.png",
//       },
//       {
//         title: "Expense Tracker",
//         author: "Leo",
//         description: "An app for tracking daily expenses and budgeting",
//         category: "Finance",
//         image_url:
//           "https://sklc-tinymce-2021.s3.amazonaws.com/comp/2023/02/179_1675948994.png",
//       },
//       {
//         title: "Music Streaming",
//         author: "Mia",
//         description: "A music streaming service with playlists",
//         category: "Entertainment",
//         image_url:
//           "https://sklc-tinymce-2021.s3.amazonaws.com/comp/2023/02/179_1675948994.png",
//       },
//       {
//         title: "Travel Planner",
//         author: "Nathan",
//         description: "A travel planning app with itinerary management",
//         category: "Travel",
//         image_url:
//           "https://sklc-tinymce-2021.s3.amazonaws.com/comp/2023/02/179_1675948994.png",
//       },
//       {
//         title: "Job Portal",
//         author: "Olivia",
//         description: "A platform for job seekers and recruiters",
//         category: "Career",
//         image_url:
//           "https://sklc-tinymce-2021.s3.amazonaws.com/comp/2023/02/179_1675948994.png",
//       },
//       {
//         title: "Pet Adoption",
//         author: "Peter",
//         description: "A pet adoption platform to connect pet lovers",
//         category: "Social Good",
//         image_url:
//           "https://sklc-tinymce-2021.s3.amazonaws.com/comp/2023/02/179_1675948994.png",
//       },
//       {
//         title: "Online Polls",
//         author: "Quincy",
//         description: "A web app for creating and participating in polls",
//         category: "Web Development",
//         image_url:
//           "https://sklc-tinymce-2021.s3.amazonaws.com/comp/2023/02/179_1675948994.png",
//       },
//       {
//         title: "Car Rental",
//         author: "Rachel",
//         description: "An online car rental booking platform",
//         category: "Transport",
//         image_url:
//           "https://sklc-tinymce-2021.s3.amazonaws.com/comp/2023/02/179_1675948994.png",
//       },
//       {
//         title: "Smart Home",
//         author: "Steve",
//         description: "An IoT-based smart home automation system",
//         category: "IoT",
//         image_url:
//           "https://sklc-tinymce-2021.s3.amazonaws.com/comp/2023/02/179_1675948994.png",
//       },
//       {
//         title: "Event Management",
//         author: "Tina",
//         description: "An app for managing and scheduling events",
//         category: "Event Planning",
//         image_url:
//           "https://sklc-tinymce-2021.s3.amazonaws.com/comp/2023/02/179_1675948994.png",
//       },
//     ],
//   });
//   console.log(projects);
// };
const updateProject = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield prisma.projects.update({
        where: {
            id: 2,
        },
        data: {
            cart: true,
        },
    });
    console.log(res);
});
const findProjects = () => __awaiter(void 0, void 0, void 0, function* () {
    const projects = yield prisma.projects.findMany();
    console.log(projects);
});
// findProjects();
updateProject();
// main();
