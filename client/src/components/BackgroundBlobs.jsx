// Animated gradient blobs, restored from the previously-deployed site —
// same fuchsia/cyan/violet blur blobs floating behind the flat navy
// background and dot grid.
export default function BackgroundBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-navy">
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-fuchsia-600/30 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl animate-blob animation-delay-4000" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-[size:32px_32px]" />
    </div>
  );
}
