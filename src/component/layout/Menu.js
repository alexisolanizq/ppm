import React from 'react';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuLinks from './MenuLinks';
import '@Assets/styles/menu.css';

const Menu = () => (
  <div className="menu">
    <div className='container'>
    <div className="menu__container">
      <ul className="menu__list">
        {MenuLinks.map((item) => (
          <li key={`menu-item-${item.id}`} className="menu__item">
            <p className="menu__item--text">
              {item?.isIcon && <MoreVertIcon />}
              {item.name}
            </p>
            <ul className="submenu__list" style={{ width: item.width ?? 146 }}>
              {item.menu.map((itemMenu) => (
                <li
                  key={`submenu-item-${itemMenu.id}`}
                  className={`submenu__item ${
                    itemMenu.submenu ? 'submenu__item--submenu' : ''
                  }`}
                >
                  {itemMenu.submenu ? (
                    <>
                      <p className="submenu__item--text" to={itemMenu.link}>
                        {itemMenu.name}
                        <ChevronRightIcon width={16} />
                      </p>
                      <ul className="subsubmenu__list">
                        {itemMenu.submenu.map((itemSubmenu) => (
                          <li
                            key={`subsubmenu-item-${itemSubmenu.id}`}
                            className="subsubmenu__item"
                          >
                            <Link to={itemSubmenu.link}>
                              {itemSubmenu.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link to={itemMenu.link}>{itemMenu.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
    </div>
  </div>
);

export default Menu;
