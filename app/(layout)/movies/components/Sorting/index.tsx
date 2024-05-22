import SortBySelect from './SortBySelect';
import classes from './styles.module.css';

export default function SortBy() {
  return (
    <form className={classes.sorting}>
      <SortBySelect />
    </form>
  );
}
