/**
 * Convierte un Date a string en formato local.
 * @param date - objeto Date
 * @param options - opciones de formateo opcionales
 * @param locale - locale, default "es-AR"
 * @returns string formateado
 */
export function formatDate(
  date: Date | "Present",
  options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' },
  locale: string = "en-US"
): { month: string; year: string, isPresent: boolean } {
  if (date === 'Present') return {
    isPresent: true,
    month: '',
    year: ''
  };
  const localDate = date.toLocaleDateString(locale, options)
  return {
    isPresent: false,
    month: localDate.split(' ')[0],
    year: localDate.split(' ')[1]
  };
}
