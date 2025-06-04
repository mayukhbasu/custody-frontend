// libs/shared-ui/src/lib/shared-ui.tsx
import styles from './shared-ui.module.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* eslint-disable-next-line */
export interface SharedUiProps {}

export function SharedUi(props: SharedUiProps) {
  return (
    <div className={styles['container']}>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}

export default SharedUi;
