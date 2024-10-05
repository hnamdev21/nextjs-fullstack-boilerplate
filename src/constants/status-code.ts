export const StatusCodeString = Object.freeze({
  SUCCESS: "SUCCESS",
  CREATED: "CREATED",
  ACCEPTED: "ACCEPTED",
  NO_CONTENT: "NO_CONTENT",
  NOT_MODIFIED: "NOT_MODIFIED",
  BAD_REQUEST: "BAD_REQUEST",
  UNAUTHORIZED: "UNAUTHORIZED",
  FORBIDDEN: "FORBIDDEN",
  NOT_FOUND: "NOT_FOUND",
  METHOD_NOT_ALLOWED: "METHOD_NOT_ALLOWED",
  CONFLICT: "CONFLICT",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
});
export type StatusCodeString = typeof StatusCodeString;
export type StatusCodeStringKey = ExtractKey<StatusCodeString>;
export type StatusCodeStringValue = ExtractValue<StatusCodeString>;

export const StatusCodeNumber: Record<StatusCodeStringKey, number> = Object.freeze({
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  NOT_MODIFIED: 304,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
});
export type StatusCodeNumber = typeof StatusCodeNumber;
export type StatusCodeNumberKey = ExtractKey<StatusCodeNumber>;
export type StatusCodeNumberValue = ExtractValue<StatusCodeNumber>;
