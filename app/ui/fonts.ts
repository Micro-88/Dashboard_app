<<<<<<< HEAD
import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
=======
import { Inter } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

import { createGlobalStyle } from 'styled-components';

export const lusitana = {
  className: 'your-lusitana-class', // This should be a valid class
  // other properties if needed
};
>>>>>>> origin/main
