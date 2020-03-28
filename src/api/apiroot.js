import { backendport,backendhost } from "../../config";

const API_VERSION = 'v1';
const BACKEND_HOST = `http://${backendhost}:${backendport}`;

export const API_ROOT = `${BACKEND_HOST}/api/${API_VERSION}`;