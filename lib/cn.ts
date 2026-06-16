/**
 * Tiny classnames helper — joins truthy class strings.
 * Avoids a dependency for a one-line utility.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
