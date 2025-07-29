export interface ContactItem {
    label: string;
    link: string;
    contactType: "tel" | "mail" | "link";
}

export interface Contact {
    category: string;
    documentId: string;
    contactItem: ContactItem[];
}