import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="text-center px-4">
          <h1 className="text-9xl font-bold text-blue-600/20">404</h1>
          <h2 className="text-3xl font-bold mb-4 -mt-8">Page Not Found</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/">
              <Button>
                <Home size={18} />
                Go Home
              </Button>
            </Link>
            <Button variant="secondary" onClick={() => window.history.back()}>
              <ArrowLeft size={18} />
              Go Back
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
