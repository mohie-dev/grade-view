import { Card, CardContent } from "@/components/ui/card";
import { Summary } from "@/types/student";
import { Award, BookOpen, CheckCircle, Target, TrendingUp } from "lucide-react";

export function GPASummary({ summary }: { summary: Summary }) {
  const cards = [
    {
      title: "المعدل التراكمي (GPA)",
      value: summary.gpa?.toFixed(2) || "0.00",
      icon: <Target className="h-5 w-5 text-blue-500" />,
      bg: "bg-blue-500/10",
      color: "text-blue-700 dark:text-blue-400",
    },
    {
      title: "التقدير العام",
      value: summary.overallGrade || "-",
      icon: <Award className="h-5 w-5 text-emerald-500" />,
      bg: "bg-emerald-500/10",
      color: "text-emerald-700 dark:text-emerald-400",
    },
    {
      title: "مجموع النقاط",
      value: summary.pointsSum || "0",
      icon: <TrendingUp className="h-5 w-5 text-purple-500" />,
      bg: "bg-purple-500/10",
      color: "text-purple-700 dark:text-purple-400",
    },
    {
      title: "الساعات المسجلة",
      value: summary.assignedHours || "0",
      icon: <BookOpen className="h-5 w-5 text-amber-500" />,
      bg: "bg-amber-500/10",
      color: "text-amber-700 dark:text-amber-400",
    },
    {
      title: "الساعات المجتازة",
      value: summary.passedHours || "0",
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
      bg: "bg-green-500/10",
      color: "text-green-700 dark:text-green-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {cards.map((card, idx) => (
        <Card key={idx} className="shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-4 flex flex-col justify-center items-center text-center space-y-2 h-full">
            <div className={`p-3 rounded-full ${card.bg}`}>
              {card.icon}
            </div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{card.title}</p>
            <p className={`text-2xl font-bold ${card.color}`}>{card.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
