module.exports = async function (params, context, logger) {
  // 日志功能11
  logger.info(`${new Date()} 函数开始执行1`);
  const delayPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        logger.info(`sleep...`);
        resolve(); // 在执行完setTimeout后，调用resolve来结束Promise的执行
    }, 11400000);
});
  await delayPromise;
  logger.info(`${new Date()} 函数执行完成111`);
  // 在这里补充业务代码
}