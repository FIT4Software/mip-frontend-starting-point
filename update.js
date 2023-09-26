import { exec } from 'child_process';
import { rmSync, rename, unlinkSync } from 'node:fs';

exec(
  'git clone https://github.com/FIT4Software/mip-frontend-starting-point.git',
  { cwd: 'C:/' },
  (err) => {
    if (err) {
      throw err;
    }

    rmSync('./src/starting-point', { recursive: true, force: true }, (err) => {
      if (err) {
        throw err;
      }
    });

    rmSync('./src/starting-point', { recursive: true, force: true }, (err) => {
      if (err) {
        throw err;
      }
    });

    unlinkSync('./README.md', (err) => {
      if (err) {
        throw err;
      }
    });

    rename(
      'C:/mip-frontend-starting-point/README.md',
      './src/starting-point/README.md',
      (err) => {
        if (err) {
          throw err;
        }
      }
    );

    rename(
      'C:/mip-frontend-starting-point/src/starting-point',
      './src/starting-point',
      (err) => {
        if (err) {
          throw err;
        }
      }
    );

    rmSync(
      'C:/mip-frontend-starting-point',
      { recursive: true, force: true },
      (err) => {
        if (err) {
          throw err;
        }
      }
    );
  }
);
