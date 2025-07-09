"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";

export default function MyAlertDialog({ isOpen, code = "A1B2-C3D4" }) {
  const [okEnabled, setOkEnabled] = useState(false);
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
    if (isOpen) {
      setOkEnabled(false);
      const timer = setTimeout(() => setOkEnabled(true), 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleOk = () => {
    setOpen(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Your Sharing Code</AlertDialogTitle>
          <AlertDialogDescription>
            <span className="flex flex-col items-center gap-2 mt-2">
              <span
                className="text-2xl font-mono font-bold tracking-widest bg-muted px-4 py-2 rounded-lg border select-all cursor-pointer hover:bg-accent transition text-center"
                title="Click to copy"
                onClick={() => navigator.clipboard && navigator.clipboard.writeText(code)}
              >
                {code}
              </span>
              <span className="text-base font-medium text-center text-muted-foreground">Copy this code to share text between your devices. You can't see this again!</span>
            </span>
          </AlertDialogDescription> 
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            asChild
            disabled={!okEnabled}
            onClick={handleOk}
          >
            <Button variant="default">{okEnabled ? "OK" : "Wait..."}</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
