#!/usr/bin/env node

const args = ['run build'];
const opts = { stdio: 'inherit', cwd: 'client', shell: true };
const cp = require('child_process');
cp.spawn('npm', args, opts);
