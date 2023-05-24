import styles from './Navbar.module.scss';

export const Navbar = () => {
  return <nav className={styles['navbar']}>
    <ul className={styles['navbar-list']}>
      <li>Home</li>
      <li>Receitas</li>
      <li>Contato</li>
      <li>Apoie</li>
      <li>Loja</li>
      <li>Newsletter</li>
    </ul>
  </nav>
}