import ToDoWidget from '../ToDoWidget/ToDoWidget';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.header__hiddenTitle}>Приложение "Список дел"</h1>
      </header>
      <div className={styles.content}>
        <section aria-label='Список дел' className={styles.todoSection}>
          <ToDoWidget label='To-Do List' className={styles.todoWidget} />
        </section>
      </div>
    </div>
  );
}

export default App;
