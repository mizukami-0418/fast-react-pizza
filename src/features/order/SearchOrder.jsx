import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return alert("注文番号を入力してください");
    navigate(`/order/${query}`);
    setQuery(""); // 検索後に入力フィールドをクリア

    // 検索処理をここに追加
    console.log("Searching for order:", query);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="注文番号で検索"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
