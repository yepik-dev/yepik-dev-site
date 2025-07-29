import React from "react";
import type { Contact } from "@/types/contact";

export function RenderContactListByCategory(
  contacts: Contact[],
  category: string
) {
  const matched = contacts.find((c) => c.category === category);
  if (!matched || !matched.contactItem) return [];

  const directLinkLabels = [
    "linkedin",
    "github",
    "facebook",
    "twitter",
    "instagram",
    "telegram",
  ];

  return matched.contactItem.reduce<React.ReactNode[]>((acc, item) => {
    let href = "";
    let label = "";

    switch (item.label) {
      case "tel":
        {
          href = `tel:${item.link}`;
          label = item.link;
        }
        break;
      case "email":
        href = `mailto:${item.link}`;
        label = item.link;
        break;
      case "link":
        href = item.link;
        break;
      default:
        if (directLinkLabels?.includes(item?.label?.toLowerCase())) {
          href = item.link;
          label = item.label;
        } else {
          return acc;
        }
    }

    acc.push(
      <li key={item.link} className="flex items-center gap-2">
        <a
          href={href}
          target={item.contactType === "link" ? "_blank" : ""}
          rel={item.contactType === "link" ? "noopener noreferrer" : ""}
        >
          {label}
        </a>
      </li>
    );

    return acc;
  }, []);
}
