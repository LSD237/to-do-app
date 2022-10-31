import ToDoWidget from '../ToDoWidget/ToDoWidget';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>Заголовок который спрятан</h1>
      </header>
      <div className={styles.content}>
        <section aria-label='Список дел' className={styles.todoSection}>
          <ToDoWidget label='todos' className={styles.todoWidget} />
        </section>
      </div>
    </div>
  );
}

export default App;
