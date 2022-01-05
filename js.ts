// 函数柯里化
function curry(fn,...args) {
  // 如果入参个数和形参相等，执行函数
  if (args.length>fn.length) return fn(...args);
  // 否则 进一步柯里化
  return (...restArgs)=>curry(fn,...args,...restArgs);
}
