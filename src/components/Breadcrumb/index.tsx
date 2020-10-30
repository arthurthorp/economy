/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  page: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ page }) => {
  return (
    <section className="container" id="breadcrumb">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>{page}</li>
      </ul>
    </section>
  );
};

export default Breadcrumb;
