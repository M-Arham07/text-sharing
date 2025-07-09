"use client";
import { createContext, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from 'next/link';
import MyAlertDialog from "@/components/custom-things/my-alert";


export default function Home() {
  const [value, setValue] = useState(""); //text area value
  const [scShow, setscShow] = useState(false); // share code triggering thing

  // setTimeout(()=>setscShow(true),2000) // SIMULATE FORM SUBMIT!


  // Calculate rows based on value (simple approach)
  const getRows = () => {
    const lines = value.split("\n").length;
    // Estimate extra rows for long lines
    const extra = Math.floor(value.length / 60);
    return Math.max(3, lines + extra);
  };





  return (

    <div className="min-h-screen flex items-center justify-center pb-40 sm:pb-0">
      {/* this alert shows the sharing code */}
      <MyAlertDialog isOpen={scShow} />
      <div className="w-full !max-w-lg flex flex-col gap-4 p-4  rounded-xl shadow-lg sm:max-w-sm xs:max-w-full xs:p-2 xs:mx-4 ">
        <div className="mb-4">
          <h1 className="text-3xl font-extrabold text-center tracking-tight text-primary mb-2">Text Shared</h1>
          <p className="text-center text-muted-foreground text-base max-w-xs mx-auto whitespace-pre-line">
            Share text between your devices instantly and securely.
          </p>
        </div>
        <form className="flex flex-col gap-4">
          <Textarea
            required
            placeholder="Type your message here."
            value={value}
            onChange={e => setValue(e.target.value)}
            rows={getRows()}
            className="min-h-[120px] max-h-[200px] sm:max-h-[250px] rounded-lg w-full"
          />
          <Button type="submit">Send message</Button>
        </form>


        <Button asChild variant="secondary">
          <Link href="/retrieve">Retrieve via share code</Link>
        </Button>

      </div>
    </div>
  );
}
