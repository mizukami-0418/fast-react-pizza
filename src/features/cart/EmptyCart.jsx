import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div>
      <Link to="/menu">👈 メニューに戻る</Link>

      <p>カートが空です。ピザを選んでください 😃</p>
    </div>
  );
}

export default EmptyCart;
