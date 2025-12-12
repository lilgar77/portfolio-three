export function EnterButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-sky-500/40 bg-sky-500/10 px-8 py-2 text-sm font-medium uppercase tracking-[0.25em] text-sky-200 backdrop-blur transition hover:bg-sky-500/20 hover:text-sky-100"
    >
      Entrer
    </button>
  )
}
