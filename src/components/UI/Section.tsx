export const Section = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) => {
  return (
    <section
      id={id}
      className="px-6 py-20 md:py-28 max-w-4xl mx-auto animate-fade-up"
    >
      {children}
    </section>
  );
};
