export const metadata = {
  title: '{{PROJECT_NAME}}',
  description: 'Built with Next.js and Prisma',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
