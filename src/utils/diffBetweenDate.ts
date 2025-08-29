export function diffBetweenDate (start: Date, end: Date | "Present") {
  const endDate = end === "Present" ? new Date() : end;
  const diffInMs = endDate.getTime() - start.getTime();
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30.44));
}