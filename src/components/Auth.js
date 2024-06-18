import classes from './Auth.module.css'
import { useSelector } from 'react-redux';

const Auth = () => {
  const auth=useSelector((state)=>state.auth.isAuthenticated)
  console.log(auth);
  return (
    <main className={classes.auth}>
      <section>
        {
  auth?<form>
  <div className={classes.control}>
    <label htmlFor='email'>Email</label>
    <input type='email' id='email' />
  </div>
  <div className={classes.control}>
    <label htmlFor='password'>Password</label>
    <input type='password' id='password' />
  </div>
  <button>Login</button>
</form>:""
        }
      </section>
    </main>
  );
};

export default Auth;
