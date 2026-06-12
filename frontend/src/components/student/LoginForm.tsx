"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, GraduationCap } from "lucide-react";
import { StudentService } from "@/services/api";

export function LoginForm() {
  const router = useRouter();
  const [seatNumber, setSeatNumber] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!seatNumber.trim() || !nationalId.trim()) {
      setError("الرجاء إدخال رقم الجلوس والرقم القومي");
      return;
    }

    setLoading(true);

    try {
      const data = await StudentService.getGrade({ seatNumber, nationalId });
      
      // Store in session storage to pass to the result page
      sessionStorage.setItem("studentResult", JSON.stringify(data));
      
      // Navigate to results
      router.push("/result");
    } catch (err: any) {
      if (err.response?.status === 401 || err.response?.status === 404) {
        setError("بيانات الطالب غير صحيحة. يرجى التأكد من رقم الجلوس والرقم القومي.");
      } else {
        setError("يرجى المحاولة مرة اخرى لاحقا");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full"
    >
      <Card className="w-full shadow-xl border-primary/10 bg-white/60 dark:bg-slate-950/60 backdrop-blur-md">
        <CardHeader className="space-y-1 text-center pb-6">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.4 }}
            className="flex justify-center mb-4"
          >
            <div className="p-4 bg-primary/10 rounded-2xl shadow-inner">
              <GraduationCap className="w-10 h-10 text-primary" />
            </div>
          </motion.div>
          <CardTitle className="text-3xl font-bold tracking-tight">بوابة النتائج</CardTitle>
          <CardDescription className="text-base pt-2">
            أدخل بياناتك الجامعية للاستعلام عن النتيجة
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-5">
            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="p-3 text-sm font-medium text-destructive bg-destructive/10 rounded-md border border-destructive/20"
              >
                {error}
              </motion.div>
            )}
            <div className="space-y-2">
              <Label htmlFor="seatNumber" className="text-sm font-semibold">رقم الجلوس</Label>
              <Input
                id="seatNumber"
                placeholder="ex: 123456"
                value={seatNumber}
                onChange={(e) => setSeatNumber(e.target.value)}
                disabled={loading}
                className="text-left font-mono text-lg h-12"
                dir="ltr"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nationalId" className="text-sm font-semibold">الرقم القومي</Label>
              <Input
                id="nationalId"
                type="text"
                placeholder="أدخل الرقم القومي الخاص بك"
                value={nationalId}
                onChange={(e) => setNationalId(e.target.value)}
                disabled={loading}
                className="text-left font-mono text-lg h-12"
                dir="ltr"
              />
            </div>
          </CardContent>
          <CardFooter className="pt-2 pb-6">
            <Button type="submit" size="lg" className="w-full text-base font-bold h-12 shadow-md transition-all hover:shadow-lg" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                  جاري التحقق...
                </>
              ) : (
                "عرض النتيجة"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </motion.div>
  );
}
