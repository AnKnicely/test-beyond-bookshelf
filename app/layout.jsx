import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Better Reads</title>
        {/* Font Awesome and Material Icons imports */}
        <script src="https://kit.fontawesome.com/42bbd9a803.js" crossOrigin="anonymous" async></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className="bg-background-light">
        {children}
      </body>
    </html>
  );
}