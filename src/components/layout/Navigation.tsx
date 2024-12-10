import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import { clsx } from 'clsx';

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'What We Do' },
  { to: '/sectors', label: 'Who We Help' },
  { to: '/case-studies', label: 'Our Work' },
  { to: '/why-holbrook', label: 'Why Holbrook Electrical' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="nav">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="nav__toggle"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={clsx(
        'nav__menu',
        {
          'nav__menu--open': isOpen,
          'nav__menu--closed': !isOpen,
        }
      )}>
        <div className="nav__container">
          <ul className="nav__list">
            {links.map((link) => (
              <li key={link.to} className="nav__item">
                <NavLink
                  to={link.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    clsx(
                      'nav__link',
                      isActive && 'nav__link--active'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="nav__item md:hidden">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="nav__button nav__button--primary"
              >
                Talk to Us
              </Link>
            </li>
            <li className="nav__item md:hidden">
              <a
                href="tel:01234567890"
                onClick={closeMenu}
                className="nav__button nav__button--secondary"
              >
                <Phone size={20} />
                <span>24/7 Emergency: 01234 567890</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}