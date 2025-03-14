export interface User {
  id: string;
  email: string;
  displayName?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile extends User {
  avatar?: string;
  phoneNumber?: string;
  preferences: {
    theme: 'light' | 'dark';
    language: string;
    notifications: boolean;
  };
}
