"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { StudentResult } from "@/types/student";
import { StudentInfoCard } from "@/components/result/StudentInfoCard";
import { GPASummary } from "@/components/result/GPASummary";
import { AcademicResultsTable } from "@/components/result/AcademicResultsTable";
import { motion } from "framer-motion";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResultPage() {
  const router = useRouter();
  const [studentData, setStudentData] = useState<StudentResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Client-side authentication logic
    const dataStr = sessionStorage.getItem("studentResult");
    if (!dataStr) {
      router.push("/");
    } else {
      try {
        const parsed = JSON.parse(dataStr);
        setStudentData(parsed);
      } catch (err) {
        console.error("Failed to parse student data");
        sessionStorage.removeItem("studentResult");
        router.push("/");
      }
    }
    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem("studentResult");
    router.push("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
          <p className="text-slate-500 font-medium">جاري تحميل النتيجة...</p>
        </div>
      </div>
    );
  }

  if (!studentData) return null; // Will redirect in useEffect

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-12">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center text-white font-bold text-xl">
              G
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
              Grade View
            </span>
          </div>
          <Button variant="ghost" size="sm" onClick={handleLogout} className="text-slate-500 hover:text-slate-900 dark:hover:text-white">
            <LogOut className="h-4 w-4 ml-2" />
            تسجيل خروج
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StudentInfoCard student={studentData} />
        </motion.div>

        {studentData.summary && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-200">ملخص الأداء الأكاديمي</h2>
            <GPASummary summary={studentData.summary} />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-200">سجل المقررات الدراسية</h2>
          <AcademicResultsTable subjects={studentData.subjects || []} />
        </motion.div>
      </main>
    </div>
  );
}
