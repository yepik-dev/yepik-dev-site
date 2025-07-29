export interface SkillItem {
    title: string;
    linkToProjects: string | null;
    isCore: boolean | null;
}

export interface SkillGroup {
    category: string;
    documentId: string;
    skill: SkillItem[];
}
