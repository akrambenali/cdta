import type { SVGProps } from "react";
import { whatsappHref } from "@/data/contact-info";
import type { Dictionary } from "@/i18n/dictionary-type";

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.82L2 22l5.4-1.36a9.9 9.9 0 0 0 4.64 1.18h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.51 2 12.04 2Zm0 18.09h-.01a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.12.8.83-3.04-.2-.31a8.17 8.17 0 0 1-1.26-4.3c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.86 5.8 2.4a8.14 8.14 0 0 1 2.4 5.8c0 4.52-3.68 8.2-8.14 8.2Zm4.52-6.14c-.25-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.12-.16.25-.63.8-.78.96-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.21a7.4 7.4 0 0 1-1.37-1.69c-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.24-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.04 0 1.2.88 2.36 1 2.52.12.16 1.73 2.64 4.2 3.7.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

export function WhatsAppButton({ dict }: { dict: Dictionary }) {
  return (
    <a
      href={whatsappHref(dict.whatsappWidget.message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={dict.whatsappWidget.ariaLabel}
      title={dict.whatsappWidget.tooltip}
      className="fixed bottom-5 end-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform duration-200 hover:scale-105 active:scale-95 sm:bottom-6 sm:end-6"
    >
      <span className="wa-ping absolute inset-0 rounded-full bg-[#25D366]" aria-hidden="true" />
      <WhatsAppIcon className="relative size-7" />
    </a>
  );
}
