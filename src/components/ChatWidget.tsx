export function ChatWidget() {
  return (
    <a
      href="#contacto"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#1b72e8] text-white shadow-lg shadow-black/30 transition hover:scale-105"
      aria-label="Abrir chat"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M5 18.5V7.8A2.8 2.8 0 0 1 7.8 5h8.4A2.8 2.8 0 0 1 19 7.8v6.4A2.8 2.8 0 0 1 16.2 17H8.2L5 18.5z"
          fill="currentColor"
        />
      </svg>
    </a>
  )
}
