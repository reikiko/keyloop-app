![Home Screenshot](public/keyloop.png)
# 🔑 Keyloop — Fullstack Rental Discovery App

**Keyloop** is a modern, fullstack rental discovery platform built using **Next.js** and **Express.js**, designed to help users search, explore, and book verified rental properties with ease. Adapted from a YouTube tutorial by Ed Roh, this project has been customized with new branding, layout, and copy to create a unique and scalable rental app experience.

## 🚀 Features

- 🔍 Advanced Search Filters — Find rentals by location, price, and amenities.
- 💼 Fullstack Architecture — Next.js frontend + Express.js backend.
- 💡 Modern UI/UX — Tailwind CSS, Shadcn UI, Framer Motion animations.
- 🔐 Secure Auth — User authentication via AWS Cognito.
- ☁️ AWS Deployment — EC2, API Gateway, RDS, S3, and Amplify.
- 🗺️ Mapbox Support — Visualize rental locations on an interactive map.

## 🧰 Tech Stack

**Frontend:**
- Next.js, TypeScript, Tailwind CSS  
- Shadcn UI, Framer Motion, Redux Toolkit  
- React Hook Form + Zod, Mapbox GL

**Backend:**
- Node.js, Express.js, Prisma ORM  
- PostgreSQL + PostGIS  
- AWS EC2, API Gateway, RDS, S3  
- AWS Cognito (Authentication)

## 🔧 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/keyloop.git
   cd keyloop
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables in `.env.local`:
   ```
   NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
   AWS_COGNITO_USER_POOL_ID=your_user_pool_id
   AWS_COGNITO_CLIENT_ID=your_cognito_client_id
   DATABASE_URL=your_database_url
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🖥️ Deployment

The application is deployed on AWS using:
- EC2 for backend hosting
- RDS for the PostgreSQL database
- S3 for image storage
- API Gateway for REST endpoints
- Cognito for authentication

## 📦 Credits

Adapted from [Ed Roh's Real Estate App Tutorial]([https://www.youtube.com/watch?v=...](https://www.youtube.com/watch?v=X1zCAPLvMtw))  
Original GitHub Repo: [https://github.com/ed-roh/real-estate-app](https://github.com/ed-roh/real-estate-prod)

## 📄 License

This project is for educational and portfolio use only.
