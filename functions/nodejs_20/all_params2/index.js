module.exports = async function (params, context, logger) {
  // 日志功能
  logger.info(params.params_list);
 // logger.info(params.params_map);
  logger.info(params.params_json);

  // 返回所有入参
  return {
    params_list: params.params_list,
   // params_map: params.params_map,
    params_json: params.params_json,
  };
}