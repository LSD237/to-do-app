import ToDoWidget from '../ToDoWidget/ToDoWidget';
import styles from './App.module.css';
import logo from '../../images/logo.svg';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.header__hiddenTitle}>Приложение "Список дел"</h1>
      </header>
      <main className={styles.content}>
        <section aria-label='Список дел' className={styles.todoSection}>
          <ToDoWidget label='To-Do List' className={styles.todoWidget} />
        </section>
      </main>
      <footer className={styles.footer}>
        <img src={logo} alt='My logo' className={styles.footer__logo} />
        <span className={styles.footer__copyright}>&copy; Andrey Kolosov 2022</span>
      </footer>
    </div>
  );
}

export default App;
