/**
 * Constants and Configuration
 * Contains all application-wide constants, configuration values, and static data
 */

import type { CategoryType, StatusType, PriorityType, DepartmentType } from "@/types";

/**
 * Complaint Categories Configuration
 * Each category includes a label for display and a color for UI theming
 */
export const COMPLAINT_CATEGORIES: Array<{
  value: CategoryType;
  label: string;
  color: string;
  icon?: string;
}> = [
  {
    value: "road-damage",
    label: "Road Damage",
    color: "#f59e0b", // amber-500
    icon: "🛣️",
  },
  {
    value: "street-light",
    label: "Street Light",
    color: "#fbbf24", // amber-400
    icon: "💡",
  },
  {
    value: "garbage-collection",
    label: "Garbage Collection",
    color: "#84cc16", // lime-500
    icon: "🗑️",
  },
  {
    value: "water-supply",
    label: "Water Supply",
    color: "#0ea5e9", // sky-500
    icon: "💧",
  },
  {
    value: "sewage",
    label: "Sewage",
    color: "#64748b", // slate-500
    icon: "🚰",
  },
  {
    value: "illegal-construction",
    label: "Illegal Construction",
    color: "#ef4444", // red-500
    icon: "🏗️",
  },
  {
    value: "noise-pollution",
    label: "Noise Pollution",
    color: "#8b5cf6", // violet-500
    icon: "🔊",
  },
  {
    value: "air-pollution",
    label: "Air Pollution",
    color: "#6b7280", // gray-500
    icon: "🏭",
  },
  {
    value: "public-safety",
    label: "Public Safety",
    color: "#dc2626", // red-600
    icon: "⚠️",
  },
  {
    value: "vandalism",
    label: "Vandalism",
    color: "#7c3aed", // violet-600
    icon: "🎨",
  },
  {
    value: "other",
    label: "Other",
    color: "#6b7280", // gray-500
    icon: "📋",
  },
];

/**
 * Complaint Status Configuration
 * Defines all possible statuses with display labels and color coding
 */
export const COMPLAINT_STATUS: Array<{
  value: StatusType;
  label: string;
  color: string;
  bgColor: string;
  description: string;
}> = [
  {
    value: "pending",
    label: "Pending",
    color: "#f59e0b", // amber-500
    bgColor: "#fef3c7", // amber-100
    description: "Complaint submitted, awaiting review",
  },
  {
    value: "in-progress",
    label: "In Progress",
    color: "#3b82f6", // blue-500
    bgColor: "#dbeafe", // blue-100
    description: "Work is currently underway",
  },
  {
    value: "under-review",
    label: "Under Review",
    color: "#8b5cf6", // violet-500
    bgColor: "#ede9fe", // violet-100
    description: "Complaint is being reviewed by officials",
  },
  {
    value: "resolved",
    label: "Resolved",
    color: "#10b981", // green-500
    bgColor: "#d1fae5", // green-100
    description: "Issue has been successfully resolved",
  },
  {
    value: "rejected",
    label: "Rejected",
    color: "#ef4444", // red-500
    bgColor: "#fee2e2", // red-100
    description: "Complaint was rejected",
  },
  {
    value: "closed",
    label: "Closed",
    color: "#6b7280", // gray-500
    bgColor: "#f3f4f6", // gray-100
    description: "Complaint has been closed",
  },
];

/**
 * Priority Levels Configuration
 * Defines priority levels with visual indicators
 */
export const PRIORITY_LEVELS: Array<{
  value: PriorityType;
  label: string;
  color: string;
  bgColor: string;
  weight: number;
}> = [
  {
    value: "low",
    label: "Low",
    color: "#10b981", // green-500
    bgColor: "#d1fae5", // green-100
    weight: 1,
  },
  {
    value: "medium",
    label: "Medium",
    color: "#f59e0b", // amber-500
    bgColor: "#fef3c7", // amber-100
    weight: 2,
  },
  {
    value: "high",
    label: "High",
    color: "#f97316", // orange-500
    bgColor: "#ffedd5", // orange-100
    weight: 3,
  },
  {
    value: "critical",
    label: "Critical",
    color: "#dc2626", // red-600
    bgColor: "#fee2e2", // red-100
    weight: 4,
  },
];

/**
 * Severity Levels Configuration
 * Defines impact severity with visual indicators
 */
export const SEVERITY_LEVELS: Array<{
  value: "minor" | "moderate" | "major" | "severe";
  label: string;
  color: string;
  bgColor: string;
}> = [
  {
    value: "minor",
    label: "Minor",
    color: "#10b981", // green-500
    bgColor: "#d1fae5", // green-100
  },
  {
    value: "moderate",
    label: "Moderate",
    color: "#f59e0b", // amber-500
    bgColor: "#fef3c7", // amber-100
  },
  {
    value: "major",
    label: "Major",
    color: "#f97316", // orange-500
    bgColor: "#ffedd5", // orange-100
  },
  {
    value: "severe",
    label: "Severe",
    color: "#dc2626", // red-600
    bgColor: "#fee2e2", // red-100
  },
];

/**
 * Government Departments Configuration
 * List of all departments that can handle complaints
 */
export const DEPARTMENTS: Array<{
  value: DepartmentType;
  label: string;
  description: string;
  color: string;
  contactEmail?: string;
}> = [
  {
    value: "public-works",
    label: "Public Works",
    description: "Roads, infrastructure, and public facilities",
    color: "#f59e0b",
    contactEmail: "publicworks@civic.gov",
  },
  {
    value: "sanitation",
    label: "Sanitation",
    description: "Garbage collection and waste management",
    color: "#84cc16",
    contactEmail: "sanitation@civic.gov",
  },
  {
    value: "water-board",
    label: "Water Board",
    description: "Water supply and distribution",
    color: "#0ea5e9",
    contactEmail: "water@civic.gov",
  },
  {
    value: "electricity",
    label: "Electricity",
    description: "Power supply and street lighting",
    color: "#fbbf24",
    contactEmail: "electricity@civic.gov",
  },
  {
    value: "traffic-police",
    label: "Traffic Police",
    description: "Traffic management and road safety",
    color: "#ef4444",
    contactEmail: "traffic@civic.gov",
  },
  {
    value: "municipal-corporation",
    label: "Municipal Corporation",
    description: "General municipal services",
    color: "#3b82f6",
    contactEmail: "municipal@civic.gov",
  },
  {
    value: "environment",
    label: "Environment",
    description: "Pollution control and environmental issues",
    color: "#10b981",
    contactEmail: "environment@civic.gov",
  },
  {
    value: "health",
    label: "Health",
    description: "Public health and sanitation",
    color: "#ec4899",
    contactEmail: "health@civic.gov",
  },
  {
    value: "housing",
    label: "Housing",
    description: "Building regulations and housing",
    color: "#8b5cf6",
    contactEmail: "housing@civic.gov",
  },
  {
    value: "parks-recreation",
    label: "Parks & Recreation",
    description: "Parks, gardens, and recreational facilities",
    color: "#22c55e",
    contactEmail: "parks@civic.gov",
  },
];

/**
 * Application Routes
 * Centralized route configuration for the entire application
 */
export const ROUTES = {
  // Public routes
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  
  // Auth routes
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  FORGOT_PASSWORD: "/auth/forgot-password",
  RESET_PASSWORD: "/auth/reset-password",
  VERIFY_EMAIL: "/auth/verify-email",
  
  // Complaint routes
  COMPLAINTS: "/complaints",
  COMPLAINT_DETAIL: (id: string) => `/complaints/${id}`,
  CREATE_COMPLAINT: "/complaints/create",
  EDIT_COMPLAINT: (id: string) => `/complaints/${id}/edit`,
  MY_COMPLAINTS: "/complaints/my-complaints",
  
  // Dashboard routes
  DASHBOARD: "/dashboard",
  DASHBOARD_OVERVIEW: "/dashboard/overview",
  DASHBOARD_ANALYTICS: "/dashboard/analytics",
  DASHBOARD_COMPLAINTS: "/dashboard/complaints",
  DASHBOARD_USERS: "/dashboard/users",
  DASHBOARD_DEPARTMENTS: "/dashboard/departments",
  DASHBOARD_SETTINGS: "/dashboard/settings",
  
  // User routes
  PROFILE: "/profile",
  PROFILE_EDIT: "/profile/edit",
  PROFILE_SETTINGS: "/profile/settings",
  NOTIFICATIONS: "/notifications",
  
  // Map routes
  MAP: "/map",
  MAP_VIEW: "/map/view",
  
  // Admin routes
  ADMIN: "/admin",
  ADMIN_USERS: "/admin/users",
  ADMIN_DEPARTMENTS: "/admin/departments",
  ADMIN_SETTINGS: "/admin/settings",
  ADMIN_ANALYTICS: "/admin/analytics",
  
  // Static pages
  PRIVACY_POLICY: "/privacy-policy",
  TERMS_OF_SERVICE: "/terms-of-service",
  FAQ: "/faq",
  HELP: "/help",
} as const;

/**
 * API Endpoints
 * All backend API endpoints used throughout the application
 */
export const API_ENDPOINTS = {
  // Base URL (can be overridden by environment variable)
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "/api",
  
  // Auth endpoints
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    REFRESH_TOKEN: "/auth/refresh",
    VERIFY_EMAIL: "/auth/verify-email",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
    CHANGE_PASSWORD: "/auth/change-password",
    CURRENT_USER: "/auth/me",
  },
  
  // Complaint endpoints
  COMPLAINTS: {
    LIST: "/complaints",
    CREATE: "/complaints",
    DETAIL: (id: string) => `/complaints/${id}`,
    UPDATE: (id: string) => `/complaints/${id}`,
    DELETE: (id: string) => `/complaints/${id}`,
    UPLOAD_IMAGE: "/complaints/upload-image",
    UPVOTE: (id: string) => `/complaints/${id}/upvote`,
    MY_COMPLAINTS: "/complaints/my-complaints",
    NEARBY: "/complaints/nearby",
    TRENDING: "/complaints/trending",
    ASSIGN: (id: string) => `/complaints/${id}/assign`,
    UPDATE_STATUS: (id: string) => `/complaints/${id}/status`,
    AI_CATEGORIZE: "/complaints/ai-categorize",
  },
  
  // User endpoints
  USERS: {
    LIST: "/users",
    DETAIL: (id: string) => `/users/${id}`,
    UPDATE: (id: string) => `/users/${id}`,
    DELETE: (id: string) => `/users/${id}`,
    PROFILE: "/users/profile",
    UPDATE_PROFILE: "/users/profile",
    UPDATE_AVATAR: "/users/profile/avatar",
    NOTIFICATIONS: "/users/notifications",
    MARK_NOTIFICATION_READ: (id: string) => `/users/notifications/${id}/read`,
  },
  
  // Department endpoints
  DEPARTMENTS: {
    LIST: "/departments",
    DETAIL: (id: string) => `/departments/${id}`,
    STATISTICS: (id: string) => `/departments/${id}/statistics`,
  },
  
  // Analytics endpoints
  ANALYTICS: {
    OVERVIEW: "/analytics/overview",
    COMPLAINTS_BY_CATEGORY: "/analytics/complaints-by-category",
    COMPLAINTS_BY_STATUS: "/analytics/complaints-by-status",
    COMPLAINTS_BY_DEPARTMENT: "/analytics/complaints-by-department",
    RESOLUTION_TIME: "/analytics/resolution-time",
    TRENDS: "/analytics/trends",
    EXPORT: "/analytics/export",
  },
  
  // Comment endpoints
  COMMENTS: {
    LIST: (complaintId: string) => `/comments?complaintId=${complaintId}`,
    CREATE: "/comments",
    UPDATE: (id: string) => `/comments/${id}`,
    DELETE: (id: string) => `/comments/${id}`,
  },
  
  // Location/Map endpoints
  LOCATION: {
    GEOCODE: "/location/geocode",
    REVERSE_GEOCODE: "/location/reverse-geocode",
    NEARBY_COMPLAINTS: "/location/nearby-complaints",
  },
  
  // Admin endpoints
  ADMIN: {
    DASHBOARD: "/admin/dashboard",
    MANAGE_USERS: "/admin/users",
    MANAGE_DEPARTMENTS: "/admin/departments",
    SYSTEM_SETTINGS: "/admin/settings",
    LOGS: "/admin/logs",
  },
} as const;

/**
 * Application Configuration
 * General app settings and limits
 */
export const APP_CONFIG = {
  // Pagination
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100,
  
  // File uploads
  MAX_IMAGE_SIZE: 5 * 1024 * 1024, // 5MB
  MAX_IMAGES_PER_COMPLAINT: 5,
  ALLOWED_IMAGE_TYPES: ["image/jpeg", "image/jpg", "image/png", "image/webp"],
  
  // Map settings
  DEFAULT_MAP_ZOOM: 13,
  DEFAULT_MAP_CENTER: { lat: 40.7128, lng: -74.0060 }, // Default to NYC
  NEARBY_RADIUS_KM: 5,
  
  // AI settings
  AI_CONFIDENCE_THRESHOLD: 0.7, // 70% confidence for auto-categorization
  
  // Time settings
  DATE_FORMAT: "MMM DD, YYYY",
  DATETIME_FORMAT: "MMM DD, YYYY hh:mm A",
  TIME_FORMAT: "hh:mm A",
  
  // Notifications
  NOTIFICATION_DURATION: 5000, // 5 seconds
  
  // Cache durations (in seconds)
  CACHE_DURATION: {
    SHORT: 60, // 1 minute
    MEDIUM: 300, // 5 minutes
    LONG: 3600, // 1 hour
  },
} as const;

/**
 * User Role Permissions Mapping
 * Defines what each role can do
 */
export const ROLE_PERMISSIONS = {
  citizen: [
    "create-complaint",
    "view-complaints",
    "edit-complaint",
  ],
  volunteer: [
    "create-complaint",
    "view-complaints",
    "moderate-content",
  ],
  officer: [
    "view-complaints",
    "edit-complaint",
    "assign-complaint",
    "resolve-complaint",
    "view-analytics",
  ],
  admin: [
    "create-complaint",
    "view-complaints",
    "edit-complaint",
    "delete-complaint",
    "assign-complaint",
    "resolve-complaint",
    "manage-users",
    "view-analytics",
    "export-data",
    "moderate-content",
  ],
} as const;

/**
 * Error Messages
 * Centralized error messages for consistency
 */
export const ERROR_MESSAGES = {
  GENERIC: "Something went wrong. Please try again.",
  NETWORK: "Network error. Please check your connection.",
  UNAUTHORIZED: "You are not authorized to perform this action.",
  NOT_FOUND: "The requested resource was not found.",
  VALIDATION: "Please check your input and try again.",
  FILE_TOO_LARGE: `File size exceeds ${APP_CONFIG.MAX_IMAGE_SIZE / (1024 * 1024)}MB limit.`,
  INVALID_FILE_TYPE: "Invalid file type. Please upload an image file.",
  LOGIN_REQUIRED: "Please login to continue.",
  LOCATION_DENIED: "Location access denied. Please enable location services.",
} as const;

/**
 * Success Messages
 * Centralized success messages for consistency
 */
export const SUCCESS_MESSAGES = {
  COMPLAINT_CREATED: "Complaint submitted successfully!",
  COMPLAINT_UPDATED: "Complaint updated successfully!",
  COMPLAINT_DELETED: "Complaint deleted successfully!",
  PROFILE_UPDATED: "Profile updated successfully!",
  PASSWORD_CHANGED: "Password changed successfully!",
  EMAIL_VERIFIED: "Email verified successfully!",
  LOGIN_SUCCESS: "Logged in successfully!",
  LOGOUT_SUCCESS: "Logged out successfully!",
  REGISTER_SUCCESS: "Registration successful! Please verify your email.",
} as const;

/**
 * Local Storage Keys
 * Keys used for local storage
 */
export const STORAGE_KEYS = {
  AUTH_TOKEN: "civic_auth_token",
  REFRESH_TOKEN: "civic_refresh_token",
  USER_DATA: "civic_user_data",
  THEME: "civic_theme",
  LANGUAGE: "civic_language",
  MAP_PREFERENCES: "civic_map_preferences",
  RECENT_SEARCHES: "civic_recent_searches",
} as const;

// Export helper functions
export const getCategoryConfig = (category: CategoryType) => {
  return COMPLAINT_CATEGORIES.find((c) => c.value === category);
};

export const getStatusConfig = (status: StatusType) => {
  return COMPLAINT_STATUS.find((s) => s.value === status);
};

export const getPriorityConfig = (priority: PriorityType) => {
  return PRIORITY_LEVELS.find((p) => p.value === priority);
};

export const getDepartmentConfig = (department: DepartmentType) => {
  return DEPARTMENTS.find((d) => d.value === department);
};
