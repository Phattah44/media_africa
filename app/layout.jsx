import '@styles/globals.css';
export const metadata = {
  title: 'Media Africa',
  description: 'You number one marketing company',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div></div>
        <main className='app'>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
