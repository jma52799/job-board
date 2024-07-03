import { UserFile } from "@prisma/client";

type USState = 
  | 'Alabama' | 'Alaska' | 'Arizona' | 'Arkansas' | 'California'
  | 'Colorado' | 'Connecticut' | 'Delaware' | 'Florida' | 'Georgia'
  | 'Hawaii' | 'Idaho' | 'Illinois' | 'Indiana' | 'Iowa' | 'Kansas'
  | 'Kentucky' | 'Louisiana' | 'Maine' | 'Maryland' | 'Massachusetts'
  | 'Michigan' | 'Minnesota' | 'Mississippi' | 'Missouri' | 'Montana'
  | 'Nebraska' | 'Nevada' | 'New Hampshire' | 'New Jersey' | 'New Mexico'
  | 'New York' | 'North Carolina' | 'North Dakota' | 'Ohio' | 'Oklahoma'
  | 'Oregon' | 'Pennsylvania' | 'Rhode Island' | 'South Carolina'
  | 'South Dakota' | 'Tennessee' | 'Texas' | 'Utah' | 'Vermont'
  | 'Virginia' | 'Washington' | 'West Virginia' | 'Wisconsin' | 'Wyoming';


export type SortBy = 'relevant' | 'recent' | 'daysAgo' | 'remote' | 'onsite' | 'internship' | 'full-time' | 'part-time' | USState;

export type UserExperienceEssentials = Omit<
  UserFile, 
  "id" | "createdAt" | "updated" | "created"
>