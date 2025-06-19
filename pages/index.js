import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cody, online</title>
      </Head>

      <main className="min-h-screen bg-yellow-400 flex flex-col items-center justify-center p-6">
        <div className="text-center">
          <div className="text-5xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black">Cody, online.</h1>
          <p className="text-gray-800 mt-2 mb-8">
            Sometimes Cotagonist. You can find me below.
          </p>

          <div className="space-y-4 w-full max-w-xs mx-auto">
            <LinkCard emoji="📷" label="Instagram" href="https://www.instagram.com/cotagonist/" />
            <LinkCard emoji="🧿" label="LinkedIn" href="https://www.linkedin.com/in/codymusser/" />
            <LinkCard emoji="❌" label="Cotagonist on X" href="https://twitter.com/Cotagonist" />
            <LinkCard emoji="🧑‍💻" label="At work" href="https://buildwithstudio.com" />
            <LinkCard emoji="🧙‍♂️" label="Sometimes I do business as" href="https://yeahwegood.com/" />
            <LinkCard emoji="✍️" label="I write" href="https://medium.com/@cotagonist" />
          </div>
        </div>
      </main>
    </>
  );
}

function LinkCard({ emoji, label, href }) {
  return (
    <a
      href={href}
      className="flex items-center justify-center space-x-2 text-black bg-white border border-black hover:scale-105 transition-transform duration-150 py-3 px-4 rounded-lg font-medium"
      style={{
        boxShadow: "6px 6px 0px rgba(0, 0, 0, 0.6)",
      }}
    >
      <span>{emoji}</span>
      <span>{label}</span>
    </a>
  );
}
