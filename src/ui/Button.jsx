import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block disabled:cursor-not-allowed rounded-full bg-yellow-400  font-semibold tracking-wide text-stone-800 uppercase ring-yellow-300 transition-colors duration-300 outline-none hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-2 focus:ring-offset-2';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    secondary:
      'inline-block disabled:cursor-not-allowed rounded-full  font-semibold tracking-wide text-stone-400 uppercase ring-yellow-300 transition-colors duration-300 outline-none hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:ring-stone-200 focus:ring-2 focus:ring-offset-2 border-2 border-stone-300 px-4 py-2.5 md:px-6 md:py-3.5',
    small: base + 'px-4 py-2 md:px-6 md:py-2.5 text-xs',
    round: base + 'px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
