import React from 'react'
import { Link } from 'gatsby'
import subNavigationStyle from './sub-navigation.module.scss'

export default ({ navigation }) => (
  <div className={`site-header-tabs ${subNavigationStyle.headerTabs}`}>
    <div>
      <ul>
        {navigation.slice(navigation.length * -1 + 1).map(item => (
          <li key={`header-tab-${item.link}${item.href}`}>
            {item.href ? (
              <a href={item.href}>{item.title}</a>
            ) : (
              <Link to={item.link}>{item.title}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  </div>
)
