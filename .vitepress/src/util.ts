export function uriName(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-')
}