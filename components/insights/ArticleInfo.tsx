type ArticleInfoProps = {
    category: string;
    readTime: string;
    date: string;
  };
  
  export function ArticleInfo({
    category,
    readTime,
    date,
  }: ArticleInfoProps) {
    return (
      <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
        <span className="font-semibold text-[#0D5845]">
          {category}
        </span>
  
        <span className="text-slate-300">•</span>
  
        <span>{readTime}</span>
  
        <span className="text-slate-300">•</span>
  
        <span>{date}</span>
      </div>
    );
  }