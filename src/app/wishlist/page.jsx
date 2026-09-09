import { pageMetadata } from "@/lib/seo";
import WishlistView from "@/components/wishlist/WishlistView";

export const metadata = pageMetadata({
  title: "Wishlist",
  path: "/wishlist",
  description: "Your saved Libas Clothing pieces.",
});

export default function WishlistPage() {
  return <WishlistView />;
}
