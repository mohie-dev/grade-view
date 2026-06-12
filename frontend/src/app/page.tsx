import { LoginForm } from "@/components/student/LoginForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 relative overflow-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Decorative background shapes */}
      <div className="absolute top-0 -translate-y-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Spacer for vertical centering */}
      <div className="flex-1" />

      <div className="z-10 w-full max-w-md md:max-w-lg lg:max-w-xl flex flex-col items-center gap-8 px-4">
        <LoginForm />
      </div>

      {/* Spacer for vertical centering */}
      <div className="flex-1" />

      {/* Footer */}
      <footer className="z-10 w-full text-center py-4">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          © Developed by <a className="text-primary font-bold text-[24px]" href="https://mohie-dev.vercel.app/" target="_blank" rel="noopener noreferrer">Mohie</a>
        </p>
      </footer>
    </main>
  );
}
