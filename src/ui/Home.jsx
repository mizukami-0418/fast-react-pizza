import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        😃 最高のピザ
        <br />
        <span className="text-yellow-500">
          あなたのおうちで焼きたての美味しさを😊
        </span>
      </h1>

      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          {username}さん、注文はこちらから
        </Button>
      )}
    </div>
  );
}

export default Home;
