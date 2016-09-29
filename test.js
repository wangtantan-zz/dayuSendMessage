/**
 * Module dependencies.
 */

TopClient = require('./topClient').TopClient;

const client = new TopClient({
  appkey: '23469046',
  appsecret: 'd66e6da2de042055140a4c22ca297251',
  REST_URL: 'http://gw.api.taobao.com/router/rest',
});

sendMessage("15216712252", "小豪去唱歌啊", console.log);

function sendMessage(mobile, content, cb) {
  console.log({
    extend   : '',
    sms_type : 'normal',
    sms_free_sign_name : '潭老师',
    sms_param : `{"num":"${content}"}`,
    rec_num : mobile,
    sms_template_code : "SMS_16730374"
  });

  client.execute('alibaba.aliqin.fc.sms.num.send', {
    extend   : '',
    sms_type : 'normal',
    sms_free_sign_name : '潭老师',
    sms_param : `{"num":"${content}"}`,
    rec_num : mobile,
    sms_template_code : "SMS_16730374"
  }, (err, ret) => {
    cb(err, ret);
  });
}
