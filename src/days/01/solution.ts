export async function solve(input: string): Promise<{ part1: number | string; part2: number | string }> {
    const lines = input.split('\n');
    
    const list1: number[] = [];
    const list2: number[] = [];

    for (const line of lines) {
        const cols = line.split(/\s+/);
        list1.push(Number.parseInt(cols[0]));
        list2.push(Number.parseInt(cols[1]));
    }

    list1.sort();
    list2.sort();

    const distance = list1.reduce((sum, val, i) => sum + Math.abs(val - list2[i]), 0);

    // Part 1
    const part1 = distance;

    // Part 2
    const part2 = 0;

    return { part1, part2 };
}
