import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TargetCursor from "@/components/ui/TargetCursor";
import { PWAInstallPrompt } from "@/components/ui/pwa-install";
import { useIsMobile } from "@/hooks/use-mobile";
import Index from "./pages/Index";
import Timer from "./pages/Timer";
import Dashboard from "./pages/Dashboard";
import FocusRoom from "./pages/FocusRoom";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const isMobile = useIsMobile();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {!isMobile && (
          <TargetCursor 
            spinDuration={3}
            hideDefaultCursor={true}
          />
        )}
        <Toaster />
        <Sonner />
        <PWAInstallPrompt />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/timer" element={<Timer />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/focus-room" element={<FocusRoom />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
