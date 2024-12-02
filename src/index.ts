// src/index.ts
import path from 'path';
import fs from 'fs';

interface PuzzleResult {
    part1: string | number;
    part2: string | number;
}

async function runDay(dayNumber: string) {
    const paddedDay = dayNumber.padStart(2, '0');
    const dayPath = path.join(__dirname, 'days', paddedDay);

    try {
        // Import the solution file
        const { solve } = await import(path.join(dayPath, 'solution.ts'));

        // Read input files
        const testInput = fs.readFileSync(path.join(dayPath, 'test.txt'), 'utf-8').trim();
        const input = fs.readFileSync(path.join(dayPath, 'input.txt'), 'utf-8').trim();

        // Run with test input
        console.log(`\n🎄 Day ${dayNumber} (Test Input):`);
        const testResult = await solve(testInput);
        console.log('Part 1:', testResult.part1);
        console.log('Part 2:', testResult.part2);

        // Run with actual input
        console.log(`\n🎄 Day ${dayNumber} (Actual Input):`);
        const result = await solve(input);
        console.log('Part 1:', result.part1);
        console.log('Part 2:', result.part2);

    } catch (error) {
        console.error(`Error running day ${dayNumber}:`, error);
    }
}

async function main() {
    const day = process.argv[2];

    if (!day) {
        console.error('Please provide a day number');
        console.log('Usage: yarn start <day>');
        console.log('Example: yarn start 1');
        process.exit(1);
    }

    await runDay(day);
}

main().catch(console.error);
