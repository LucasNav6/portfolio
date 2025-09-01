import React from "react";
import { Timeline } from "@/components/ui/timeline";

export interface IData {
  title: string;
  subtitle: string;
  content: string;
}

export function TimelineExperienceIsland({ experiences }: { experiences: IData[] }) {
  const data = experiences.map(exp => ({
    ...exp,
    content: <div dangerouslySetInnerHTML={{ __html: exp.content }} />
  }));

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
