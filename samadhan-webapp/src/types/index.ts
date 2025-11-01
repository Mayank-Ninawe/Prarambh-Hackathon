/**
 * Type Definitions for Civic Issues Application
 * Contains all TypeScript interfaces and types used throughout the application
 */

/**
 * Status types for complaints/issues
 * Represents the current state of a complaint in the system
 */
export type StatusType =
  | "pending"
  | "in-progress"
  | "under-review"
  | "resolved"
  | "rejected"
  | "closed";

/**
 * Category types for complaints/issues
 * Classifies the type of civic issue being reported
 */
export type CategoryType =
  | "road-damage"
  | "street-light"
  | "garbage-collection"
  | "water-supply"
  | "sewage"
  | "illegal-construction"
  | "noise-pollution"
  | "air-pollution"
  | "public-safety"
  | "vandalism"
  | "other";

/**
 * Priority levels for complaints
 * Determines how urgently an issue needs to be addressed
 */
export type PriorityType = "low" | "medium" | "high" | "critical";

/**
 * Severity levels for complaints
 * Indicates the impact level of the reported issue
 */
export type SeverityType = "minor" | "moderate" | "major" | "severe";

/**
 * User roles in the system
 * Defines the access level and responsibilities of each user type
 */
export type UserRole = "citizen" | "admin" | "officer" | "volunteer";

/**
 * User permissions for role-based access control
 * Defines what actions a user can perform in the system
 */
export type UserPermission =
  | "create-complaint"
  | "view-complaints"
  | "edit-complaint"
  | "delete-complaint"
  | "assign-complaint"
  | "resolve-complaint"
  | "manage-users"
  | "view-analytics"
  | "export-data"
  | "moderate-content";

/**
 * Government departments
 * Available departments that can be assigned to handle complaints
 */
export type DepartmentType =
  | "public-works"
  | "sanitation"
  | "water-board"
  | "electricity"
  | "traffic-police"
  | "municipal-corporation"
  | "environment"
  | "health"
  | "housing"
  | "parks-recreation";

/**
 * Location interface
 * Represents geographical coordinates and address information
 */
export interface Location {
  /** Geographical latitude coordinate */
  latitude: number;

  /** Geographical longitude coordinate */
  longitude: number;

  /** Human-readable address string */
  address: string;

  /** Optional: City name */
  city?: string;

  /** Optional: State/Province */
  state?: string;

  /** Optional: Country */
  country?: string;

  /** Optional: Postal/ZIP code */
  postalCode?: string;

  /** Optional: Landmark for easier location identification */
  landmark?: string;
}

/**
 * Complaint interface
 * Represents a civic issue or complaint reported by a citizen
 */
export interface Complaint {
  /** Unique identifier for the complaint */
  id: string;

  /** User ID of the person who filed the complaint */
  userId: string;

  /** Brief title/summary of the complaint */
  title: string;

  /** Detailed description of the issue */
  description: string;

  /** URL to the uploaded image of the issue (if any) */
  imageUrl?: string;

  /** Array of image URLs if multiple images are uploaded */
  imageUrls?: string[];

  /** Category of the complaint */
  category: CategoryType;

  /** Current status of the complaint */
  status: StatusType;

  /** Priority level assigned to the complaint */
  priority: PriorityType;

  /** Severity of the issue */
  severity: SeverityType;

  /** Location where the issue was reported */
  location: Location;

  /** Department assigned to handle this complaint */
  assignedDepartment?: DepartmentType;

  /** ID of the officer assigned to this complaint */
  assignedOfficerId?: string;

  /** Timestamp when the complaint was created */
  createdDate: Date | string;

  /** Timestamp when the complaint was last updated */
  updatedDate?: Date | string;

  /** Timestamp when the complaint was resolved (if applicable) */
  resolvedDate?: Date | string;

  /** AI-detected category (may differ from user-selected category) */
  aiDetectedCategory?: CategoryType;

  /** Confidence score of AI category detection (0-1) */
  aiConfidence?: number;

  /** Number of upvotes/supports from other citizens */
  upvotes?: number;

  /** User IDs who upvoted this complaint */
  upvotedBy?: string[];

  /** Additional notes or comments from officials */
  officialNotes?: string;

  /** Resolution description when complaint is resolved */
  resolutionDescription?: string;

  /** Tags for better searchability and filtering */
  tags?: string[];

  /** Whether the complaint is flagged for review */
  isFlagged?: boolean;

  /** Reason for flagging (if flagged) */
  flagReason?: string;
}

/**
 * User interface
 * Represents a user in the civic issues system
 */
export interface User {
  /** Unique identifier for the user */
  id: string;

  /** Full name of the user */
  name: string;

  /** Email address of the user */
  email: string;

  /** Role of the user in the system */
  role: UserRole;

  /** Department the user belongs to (for officers and admins) */
  department?: DepartmentType;

  /** Array of permissions granted to the user */
  permissions: UserPermission[];

  /** URL to user's profile picture */
  profilePicture?: string;

  /** Phone number for contact */
  phoneNumber?: string;

  /** User's address */
  address?: string;

  /** Timestamp when the user account was created */
  createdAt: Date | string;

  /** Timestamp when the user profile was last updated */
  updatedAt?: Date | string;

  /** Whether the user account is active */
  isActive: boolean;

  /** Whether the user's email is verified */
  isEmailVerified: boolean;

  /** User's preferred language */
  preferredLanguage?: string;

  /** User's notification preferences */
  notificationPreferences?: NotificationPreferences;

  /** Number of complaints filed by the user (for citizens) */
  complaintsCount?: number;

  /** Number of complaints resolved by the user (for officers) */
  resolvedCount?: number;
}

/**
 * Notification preferences for users
 * Controls what notifications a user receives and how
 */
export interface NotificationPreferences {
  /** Receive email notifications */
  email: boolean;

  /** Receive SMS notifications */
  sms: boolean;

  /** Receive push notifications */
  push: boolean;

  /** Notify on status updates of filed complaints */
  statusUpdates: boolean;

  /** Notify when assigned to a complaint (for officers) */
  assignments: boolean;

  /** Notify on nearby issues (for citizens) */
  nearbyIssues: boolean;
}

/**
 * Comment interface
 * Represents a comment on a complaint
 */
export interface Comment {
  /** Unique identifier for the comment */
  id: string;

  /** ID of the complaint this comment belongs to */
  complaintId: string;

  /** ID of the user who posted the comment */
  userId: string;

  /** Name of the user who posted the comment */
  userName: string;

  /** Content of the comment */
  content: string;

  /** Timestamp when the comment was created */
  createdAt: Date | string;

  /** Timestamp when the comment was last edited */
  editedAt?: Date | string;

  /** Whether the comment is from an official */
  isOfficial: boolean;
}

/**
 * Analytics data interface
 * Contains statistics and metrics for dashboard
 */
export interface AnalyticsData {
  /** Total number of complaints */
  totalComplaints: number;

  /** Number of pending complaints */
  pendingComplaints: number;

  /** Number of in-progress complaints */
  inProgressComplaints: number;

  /** Number of resolved complaints */
  resolvedComplaints: number;

  /** Average resolution time in days */
  averageResolutionTime: number;

  /** Complaints by category */
  complaintsByCategory: Record<CategoryType, number>;

  /** Complaints by status */
  complaintsByStatus: Record<StatusType, number>;

  /** Complaints by department */
  complaintsByDepartment: Record<DepartmentType, number>;

  /** Date range for the analytics data */
  dateRange?: {
    from: Date | string;
    to: Date | string;
  };
}

/**
 * API Response wrapper
 * Generic response structure for API calls
 */
export interface ApiResponse<T = unknown> {
  /** Whether the request was successful */
  success: boolean;

  /** Response data */
  data?: T;

  /** Error message if request failed */
  error?: string;

  /** Additional error details */
  errorDetails?: unknown;

  /** HTTP status code */
  statusCode?: number;

  /** Response message */
  message?: string;
}

/**
 * Pagination interface
 * For paginated API responses
 */
export interface Pagination {
  /** Current page number */
  page: number;

  /** Number of items per page */
  limit: number;

  /** Total number of items */
  total: number;

  /** Total number of pages */
  totalPages: number;

  /** Whether there's a next page */
  hasNext: boolean;

  /** Whether there's a previous page */
  hasPrev: boolean;
}

/**
 * Paginated response interface
 * Combines data with pagination information
 */
export interface PaginatedResponse<T> {
  /** Array of items for current page */
  items: T[];

  /** Pagination metadata */
  pagination: Pagination;
}

/**
 * Filter options for complaints
 * Used to filter complaint lists
 */
export interface ComplaintFilters {
  /** Filter by status */
  status?: StatusType | StatusType[];

  /** Filter by category */
  category?: CategoryType | CategoryType[];

  /** Filter by priority */
  priority?: PriorityType | PriorityType[];

  /** Filter by severity */
  severity?: SeverityType | SeverityType[];

  /** Filter by department */
  department?: DepartmentType | DepartmentType[];

  /** Filter by date range */
  dateRange?: {
    from: Date | string;
    to: Date | string;
  };

  /** Search query for title/description */
  searchQuery?: string;

  /** Filter by user ID */
  userId?: string;

  /** Filter by location (radius in km) */
  location?: {
    latitude: number;
    longitude: number;
    radiusKm: number;
  };
}

/**
 * Sort options for complaints
 * Defines how to sort complaint lists
 */
export interface SortOptions {
  /** Field to sort by */
  field: "createdDate" | "updatedDate" | "priority" | "severity" | "upvotes";

  /** Sort order */
  order: "asc" | "desc";
}
