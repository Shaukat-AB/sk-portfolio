export const GlassBg = ({
  variant = 'sm',
  className = '',
}: {
  variant?: 'sm' | 'md';
  className?: string;
}) => {
  const newStyle =
    (variant !== 'sm'
      ? 'md:inline-block md:top-0 md:h-20 md:to-bg-active/95 md:from-bg-active/0 hidden'
      : 'md:hidden') + className;
  return (
    <div
      className={`transition-all backdrop-blur-sm bg-linear-0 from-0% to-75% from-bg-active/95 to-bg-active/0 w-full h-100 fixed z-20 bottom-0 ${newStyle}`}
    ></div>
  );
};
