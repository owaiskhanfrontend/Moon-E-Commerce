function OfflineErrorState({ onRetry, title = "No Internet Connection", message = "Please check your network settings and try reloading." }) {
  return (
    <div className="w-full min-h-80 flex flex-col items-center justify-center gap-4 p-8 text-center bg-gray-50/50 rounded border border-dashed border-gray-200 my-6 col-span-full">

      <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 010 12.728m-12.728 0a9 9 0 010-12.728m2.828 2.828a6 6 0 018.486 0m-8.486 8.486a6 6 0 010-8.486M12 12h.01" />
        </svg>
      </div>

      <div className="flex flex-col gap-1 max-w-sm">
        <h3 className="font-inter font-semibold text-gray-900 text-lg">
          {title}
        </h3>
        <p className="font-inter text-sm text-gray-500 leading-relaxed">
          {message}
        </p>
      </div>

      <button 
        onClick={onRetry || (() => window.location.reload())}
        className="mt-2 px-5 py-2.5 bg-brand-gray text-white font-inter text-xs font-semibold uppercase tracking-wider hover:bg-brand-dark transition-colors cursor-pointer"
      >
        Retry Connection
      </button>
    </div>
  );
}

export default OfflineErrorState;