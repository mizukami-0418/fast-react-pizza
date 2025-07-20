import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return alert('注文番号を入力してください');
    navigate(`/order/${query}`);
    setQuery(''); // 検索後に入力フィールドをクリア

    // 検索処理をここに追加
    console.log('Searching for order:', query);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="注文番号で検索"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="focus:ring-opacity-50 w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:ring-3 focus:ring-yellow-500 focus:outline-none sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
