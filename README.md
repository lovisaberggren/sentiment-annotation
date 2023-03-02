## Run locally

Run `npm install` to install packages.

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Set up environment variables

In the root directory, create `.env.local` file and add your Supabase URL, anon-key and your site URL in production env.

```
NEXT_PUBLIC_SUPABASE_URL=<your_supabase_url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your_supabase_anon_key>
NEXT_PUBLIC_SITE_URL=<prod_env_url>
```

## Set up Vercel

Follow the [documentation](https://vercel.com/docs) on Vercel for setting up a project and linking it to your GitHub project.
