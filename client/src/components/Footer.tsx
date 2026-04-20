const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

  return (
    <footer className='text-center py-4 text-gray-400 text-sm border-t border-gray-800 mt-24'>
         <p>Copyright ©{year} Codeyen - AI Website Builder. All rights reserved.</p>
    </footer>
  )
}

export default Footer;
