import { useState } from 'react';
import Button from '../../ui/Button';

function CreateUser() {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 ようこそ ピザ屋さんへ！最初にユーザー名を教えてね。
      </p>

      <input
        type="text"
        placeholder="フルネームで入力"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />

      {username !== '' && (
        <div>
          <Button type="primary">💁🏻 注文はこちらから</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
