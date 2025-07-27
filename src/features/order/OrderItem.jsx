import { formatCurrency } from '../../utils/helpers.js';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm text-stone-500 capitalize italic">
        {isLoadingIngredients ? 'ロード中・・・・' : ingredients.join(', ')}
      </p>
    </li>
  );
}

export default OrderItem;
