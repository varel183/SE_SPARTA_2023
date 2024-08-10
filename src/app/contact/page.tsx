"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Contact() {
  const [input, setInput] = useState<string>("");

  return (
    <section id="contact" className="p-6 bg-white">
      <div className="container mx-auto text-center max-w-screen-lg">
        <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
        <p className="text-lg text-gray-500 mb-8">I&apos;d love to hear from you!</p>
        <div className="flex flex-col sm:flex-row justify-center items-center mb-4">
          <label htmlFor="message" className="sr-only">Your Message</label>
          <Input
            id="message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your message"
            className="mr-2 w-full max-w-md border-input text-body text-slate-950"
          />
          <Button
            onClick={() => setInput("")}
            className="bg-primary text-primary-foreground ml-2"
            aria-label="Send Message"
          >
            Send
          </Button>
        </div>
        <div className="flex items-center justify-center space-x-4 mt-6">
          <a href="https://www.instagram.com/vrlz._" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/instagram.png"
              alt="instagram"
              width={40}
              height={40}
              className="hover:scale-125 transition-transform duration-400 ease-in-out"
            />
          </a>
          <a href="mailto:vareltiara@gmail.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/email_dark.png"
              alt="mail"
              width={40}
              height={40}
              className="hover:scale-125 transition-transform duration-400 ease-in-out"
            />
          </a>
          <a href="https://www.linkedin.com/in/varel-tiara" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/linkedin_dark.png"
              alt="LinkedIn"
              width={40}
              height={40}
              className="hover:scale-125 transition-transform duration-400 ease-in-out"
            />
          </a>
          <a href="https://github.com/varel183" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/github_dark.png"
              alt="GitHub"
              width={40}
              height={40}
              className="hover:scale-125 transition-transform duration-400 ease-in-out"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
