import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import repeatComponent from 'shared/components/utils/repeatComponent'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const MENUS = [
  {
    id: 'home',
    name: 'home',
    path: '/home',
  },
  {
    id: 'date-fns',
    name: 'date-fns',
    path: '/date-fns',
  },
  {
    id: 'lodash-es',
    name: 'lodash-es',
    path: '/lodash-es',
  },
  {
    id: 'common-tags',
    name: 'common-tags',
    path: '/common-tags',
  },
  {
    id: 'component',
    name: 'component',
    path: '/component',
  },
  {
    id: 'javascript',
    name: 'javascript',
    path: '/javascript',
  },
  {
    id: 'react',
    name: 'react',
    path: '/react',
  },
  {
    id: 'react-redux',
    name: 'react-redux',
    path: '/react-redux',
  },
  {
    id: 'recompose',
    name: 'recompose',
    path: '/recompose',
  },
  {
    id: 'css-advanced',
    name: 'css-advanced',
    path: '/css-advanced',
  },
  {
    id: 'products',
    name: 'products',
    path: '/products',
  },
  {
    id: 'about',
    name: 'about',
    path: '/about',
  },
]

const NavigationItem = ({ path, name, currentPath }) => (
  <Link
    className={loadClass`item`}
    to={path}
    data-active={path === currentPath}
  >
    {name}
  </Link>
)

const NavigationItems = repeatComponent(NavigationItem)

// const NavigationBar = props => (
//   <nav className={loadClass`root`}>
//     <NavigationItems list={MENUS} {...props} />
//   </nav>
// )

const NavigationBar = props => (
  <div className={loadClass`root`}>
    <ul>
      <li>
        <a>
          <span>
            <FontAwesomeIcon icon="home" size="lg" />
          </span>
          <span>Home</span>
        </a>
      </li>
      <li>
        <a>
          <span>
            <FontAwesomeIcon icon="home" size="lg" />
          </span>
          <span>Settings</span>
        </a>
      </li>
      <li>
        <a>
          <span>
            <FontAwesomeIcon icon="home" size="lg" />
          </span>
          <span>Settings</span>
        </a>
      </li>
      <li>
        <a>
          <span>
            <FontAwesomeIcon icon="home" size="lg" />
          </span>
          <span>Settings</span>
        </a>
      </li>
    </ul>
  </div>
)

export default NavigationBar