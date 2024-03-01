function f(e,a,n={mode:"oneOf"}){Array.isArray(e)||(e=[e]);const t=new Set(Object.values(a).flat());return n.mode==="allOf"?!!e.length&&e.every(r=>t.has(r)):e.some(r=>t.has(r))}export{f as h};
//# sourceMappingURL=permissions-8yMqUF1Y.js.map
