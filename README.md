## Getting Started

Run `npm install` to install packages.

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Set up database connection

From the root folder, install supabase-js `npm install @supabase/supabase-js`.

Create a `\lib` folder and add a file named `supabaseClient.js`, paste the following code:

```
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://<project>.supabase.co', '<your-anon-key>')
```

Add your supabase project URL and anon-key.
