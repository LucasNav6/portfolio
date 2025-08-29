/**
 * Convierte un Date a string en formato local.
 * @param date - objeto Date
 * @param options - opciones de formateo opcionales
 * @param locale - locale, default "es-AR"
 * @returns string formateado
 */
export function formatDate(
  date: Date | "Present",
  options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' },
  locale: string = "en-US"
): string {
  if (date === 'Present') return date;
  return date.toLocaleDateString(locale, options);
}
