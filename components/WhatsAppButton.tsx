import { whatsappHref } from "@/lib/site";

type Props = {
  children: string;
  message: string;
  variant?: "principal" | "secundario";
};

export function WhatsAppButton({ children, message, variant = "principal" }: Props) {
  return (
    <a
      className={variant === "principal" ? "cta" : "cta cta-secundario"}
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
