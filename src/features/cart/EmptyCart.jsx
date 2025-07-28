import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">👈 メニューに戻る</LinkButton>

      <p className="mt-7 font-semibold">
        カートが空です。ピザを選んでください 😃
      </p>
    </div>
  );
}

export default EmptyCart;
