import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StudentResult } from "@/types/student";
import { User, Hash, GraduationCap, Building2, Layers } from "lucide-react";

export function StudentInfoCard({ student }: { student: StudentResult }) {
  return (
    <Card className="shadow-md">
      <CardHeader className="bg-primary/5 pb-4 border-b">
        <CardTitle className="text-xl flex items-center gap-2">
          <User className="text-primary h-5 w-5" />
          معلومات الطالب
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <User className="h-4 w-4 text-slate-500" />
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">الاسم الرباعي</p>
              <p className="font-semibold text-base">{student.fullName}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <Hash className="h-4 w-4 text-slate-500" />
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">رقم الجلوس</p>
              <p className="font-semibold text-base">{student.seatNumber}</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <GraduationCap className="h-4 w-4 text-slate-500" />
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">الرقم الجامعي</p>
              <p className="font-semibold text-base">{student.universityNumber}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <Building2 className="h-4 w-4 text-slate-500" />
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">القسم</p>
              <p className="font-semibold text-base">{student.department || "عام"}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <Layers className="h-4 w-4 text-slate-500" />
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">المستوى</p>
              <p className="font-semibold text-base">{student.level || "غير محدد"}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
