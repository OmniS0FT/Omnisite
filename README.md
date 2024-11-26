<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://res.cloudinary.com/diekemzs9/image/upload/v1732612498/omni_cospln.png" width="400" alt="Laravel Logo"></a></p>

<h1 align="center">
  OmniBot
</h1>

**OMNIBOT** is a private AI that uses WebGPU to run LLMs natively in your browser, bringing you an offline experience.

# Features

- **In-browser privacy:** All AI models run locally (client side) on your hardware, ensuring that your data is processed only on your pc. No server-side processing!
  
- **Offline:** Once the initial download of a model is processed, you'll be able to use it without an active internet connection.
  
- **Chat history:** Access and manage your conversation history.
  
- **Supports new open-source models:** Chat with popular open-source models such as Gemma, Llama2 & 3 and Mistral!
  
- **Responsive design:** If your phone supports WebGl, you'll be able to use OmniBot just as you would on desktop.
  
- **Markdown & code highlight:** Messages returned as markdown will be displayed as such & messages that include code, will be highlighted for easy access.
  
- **Chat with files:** Load files (pdf & all non-binary files supported - even code files) and ask the models questions about them!
  
- **Custom memory support:** Add custom instructions/memory to allow the AI to provide better and more personalized responses.

- **Export chat messages:** Seamlessly generate and save your chat messages in either json or markdown format.
  
- **Voice message support:** Use voice interactions to interact with the models.
  
- **Regenerate responses:** Not quite the response you were hoping for? Quickly regenerate it without having to write out your prompt again.
  
- **Light & Dark mode:** Switch between light & dark mode.


# Aim

Omnibot attempts to at bring the functionality from popular AI interfaces such as ChatGPT and Gemini into a in-browser experience.


# Getting Started

## Prerequisites
- Node.js and yarn/bun installed
- Accounts and API keys for:
  - Supabase
  - Stripe (if using payments)
  - Clerk (if using authentication)

## Setup

1. Clone the repository:
   ```
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```
   yarn
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   SUPABASE_URL=<your-supabase-project-url>
   SUPABASE_SERVICE_KEY=<your-supabase-service-key>

   # If using Stripe
   STRIPE_SECRET_KEY=<your-stripe-secret-key>
   NEXT_PUBLIC_STRIPE_PRICE_ID=<your-stripe-price-id>

   # If using Clerk
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
   CLERK_SECRET_KEY=<your-clerk-secret-key>
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
   ```

4. Configure features:
   In `config.ts`, set the desired features:
   ```typescript
   const config = {
     auth: {
       enabled: true, // Set to false if not using Clerk
     },
     payments: {
       enabled: true, // Set to false if not using Stripe
     }
   };
   ```

5. Set up the database:
   Run Prisma migrations:
   ```
   npx prisma migrate dev
   ```

6. Start the development server:
   ```
   yarn dev
   ```

7. Open your browser and navigate to `http://localhost:3000` to see your application running.

## Additional Configuration

- Webhooks: Set up webhooks for Clerk (if using auth) at `/api/auth/webhook` and for Stripe (if using payments) at `/api/payments/webhook`.
- Customize the landing page, dashboard, and other components as needed.
- Modify the Prisma schema in `prisma/schema.prisma` if you need to change the database structure.

## Important Security Notes

- Enable Row Level Security (RLS) in your Supabase project to ensure data protection at the database level.
- Always make Supabase calls on the server-side (in API routes or server components) to keep your service key secure.

## Learn More

Refer to the documentation of the individual technologies used in this project for more detailed information:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Supabase Documentation](https://supabase.io/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Clerk Documentation](https://clerk.dev/docs) (if using auth)
- [Stripe Documentation](https://stripe.com/docs) (if using payments)
