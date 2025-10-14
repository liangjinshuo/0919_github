// 通过 NPM dependencies 成功安装 NPM 包后此处可引入使用
// 如安装 linq 包后就可以引入并使用这个包
// const linq = require("linq");

/**
 * @param {Params}  params     自定义参数
 * @param {Context} context    上下文参数，可通过此参数下钻获取上下文变量信息等
 * @param {Logger}  logger     日志记录器
 *
 * @return 函数的返回数据
 */
 module.exports = async function (params, context, logger) {
  // 日志功能
  logger.info(params.params_text);
  logger.info(params.params_multilingual);
  logger.info(params.params_richtext);
  logger.info(params.params_datatime);
  logger.info(params.params_boolean);
  logger.info(params.params_mobilenumber);
  logger.info(params.params_record);
  logger.info(params.params_RecordList);
  logger.info(params.params_email);
  logger.info(params.params_bigint);
  logger.info(params.params_Decimal);
  logger.info(params.params_number);
  logger.info(params.params_data);

  // 直接将所有入参作为出参返回
  return {
    params_text: params.params_text,
    params_multilingual: params.params_multilingual,
    params_richtext: params.params_richtext,
    params_datatime: params.params_datatime,
    params_boolean: params.params_boolean,
    params_mobilenumber: params.params_mobilenumber,
    params_record: params.params_record,
    params_RecordList: params.params_RecordList,
    params_email: params.params_email,
    params_bigint: params.params_bigint,
    params_Decimal: params.params_Decimal,
    params_number: params.params_number,
    params_data: params.params_data
  }
}