export function buildIconPath(mainPath: string, active: boolean): string {
    return mainPath + (active ? 'Active.svg' : '.svg');
}