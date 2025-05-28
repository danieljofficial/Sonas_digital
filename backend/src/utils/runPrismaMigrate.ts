import { exec } from 'child_process';
import util from 'util';

const execAsync = util.promisify(exec);

async function runPrismaMigrate() {
  try {
    console.log('Running Prisma migration...');
    const { stdout, stderr } = await execAsync('npx prisma migrate deploy');
    console.log(stdout);
    if (stderr) console.error('stderr:', stderr);
  } catch (error) {
    console.error('Prisma migration failed:', error);
  }
}
