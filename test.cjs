const fs=require('fs'),p=require('path'),assert=require('node:assert/strict'),esbuild=require(process.env.SCORELER_ESBUILD || 'esbuild');
const code=`export {analyzeRows} from './vendor/equation/lib/analysis.ts'; export {parseExpr,evaluate} from './vendor/equation/lib/expr.ts';`;
const out=esbuild.buildSync({stdin:{contents:code,resolveDir:__dirname},bundle:true,write:false,platform:'node',format:'cjs'}).outputFiles[0].text;
const mod={exports:{}};new Function('module','exports','require',out)(mod,mod.exports,require);const {analyzeRows,parseExpr,evaluate}=mod.exports;
assert.equal(evaluate(parseExpr('x^2'),{x:2}),4);assert.ok(Math.abs(evaluate(parseExpr('sin(pi/2)'),{} )-1)<1e-12);
const cases=[['a = 2','y = a sin(x)'],['x^2 + y^2 = 4'],['y < sin(x)'],['y = {x < 0: -x, x >= 0: x^2}'],['(cos(2pi u), sin(2pi u))'],['f(x) = x^3',"y = d/dx f(x)"]];
for(const rows of cases){const result=analyzeRows(rows);assert.ok(result.rows);for(const row of result.rows)assert.equal(row.error,undefined,JSON.stringify(rows)+': '+row.error);console.log('PASS',rows.join('; '));}
console.log('Engine checks passed. These do not substitute for Electron rendering tests.');

