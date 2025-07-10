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
  const [scode,setSCode] = useState(null) // SHARING CODE!
  const [errorMsg, setErrorMsg] = useState(""); // error message field
  const [loading, setLoading] = useState(false); // loading state


  // setTimeout(()=>setscShow(true),2000) // SIMULATE FORM SUBMIT!


  // Calculate rows based on value (simple approach)
  const getRows = () => {
    const lines = value.split("\n").length;
    // Estimate extra rows for long lines
    const extra = Math.floor(value.length / 60);
    return Math.max(3, lines + extra);
  };
  async function handleSubmit(e){
    e.preventDefault();
    setErrorMsg(""); // clear previous error
    setLoading(true);
    try{
      const res = await fetch('/api/share-text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: value })
      });
      if(!res.ok){ // if response is NOT OK
        throw new Error("error"); // this throws an error, catch will catch it
      }
      // AS RES IS OK SO PROCEED:
      const {CODE}= await res.json();
      setSCode(CODE); // sets Sharing code to code received from backend
      setscShow(true); // shows the popup for 5 seconds!
    }
    catch(err){
      console.error("Error logs:",err)
      setErrorMsg("Server Down! Please try again later");
      return;
    } finally {
      setLoading(false);
    }
  }





  return (
    <div className="min-h-screen flex items-center justify-center pb-50 sm:pb-0">
      {/* this alert shows the sharing code, that will be passed as props */}
      <MyAlertDialog isOpen={scShow} code={scode}/>
      <div className="w-full !max-w-lg flex flex-col gap-4 p-4  rounded-xl shadow-lg sm:max-w-sm xs:max-w-full xs:p-2 xs:mx-4 ">
        <div className="mb-4">
          <h1 className="text-3xl font-extrabold text-center tracking-tight text-primary mb-2">Text Shared</h1>
          <p className="text-center text-muted-foreground text-base max-w-xs mx-auto whitespace-pre-line">
            Share text between your devices instantly and securely.
          </p>
        </div>
        {errorMsg && (
          <div className="text-red-600 text-center text-sm mb-2">{errorMsg}</div>
        )}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Textarea
            required
            placeholder="Type your message here."
            value={value}
            onChange={e => setValue(e.target.value)}
            rows={getRows()}
            className="min-h-[120px] max-h-[200px] sm:max-h-[250px] rounded-lg w-full"
          />
          <Button type="submit" disabled={loading} className="flex items-center justify-center">
            {loading ? (
              <>
                <svg className="animate-spin mr-2 h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
                Please wait...
              </>
            ) : (
              "Send message"
            )}
          </Button>
        </form>
        <Button asChild variant="secondary">
          <Link href="/retrieve">Retrieve via share code</Link>
        </Button>
      </div>
    </div>
  );
}
