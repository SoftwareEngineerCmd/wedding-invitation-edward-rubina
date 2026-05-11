export const Section = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) => {
  return (
    <section className="section" id={id}>
      {children}
    </section>
  );
};
