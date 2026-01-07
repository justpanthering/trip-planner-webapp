# Trip Planner Webapp

A Next.js web application for planning trips with Firebase authentication and backend API integration.

## Features

- 🔐 Firebase Authentication (Email/Password)
- 🎨 shadcn/ui components for beautiful UI
- ⚡ React Query for efficient data fetching
- 📝 React Hook Form with Zod validation
- 🚀 Server Actions for backend communication

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Firebase project with Authentication enabled
- Backend API running (see [trip-planner-backend](https://github.com/justpanthering/trip-planner-backend))

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Backend API URL
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Authentication Flow

1. **Register/Login**: Users can register or login using Firebase Authentication
2. **ID Token**: After authentication, Firebase ID token is obtained
3. **Backend Sync**: ID token is sent to backend API which automatically creates/updates user in database
4. **Protected Routes**: Use `useAuth()` hook to access current user and authentication state

## Project Structure

```
app/
├── actions/          # Server actions
├── login/           # Login page
├── register/        # Register page
└── page.tsx         # Home page
components/
└── ui/              # shadcn/ui components
contexts/
└── auth-context.tsx # Authentication context
lib/
├── api.ts           # API utilities
├── firebase.ts      # Firebase configuration
└── hooks/           # React Query hooks
providers/
└── query-provider.tsx # React Query provider
```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
