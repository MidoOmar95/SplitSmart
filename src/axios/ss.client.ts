import axios from 'axios';
import { environment } from '../environment';

export const ssClient = axios.create({
  baseURL: environment.ssContext,
  withCredentials: true
});
