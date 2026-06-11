export default function SectionHeading({ children }) {
  return (
    <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
      {children}
      <span className="flex-1 h-px bg-white/10 max-w-xs" />
    </h2>
  );
}
