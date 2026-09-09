"use client";

import { usePathname } from "next/navigation";
import { buildGeneralEnquiryLink } from "@/lib/whatsapp";
import { WhatsApp } from "@/components/ui/icons";

/** Persistent floating "chat on WhatsApp" affordance. Hidden on the cart page
 *  (which already has its own prominent WhatsApp checkout). */
export default function WhatsAppFloat() {
  const pathname = usePathname();
  if (pathname === "/cart") return null;

  return (
    <a
      href={buildGeneralEnquiryLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-[400] grid h-14 w-14 place-items-center rounded-full bg-[#1f7a53] text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
    >
      <WhatsApp className="h-7 w-7" />
    </a>
  );
}
