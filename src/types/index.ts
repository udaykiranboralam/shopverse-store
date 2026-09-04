export type UserRole = "SUPER_ADMIN" | "ADMIN" | "COUNSELOR";

export type LeadStatus =
  | "NEW"
  | "CONTACTED"
  | "INTERESTED"
  | "DEMO_SCHEDULED"
  | "FOLLOW_UP"
  | "CONVERTED"
  | "NOT_INTERESTED"
  | "INVALID";

export type LeadTemperature = "HOT" | "WARM" | "COLD";

export type LeadSource =
  | "META_ADS"
  | "FACEBOOK"
  | "INSTAGRAM"
  | "GOOGLE_ADS"
  | "WEBSITE"
  | "WHATSAPP"
  | "YOUTUBE"
  | "LINKEDIN"
  | "ORGANIC"
  | "REFERRAL"
  | "OTHER";

export type DemoStatus =
  | "REQUESTED"
  | "CONFIRMED"
  | "ATTENDED"
  | "MISSED"
  | "RESCHEDULED"
  | "CONVERTED";

export type FollowUpPriority = "HIGH" | "MEDIUM" | "LOW";
export type FollowUpStatus = "PENDING" | "COMPLETED" | "CANCELLED" | "SKIPPED";
export type LearningMode = "ONLINE" | "OFFLINE" | "BOTH";
export type IntentLevel = "LOW" | "MEDIUM" | "HIGH";
export type Sentiment = "POSITIVE" | "NEUTRAL" | "NEGATIVE";

export interface User {
  id: string;
  name?: string | null;
  email: string;
  password: string;
  role: UserRole;
  phone?: string | null;
  avatar?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Lead {
  id: string;
  name: string;
  phone?: string | null;
  whatsappNumber?: string | null;
  email?: string | null;
  age?: number | null;
  qualification?: string | null;
  graduationYear?: string | null;
  currentLocation?: string | null;
  isFresher?: boolean | null;
  experience?: string | null;
  currentJobRole?: string | null;
  interestedCourse?: string | null;
  recommendedCourse?: string | null;
  careerGoal?: string | null;
  learningMode?: LearningMode | null;
  joiningTimeline?: string | null;
  demoInterest: boolean;
  preferredCallbackTime?: string | null;
  leadSource: LeadSource;
  utmSource?: string | null;
  utmMedium?: string | null;
  utmCampaign?: string | null;
  utmContent?: string | null;
  utmTerm?: string | null;
  leadScore: number;
  leadTemperature: LeadTemperature;
  leadStatus: LeadStatus;
  mainObjection?: string | null;
  humanHandoffRequired: boolean;
  counselorNotes?: string | null;
  intentLevel?: IntentLevel | null;
  sentiment?: Sentiment | null;
  primaryInterest?: string | null;
  primaryObjection?: string | null;
  recommendedNextAction?: string | null;
  probabilityDemoBooking?: number | null;
  probabilityAdmission?: number | null;
  conversionSummary?: string | null;
  assignedCounselorId?: string | null;
  assignedCounselor?: Partial<User> | null;
  createdAt: string;
  updatedAt: string;
}

export interface Course {
  id: string;
  name: string;
  slug: string;
  shortDescription?: string | null;
  description: string;
  duration?: string | null;
  fees: string;
  discount?: string | null;
  trainerDetails?: string | null;
  batchTiming?: string | null;
  upcomingBatchDate?: string | null;
  demoDate?: string | null;
  classMode?: LearningMode | null;
  benefits?: string | null;
  careerOpportunities?: string | null;
  toolsCovered?: string | null;
  prerequisites?: string | null;
  certificationDetails?: string | null;
  placementAssistance?: string | null;
  imageUrl?: string | null;
  isActive: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
  modules?: CourseModule[];
  faqs?: FAQ[];
}

export interface CourseModule {
  id: string;
  courseId: string;
  name: string;
  content?: string | null;
  sortOrder: number;
}

export interface Conversation {
  id: string;
  leadId?: string | null;
  lead?: Partial<Lead> | null;
  userId?: string | null;
  user?: Partial<User> | null;
  channel: string;
  status: string;
  summary?: string | null;
  createdAt: string;
  updatedAt: string;
  messages?: Message[];
}

export interface Message {
  id: string;
  conversationId: string;
  role: string;
  content: string;
  createdAt: string;
}

export interface LeadNote {
  id: string;
  leadId: string;
  userId?: string | null;
  user?: Partial<User> | null;
  content: string;
  createdAt: string;
}

export interface FollowUp {
  id: string;
  leadId: string;
  lead?: Partial<Lead> | null;
  counselorId?: string | null;
  counselor?: Partial<User> | null;
  scheduledAt: string;
  completedAt?: string | null;
  reason?: string | null;
  notes?: string | null;
  priority: FollowUpPriority;
  status: FollowUpStatus;
  createdAt: string;
  updatedAt: string;
}

export interface DemoBooking {
  id: string;
  leadId?: string | null;
  lead?: Partial<Lead> | null;
  counselorId?: string | null;
  counselor?: Partial<User> | null;
  name: string;
  phone: string;
  course: string;
  preferredDate?: string | null;
  preferredTime?: string | null;
  mode: LearningMode;
  notes?: string | null;
  status: DemoStatus;
  createdAt: string;
  updatedAt: string;
}

export interface KnowledgeBase {
  id: string;
  courseId?: string | null;
  course?: Partial<Course> | null;
  category: string;
  question: string;
  answer: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface FAQ {
  id: string;
  courseId: string;
  question: string;
  answer: string;
  sortOrder: number;
}

export interface AnalyticsData {
  totalLeads: number;
  todayLeads: number;
  hotLeads: number;
  warmLeads: number;
  coldLeads: number;
  demoRequests: number;
  callbacksPending: number;
  conversions: number;
  conversionRate: number;
  leadsByCourse: { name: string; count: number }[];
  leadsBySource: { name: string; value: number }[];
  leadsByDate: { date: string; count: number }[];
  leadQuality: { name: string; value: number }[];
  priorityLeads: Lead[];
  dailySummary: string;
  leadsByLocation: { name: string; count: number }[];
  counselorPerformance: {
    name: string;
    leads: number;
    conversions: number;
    rate: number;
  }[];
  conversionFunnel: { stage: string; count: number }[];
  demoConversionRate: number;
}

// ─── AI Service Types ──────────────────────────────────────────────

export type DetectedLanguage = "english" | "telugu" | "tanglish";

export interface AIMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface AIGenerateOptions {
  messages: AIMessage[];
  temperature?: number;
  maxTokens?: number;
  responseFormat?: "text" | "json";
}

export interface AIGenerateResponse {
  content: string;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

// ─── Lead Scoring Types ────────────────────────────────────────────

export interface LeadScoreInput {
  interestedCourse?: string | null;
  careerGoal?: string | null;
  demoInterest: boolean;
  preferredCallbackTime?: string | null;
  phone?: string | null;
  qualification?: string | null;
  experience?: string | null;
  isFresher?: boolean | null;
  currentLocation?: string | null;
  joiningTimeline?: string | null;
  questionsAsked?: string[];
  conversationSentiment?: Sentiment;
  messageCount: number;
}

export interface ScoreBreakdown {
  courseInterest: number;
  careerUrgency: number;
  demoInterest: number;
  callbackInterest: number;
  phoneProvided: number;
  education: number;
  experience: number;
  location: number;
  timeline: number;
  questionsAsked: number;
  intentSignals: number;
}

export interface LeadScoreOutput {
  score: number;
  temperature: string;
  intentLevel: string;
  sentiment: string;
  recommendedNextAction: string;
  probabilityDemoBooking: number;
  probabilityAdmission: number;
  breakdown: ScoreBreakdown;
}

// ─── Recommendation Types ──────────────────────────────────────────

export interface RecommendationInput {
  interests?: string;
  careerGoal?: string;
  background?: string;
  qualification?: string;
  experience?: string;
  isFresher?: boolean;
  age?: number;
  currentRole?: string;
}

export interface AlternativeCourse {
  courseId: string;
  courseName: string;
  confidence: number;
  reason: string;
}

export interface CourseRecommendation {
  courseId: string;
  courseName: string;
  confidence: number;
  reasoning: string;
  alternatives: AlternativeCourse[];
}
