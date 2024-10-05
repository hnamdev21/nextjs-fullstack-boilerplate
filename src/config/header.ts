export const HeaderContentType = {
  MULTIPART_FORM_DATA: "multipart/form-data",
  APPLICATION_JSON: "application/json",
  APPLICATION_FORM_URLENCODED: "application/x-www-form-urlencoded",
  APPLICATION_OCTET_STREAM: "application/octet-stream",
  APPLICATION_PDF: "application/pdf",
};

export const HeaderAccept = {
  ALL: "*/*",
};

export const HeaderAuthorization = {
  BEARER: (token: string) => `Bearer ${token}`,
};

export const HeaderXRequestedWith = {
  XML_HTTP_REQUEST: "XMLHttpRequest",
};

export const HeaderXCSRFToken = {
  CSRF_TOKEN: "CSRF-Token",
};

export const HeaderXAPIPlatform = {
  PLATFORM: "Platform",
};
