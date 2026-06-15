import axios from 'axios';
import { LoginCredentials, StudentResult } from '@/types/student';

// const API_URL = process.env.NEXT_PUBLIC_API_URL;
// Local: http://localhost:3000
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: API_URL,
});

export const StudentService = {
  getGrade: async (credentials: LoginCredentials): Promise<StudentResult> => {
    const response = await api.post<StudentResult>('/students-results/get-grade', credentials);
    return response.data;
  },
};
