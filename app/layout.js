import './globals.css';

export const metadata = {
  title: 'Sean McCulloch | UC Honors Portfolio',
  description: 'Learning portfolio for Sean McCulloch, University of Cincinnati Information Technology student and University Honors Program member.'
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
