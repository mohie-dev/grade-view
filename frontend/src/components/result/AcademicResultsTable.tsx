import { Subject } from "@/types/student";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export function AcademicResultsTable({ subjects }: { subjects: Subject[] }) {
  
  const getGradeVariant = (grade: string) => {
    switch (grade) {
      case "A":
      case "A-":
      case "A+":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200";
      case "B":
      case "B-":
      case "B+":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200";
      case "C":
      case "C-":
      case "C+":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200";
      case "D":
      case "D+":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200";
      case "F":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border-red-200";
      default:
        return "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border-slate-200";
    }
  };

  return (
    <div className="rounded-md border bg-white dark:bg-slate-950 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-slate-50 dark:bg-slate-900">
            <TableRow>
              <TableHead className="text-right font-semibold">المقرر الدراسي</TableHead>
              <TableHead className="text-center font-semibold">الساعات</TableHead>
              <TableHead className="text-center font-semibold">الدرجة</TableHead>
              <TableHead className="text-center font-semibold">النقاط</TableHead>
              <TableHead className="text-center font-semibold">التقدير</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subjects.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center h-24 text-slate-500">
                  لا توجد مواد مسجلة
                </TableCell>
              </TableRow>
            ) : (
              subjects.map((subject, idx) => (
                <TableRow key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50 transition-colors">
                  <TableCell className="font-medium">{subject.name}</TableCell>
                  <TableCell className="text-center">{subject.creditHours}</TableCell>
                  <TableCell className="text-center">{subject.mark}</TableCell>
                  <TableCell className="text-center">{subject.points}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant="outline" className={`font-bold px-2.5 py-0.5 ${getGradeVariant(subject.grade)}`}>
                      {subject.grade || "-"}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
