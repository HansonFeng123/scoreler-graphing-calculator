# Graphing calculator for Scoreler

An offline toolbox plugin based on [Equation.io](https://github.com/aantthony/equation.io), copyright 2026 Anthony Foster, licensed under MIT. The full license is in LICENSE and the in-app Credits & limits dialog. Source is pinned in UPSTREAM.md. Scoreler integration and offline adaptation are recorded in build.cjs.

## Scope

The goal is a Desmos-style study workflow, not an exact Desmos clone. No Desmos code, branding or assets are included. Equation.io uses its own text syntax. Multiple equations, custom functions, variables/sliders, implicit curves, inequalities, piecewise definitions, parametric curves, tables and regression are provided by the upstream engine. Specific capabilities must be verified in Scoreler before release; upstream support alone is not a passing integration test.

Examples (one expression per line):

- `a = 2`, `y = a sin(x)`
- `x^2 + y^2 = 4`
- `y < sin(x)`
- `y = {x < 0: -x, x >= 0: x^2}`
- `(cos(2pi u), sin(2pi u))`
- `f(x) = x^3`, `y = d/dx f(x)`

Pan by dragging the graph; zoom with the wheel. Edit the expression list directly. The examples menu shows additional Equation.io syntax.

## Offline limits

Network, cloud sharing, file import/export, clipboard integration and background-worker solvers are unavailable. Graphs are held in memory for the current window and are not saved when it closes. Unsupported background traces report an error. Numeric plots may omit discontinuities or depend on sampling and viewport. This plugin is not affiliated with Desmos.

## Build

Use Node.js, run `npm install`, then `npm run build`. Package only manifest.json, index.html, LICENSE and README.md as a flat ZIP. Do not package node_modules or vendor sources. The repository retains the reusable MIT source separately for review and reproducibility.

## 中文

这是基于 Anthony Foster 的 Equation.io（MIT 许可）的 Scoreler 离线图形计算器插件。原作者、上游链接及完整许可保留在源码和界面中。目标是接近 Desmos 的学习绘图流程，但不是完全兼容的克隆，表达式采用 Equation.io 语法。支持范围和限制见上文；关闭窗口后不保存图形。网络、云端分享、文件导入导出、剪贴板集成及后台工作线程求解器不可用。

