/* eslint-disable react/prop-types */
import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo.jpg';

interface HeaderProps {
  page: string;
}

const Aside: React.FC<HeaderProps> = ({ page }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChecked = useCallback(() => {
    setIsChecked(!isChecked);
  }, [isChecked]);

  return (
    <>
      <div className="menu-mobile">
        <input
          value={1}
          id="menu-hamburguer"
          type="checkbox"
          onChange={handleInputChecked}
        />
        <label htmlFor="menu-hamburguer">
          <div className="menu">
            <span className="hamburguer" />
          </div>
        </label>
      </div>
      <aside className={isChecked ? 'menu open' : 'menu'}>
        <img
          src={Logo}
          alt="Ilustração do objetivo 8 da ONU: Trabalho decente e crescimento econômico"
        />
        <nav>
          <ul>
            <li className={page === 'home' ? 'active' : ''}>
              <Link to="/">Home</Link>
            </li>
            <li className={page === 'introducao' ? 'active' : ''}>
              <Link to="/">Introdução</Link>
            </li>
            <li className={page === 'cenario' ? 'active' : ''}>
              <Link to="/">Cenário atual</Link>
            </li>
            <li className={page === 'noticias' ? 'active' : ''}>
              <Link to="/">Notícias</Link>
            </li>
            <li className={page === 'metas' ? 'active' : ''}>
              <Link to="/">Metas</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Aside;
