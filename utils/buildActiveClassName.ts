export function buildActiveClassName(
    mainClass: string,
    activeClass: string,
    active: boolean
): string {
    const className = [mainClass];
    active && className.push(activeClass);
    return className.join(' ');
}