import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  const error = useRouteError();

  return (
    <div>
      <h1>エラーが起きっちゃったよ 😢</h1>
      <p>{error.data || error.message}</p>

      <LinkButton to="-1">👈 前のページに戻る</LinkButton>
    </div>
  );
}

export default Error;
