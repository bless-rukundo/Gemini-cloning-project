
import { Plus, ChevronDown, Mic } from 'lucide-react';

export default function GeminiBackground() {
  return (
    <main className="relative flex min-h-[calc(100vh-72px)] min-w-0 flex-1 items-center justify-center overflow-hidden bg-[#131314] px-4 py-12 sm:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(66,133,244,0.2),transparent_58%),radial-gradient(ellipse_at_18%_72%,rgba(155,114,203,0.14),transparent_42%),radial-gradient(ellipse_at_82%_70%,rgba(217,101,112,0.12),transparent_40%)]"/>
      <section className="relative z-10 mx-auto flex w-full max-w-3xl -translate-y-5 flex-col items-center">
        <h1 className="mb-8 bg-clip-text text-center text-3xl font-normal tracking-tight sm:text-4xl">
          Where should we start?
        </h1>

        <div className="flex min-h-[60px] w-full justify-between gap-5 rounded-4xl border border-[#444746] bg-[#1e1f20]/95 p-5 shadow-[0_12px_48px_rgba(0,0,0,0.28)] transition-colors focus-within:border-[#747775] hover:bg-[#232526]">
          <div className="flex w-full items-center gap-3">
            <button
              type="button"
              aria-label="Add attachment"
              className="flex items-center justify-center rounded-full p-2 text-[#e3e3e3] transition-colors hover:bg-[#333537]"
            >
              <Plus className="h-5 w-5" />
            </button>

            <input
              type="text"
              placeholder="Ask Gemini"
              aria-label="Ask Gemini"
              className="min-w-0 flex-1 border-none bg-transparent text-base text-white outline-none placeholder:text-[#c4c7c5]"
            />
          </div>

          <div className="flex w-full items-center justify-end gap-2">
            <button
              type="button"
              className="flex items-center gap-2 text-sm text-[#e3e3e3] transition-colors hover:text-white"
            >
              <span>
                Gemini <span className="text-[#a8c7fa]">Auto</span>
              </span>
              <ChevronDown className="h-4 w-4" />
            </button>

            <button type="button" aria-label="Use microphone" className="flex items-center justify-center rounded-full p-2 text-[#e3e3e3] transition-colors hover:bg-[#333537]">
              <Mic className="h-5 w-5" />
            </button>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-[#9aa0a6]">
          Gemini can make mistakes, so double-check it
        </p>
      </section>
    </main>
  );
}
