export default function Logo({ className = "" }) {
  return (
    <a
      href="/"
      className={`group flex items-center ${className}`}
      aria-label="Zenvix Solutions — Home"
    >
      <img
        src="/images/zenvix-logo.png"
        alt="Zenvix Solutions"
        className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
      />
    </a>
  );
}