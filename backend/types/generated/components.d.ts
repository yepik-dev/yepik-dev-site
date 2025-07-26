import type { Schema, Struct } from '@strapi/strapi';

export interface AboutListOfValuesEducationItem extends Struct.ComponentSchema {
  collectionName: 'components_about_list_of_values_education_items';
  info: {
    displayName: 'educationItem';
  };
  attributes: {
    degree: Schema.Attribute.String;
    institution: Schema.Attribute.String;
    year: Schema.Attribute.Integer;
  };
}

export interface AboutListOfValuesExperienceItem
  extends Struct.ComponentSchema {
  collectionName: 'components_about_list_of_values_experience_items';
  info: {
    displayName: 'experienceItem';
  };
  attributes: {
    andYear: Schema.Attribute.Date;
    company: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    position: Schema.Attribute.String;
    startYear: Schema.Attribute.Date & Schema.Attribute.Required;
  };
}

export interface AboutListOfValuesWorkflow extends Struct.ComponentSchema {
  collectionName: 'components_about_list_of_values_workflows';
  info: {
    displayName: 'workflow';
  };
  attributes: {
    description: Schema.Attribute.String;
    step: Schema.Attribute.Component<
      'about-list-of-values.workflow-step',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface AboutListOfValuesWorkflowStep extends Struct.ComponentSchema {
  collectionName: 'components_about_list_of_values_workflow_steps';
  info: {
    displayName: 'workflowStep';
  };
  attributes: {
    description: Schema.Attribute.String;
    stepNumber: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface ContactsContactItem extends Struct.ComponentSchema {
  collectionName: 'components_contacts_contact_items';
  info: {
    displayName: 'contactItem';
  };
  attributes: {
    contactType: Schema.Attribute.Enumeration<['tel', 'mail', 'link']> &
      Schema.Attribute.DefaultTo<'link'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SkillsSkillCategory extends Struct.ComponentSchema {
  collectionName: 'components_skills_skill_categories';
  info: {
    displayName: 'skillCategory';
  };
  attributes: {
    skill: Schema.Attribute.Component<'skills.skill-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SkillsSkillItem extends Struct.ComponentSchema {
  collectionName: 'components_skills_skill_items';
  info: {
    displayName: 'skillItem';
  };
  attributes: {
    linkToProjects: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-list-of-values.education-item': AboutListOfValuesEducationItem;
      'about-list-of-values.experience-item': AboutListOfValuesExperienceItem;
      'about-list-of-values.workflow': AboutListOfValuesWorkflow;
      'about-list-of-values.workflow-step': AboutListOfValuesWorkflowStep;
      'contacts.contact-item': ContactsContactItem;
      'skills.skill-category': SkillsSkillCategory;
      'skills.skill-item': SkillsSkillItem;
    }
  }
}
