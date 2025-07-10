"use client";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { set } from "mongoose";

export default function RetrievePage() {
  const [shareCode, setShareCode] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [retrievedText, setRetrievedText] = useState("");
  const [copied, setCopied] = useState(false);
  const [errMsg, setErrMsg] = useState("");



  // share code changes (user starts typing), remove error msg
  useEffect(()=>{
    setErrMsg("")

  },[shareCode]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    const res= await fetch(`/api/retrieve-text?code=${encodeURIComponent(shareCode)}`,{
      method:'GET',
    });
    if(!res.ok){
      setErrMsg("Invalid or expired sharing code!")
      return;
    }



    const {text}=await res.json();  // DEBUGGING: console.log(text);
    
    setRetrievedText(text);
    setShowResult(true);


   
  }
  catch(err){
    console.error("ERROR LOGS:",err)
    setErrMsg("Server Down! Please try again Later")
  }




    
    
    
  };

  const handleBack = () => {
    setShowResult(false);
    setShareCode("");
    setRetrievedText("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-2 pb-40 sm:pb-0">
      <div className="w-full max-w-md rounded-xl shadow-lg p-6 flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-center mb-2">Retrieve Shared Text</h1>
        {!showResult ? (
          <>
            <p className="text-center text-muted-foreground text-base max-w-xs mx-auto mb-2">
              Enter your share code below to retrieve your shared text.
            </p>
            {errMsg && (
              <div className="text-red-600 text-center text-sm mb-2">{errMsg}</div>
            )}
            <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
              <label htmlFor="share-code" className="text-sm font-medium text-foreground">Enter share code</label>
              <Input
                id="share-code"
                value={shareCode}
                minLength='4'
                required
                onChange={e => setShareCode(e.target.value)}
                placeholder="e.g. 0cb2"
                className="w-full"
              />
              <Button type="submit" className="w-full">Retrieve</Button>
              <Link href="/">
                <Button type="button" variant="secondary" className="w-full cursor-pointer">Share text</Button>
              </Link>
            </form>
          </>
        ) : (
          <div className="flex flex-col gap-4 w-full">
            <Textarea
              value={retrievedText}
              readOnly
              className="w-full min-h-[120px] max-h-[250px] rounded-lg"
            />
            <Button
              type="button"
              className="w-full"
              
              disabled={copied}
              onClick={async () => {
                let success = false;
                if (navigator.clipboard && window.isSecureContext) {
                  try {
                    await navigator.clipboard.writeText(retrievedText);
                    success = true;
                  } catch {}
                }
                if (!success) {
                  // fallback for mobile/older browsers
                  const textarea = document.createElement('textarea');
                  textarea.value = retrievedText;
                  textarea.setAttribute('readonly', '');
                  textarea.style.position = 'absolute';
                  textarea.style.left = '-9999px';
                  document.body.appendChild(textarea);
                  textarea.select();
                  try {
                    document.execCommand('copy');
                    success = true;
                  } catch {}
                  document.body.removeChild(textarea);
                }
                if (success) {
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1000);
                }
              }}
            >
              {copied ? (
                <span className="flex items-center justify-center gap-1">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Copied
                </span>
              ) : (
                "Copy to clipboard"
              )}
            </Button>
            <Button type="button" variant="secondary" className="w-full" onClick={handleBack}>
              Back
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
