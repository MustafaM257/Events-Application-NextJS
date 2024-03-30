# Events Application (Next.js)

## Technologies Used

This project utilizes the following technologies:

- Node.js
- Next.js
- TypeScript
- TailwindCSS
- Stripe
- Shadcn
- uploadthing
- React Hook Form
- Zod

## Features

The Events Application is a platform designed for browsing, purchasing, and managing events of interest. Key features include:

- **Event Exploration:** Users can browse and view a variety of events based on their interests.
- **Event Creation:** Users have the ability to create and publish their own events on the platform.
- **Event Purchase:** Users can purchase tickets or register for events directly through the platform.
- **Order Management:** Users can view their past orders and manage their event registrations.
- **User Authentication:** Secure authentication powered by Clerk, allowing users to sign in and sign up securely.
- **Data Storage:** MongoDB is used to store event data and user information securely.
- **File Uploads:** Utilizes uploadthing for handling file uploads related to events.

## Environment Variables

Ensure you have a `.env.local` file in the root directory of your project with the following environment variables:

```plaintext
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your_next_public_clerk_publishable_key>
CLERK_SECRET_KEY=<your_clerk_key>

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

MONGODB_URI=<your_mongodb_uri>

WEBHOOK_SECRET=<your_webhook_secret>

UPLOADTHING_SECRET=<your_uploadthing_secret>
UPLOADTHING_APP_ID=<your_uploadthing_app_id>

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<your_stripe_publishable_key>
STRIPE_SECRET_KEY=<your_stripe_secret_key>
STRIPE_WEBHOOK_SECRET=<your_stripe_webhook_secret>

NEXT_PUBLIC_SERVER_URL=<your_next_public_server_url>
```

Replace `<placeholders>` with your actual values.

### This project uses pnpm

This project is managed with pnpm, a fast, disk-space efficient package manager for JavaScript projects.

To ensure that the project runs smoothly without any issues, please follow these steps:

1. **Install pnpm:** If you haven't already installed pnpm globally on your system, you can do so by running the following command:

   ```bash
   npm install -g pnpm
   ```

2. **Install Dependencies:** Navigate to the root directory of the project in your terminal and run the following command to install project dependencies using pnpm:

   ```bash
   pnpm install
   ```

3. **Run the Project:** Once all dependencies are installed, you can start the development server by running:
   ```bash
   pnpm dev
   ```
   This will start the Next.js development server and make your application available at the specified port (usually http://localhost:3000).

By following these steps, you can ensure that the project runs smoothly without any bugs or issues related to dependency management.
