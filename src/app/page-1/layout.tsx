export default function Layout({
                                     children
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-full">
      <div className="inline-block text-center justify-center w-full h-full">
        {children}
      </div>
    </section>
  )
}
