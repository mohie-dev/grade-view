import axios from 'axios';
import { LoginCredentials, StudentResult } from '@/types/student';

const API_URL = 'https://grade-view.onrender.com';

const api = axios.create({
  baseURL: API_URL,
});

export const StudentService = {
  getGrade: async (credentials: LoginCredentials): Promise<StudentResult> => {
    const response = await api.post<StudentResult>('/students-results/get-grade', credentials);
    return response.data;
  },
};
