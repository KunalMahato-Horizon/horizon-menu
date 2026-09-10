import React, { useState } from 'react';

const MenuCard = ({ menu }) => {
  const { name = "Unnamed Menu", slug = "", status = "published", path = `/menu/${slug}` } = menu || {};
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const fullUrl = `${window.location.origin}${path}`;
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = fullUrl;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const isLive = status === 'published';

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md hover:border-[#0D9488]/40 transition-all duration-200 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
              isLive
                ? 'bg-[#CCFBF1] text-[#0F766E]'
                : 'bg-amber-100 text-amber-700'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isLive ? 'bg-[#0D9488] animate-pulse' : 'bg-amber-500'
              }`}
            />
            {isLive ? 'Live' : 'Draft'}
          </span>

          <span className="text-[11px] font-mono text-[#64748B]">
            /{slug}
          </span>
        </div>

        <h3 className="text-base font-bold text-[#0F172A] tracking-tight group-hover:text-[#0D9488] transition-colors mb-2">
          {name}
        </h3>

        <div className="bg-[#FFFDF7] border border-slate-200/80 rounded-xl px-3 py-2 flex items-center justify-between text-xs font-mono text-[#64748B] mb-5">
          <span className="truncate">{path}</span>
          <span className="text-[10px] text-[#F97316] font-sans font-bold uppercase ml-2 flex-shrink-0">
            QR Ready
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
        <button
          type="button"
          onClick={handleCopy}
          className={`flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
            copied
              ? 'bg-[#0D9488] text-white shadow-xs'
              : 'bg-[#CCFBF1]/70 text-[#0F766E] hover:bg-[#CCFBF1] hover:text-[#0D9488]'
          }`}
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span>Copied!</span>
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Copy Link</span>
            </>
          )}
        </button>

        <a
          href={path}
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-xl bg-slate-100 text-[#64748B] hover:text-[#0F172A] hover:bg-slate-200 transition-colors"
          title="Open preview"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default MenuCard;