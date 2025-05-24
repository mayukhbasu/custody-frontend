// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css'; // 👈 import the CSS
import { SharedUi } from '@custody-mf/shared-ui'; // 👈 shared UI use

export function App() {
  return (
    <div>
      <SharedUi/>
    </div>
  );
}

export default App;
