import { pageMetadata } from "@/lib/seo";
import CartView from "@/components/cart/CartView";

export const metadata = pageMetadata({
  title: "Cart",
  path: "/cart",
  description: "Review your selected pieces and check out via WhatsApp.",
});

export default function CartPage() {
  return <CartView />;
}
