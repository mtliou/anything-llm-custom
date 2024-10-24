export const API_BASE = import.meta.env.VITE_API_BASE || "/api";

export const AUTH_USER = "bridge_user";
export const AUTH_TOKEN = "bridge_authToken";
export const AUTH_TIMESTAMP = "bridge_authTimestamp";
export const COMPLETE_QUESTIONNAIRE = "bridge_completed_questionnaire";
export const SEEN_DOC_PIN_ALERT = "bridge_pinned_document_alert";
export const SEEN_WATCH_ALERT = "bridge_watched_document_alert";

export const USER_BACKGROUND_COLOR = "bg-historical-msg-user";
export const AI_BACKGROUND_COLOR = "bg-historical-msg-system";
export const APPEARANCE_SETTINGS = "bridge_appearance_settings";

export const OLLAMA_COMMON_URLS = [
  "http://127.0.0.1:11434",
  "http://host.docker.internal:11434",
  "http://172.17.0.1:11434",
];

export const LMSTUDIO_COMMON_URLS = [
  "http://localhost:1234/v1",
  "http://127.0.0.1:1234/v1",
  "http://host.docker.internal:1234/v1",
  "http://172.17.0.1:1234/v1",
];

export const KOBOLDCPP_COMMON_URLS = [
  "http://127.0.0.1:5000/v1",
  "http://localhost:5000/v1",
  "http://host.docker.internal:5000/v1",
  "http://172.17.0.1:5000/v1",
];

export const LOCALAI_COMMON_URLS = [
  "http://127.0.0.1:8080/v1",
  "http://localhost:8080/v1",
  "http://host.docker.internal:8080/v1",
  "http://172.17.0.1:8080/v1",
];

export function fullApiUrl() {
  if (API_BASE !== "/api") return API_BASE;
  return `${window.location.origin}/api`;
}

export const POPUP_BROWSER_EXTENSION_EVENT = "NEW_BROWSER_EXTENSION_CONNECTION";
