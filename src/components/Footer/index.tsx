import React from 'react';

import { FaHeart } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer>
      <p className="copyright">© COPYRIGHT Economy, arthurthorp 2020</p>
      <p>
        Made with
        <FaHeart size={14} fill="#a31c44" />
      </p>
    </footer>
  );
};

export default Footer;
