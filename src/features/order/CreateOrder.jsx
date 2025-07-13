import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErrors = useActionData();
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      <Form method="POST" action="/order/new">
        <div>
          <label>お名前</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>電話番号</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
          {formErrors?.phone && (
            <p style={{ color: "red" }}>{formErrors.phone}</p>
          )}
        </div>

        <div>
          <label>住所</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">
            至急対応にしますか？別途料金が加算されます(500円)。
          </label>
        </div>

        <div>
          {/* フォームの送信時に必要なデータを含める */}
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button disabled={isSubmitting}>
            {isSubmitting ? "注文を処理しています・・・・・" : "注文を確定する"}
          </button>
        </div>
      </Form>
    </div>
  );
}

// フォームの送信アクション
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on", // チェックボックスの値を真偽値に変換
  };

  const errors = {};
  // 電話番号のバリデーション
  if (!isValidPhone(order.phone)) {
    errors.phone = "電話番号の形式が正しくありません。";
  }

  if (Object.keys(errors).length) return errors; // エラーがある場合はエラーオブジェクトを返す

  // 全てのバリデーションが通った場合、注文を作成しリダイレクトする
  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`); // 注文が作成された後、注文詳細ページにリダイレクト
}

export default CreateOrder;
