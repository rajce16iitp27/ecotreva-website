import { Container } from "@/components/ui/Container";

type ArticleContentProps = {
  content: string;
};

export function ArticleContent({ content }: ArticleContentProps) {
  const sections = content.trim().split(/\n(?=# )/);

  return (
    <section className="border-t border-border bg-white">
      <Container>
        <article className="mx-auto max-w-4xl py-12 sm:py-16">
          {sections.map((section, index) => {
            const lines = section.trim().split("\n");

            return (
              <div key={index} className={index > 0 ? "mt-6" : ""}>
                {lines.map((line, lineIndex) => {
                  const trimmedLine = line.trim();

                  if (!trimmedLine) return null;

                  if (trimmedLine.startsWith("# ")) {
                    return (
                      <h2
                        key={lineIndex}
                        className="mb-5 font-display text-3xl font-bold leading-tight text-[#0D5845]"
                      >
                        {trimmedLine.replace("# ", "")}
                      </h2>
                    );
                  }

                  if (trimmedLine.startsWith("## ")) {
                    return (
                      <h2
                        key={lineIndex}
                        className="mb-4 mt-6 font-display text-2xl font-bold leading-tight text-[#0D5845]"
                      >
                        {trimmedLine.replace("## ", "")}
                      </h2>
                    );
                  }

                  if (trimmedLine.startsWith("### ")) {
                    return (
                      <h3
                        key={lineIndex}
                        className="mb-3 mt-5 font-display text-xl font-semibold leading-tight text-[#0D5845]"
                      >
                        {trimmedLine.replace("### ", "")}
                      </h3>
                    );
                  }

                  if (trimmedLine.startsWith("- ")) {
                    return (
                      <li
                        key={lineIndex}
                        className="ml-6 list-disc pl-2 text-[17px] leading-8 text-slate-700"
                      >
                        {trimmedLine.replace("- ", "")}
                      </li>
                    );
                  }

                  return (
                    <p
                      key={lineIndex}
                      className="mb-2 text-[17px] leading-8 text-slate-700"
                    >
                      {trimmedLine}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </article>
      </Container>
    </section>
  );
}