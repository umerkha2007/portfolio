import { CalendarDays } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";

export function BookCall({ small, label = "Book a call" }: { small?: boolean; label?: string }) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-primary ${small ? "btn-sm" : ""}`}
    >
      <CalendarDays size={small ? 15 : 17} strokeWidth={2.2} />
      {label}
    </a>
  );
}
