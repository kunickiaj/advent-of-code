import fs from 'fs';
import path from 'path';

const day = process.argv[2]?.padStart(2, '0');

if (!day) {
    console.error('Please provide a day number');
    process.exit(1);
}

const dayPath = path.join(__dirname, 'days', day);

// Create directory
fs.mkdirSync(dayPath, { recursive: true });

// Copy template
const templatePath = path.join(__dirname, 'template', 'solution.ts');
const solutionPath = path.join(dayPath, 'solution.ts');

if (!fs.existsSync(solutionPath)) {
    fs.copyFileSync(templatePath, solutionPath);
}

// Create empty input files
fs.writeFileSync(path.join(dayPath, 'input.txt'), '');
fs.writeFileSync(path.join(dayPath, 'test.txt'), '');

console.log(`Created files for day ${day}`);
