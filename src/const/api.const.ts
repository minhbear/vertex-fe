export const HEADER_DEFAULT = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const TIMEOUT = 90000;

// HTTP Status
export const STT_OK = 200;
export const STT_CREATED = 201;
export const STT_BAD_REQUEST = 400;
export const STT_UNAUTHORIZED = 401;
export const STT_FORBIDDEN = 403;
export const STT_NOT_FOUND = 404;
export const STT_INTERNAL_SERVER = 500;
export const STT_NOT_MODIFIED = 304;

// API Path
export const GET_INDEXERS = "/indexers";
export const GET_IDLS = "/idl-dapp";

export const EXECUTE_QUERY = "/indexers/query";
export const GET_TABLES_INDEXER = (indexerId: number) =>
  `/indexers/${indexerId}/tables`;
export const GET_TRIGGER_TRANSFORMER = (indexerId: number, tableId: number) =>
  `/indexers/${indexerId}/tables/${tableId}/trigger-transformer`;

export const CREATE_TABLE = (indexerId: number) =>
  `/indexers/${indexerId}/tables/create`;
export const CREATE_TRIGGER_TRANSFORMER = (indexerId: number) =>
  `/indexers/${indexerId}/register`;

export const UPLOAD_IDL = "/idl-dapp/upload";