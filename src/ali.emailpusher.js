/**
 * @file ali.sendmail
 * Created by SmilnigXinyi on 2017/3/27.
 */
const crypto = require('crypto');

exports.getQuery = function (emailContent, method, accessKeyID, accessKeySecret) {
    try {
        var data = {
            Format: 'JSON',
            Version: '2015-11-23',
            SignatureMethod: 'HMAC-SHA1',
            SignatureVersion: '1.0',
            SignatureNonce: Date.now() + '-' + Math.floor(Math.random() * 90000 + 10000),
            Timestamp: new Date().toISOString(),
            Action: 'SingleSendMail',
            ReplyToAddress: false,
            AddressType: 1,
            AccountName: emailContent.AccountName,
            ToAddress: emailContent.ToAddress,
            FromAlias: emailContent.FromAlias,
            Subject: emailContent.Subject,
            AccessKeyId: accessKeyID || process.env.aliyun.accessKeyID
        };

        emailContent.HtmlBody ? data.HtmlBody = emailContent.HtmlBody : data.TextBody = emailContent.TextBody;
    }
    catch (err) {
        throw err
    }

    const sortData = Object.keys(data).sort().reduce((pre, cur) => {
        return pre.concat([`${encodeURIComponent(cur)}=${encodeURIComponent(data[cur])}`])
    }, []);

    const sortDataStr = sortData.join('&');

    let StringToSign = method + '&' + encodeURIComponent('/') + '&' + encodeURIComponent(sortDataStr);

    const Secret = (accessKeySecret || process.env.aliyun.accessKeySecret) + '&';

    const Signature = crypto.createHmac('sha1', Secret).update(StringToSign).digest('base64');

    data.Signature = Signature;

    return Object.keys(data).sort().reduce((pre, cur) => {
        return pre.concat([`${cur}=${data[cur]}`])
    }, []).join('&');
};

exports.getUrl = function () {
    return 'https://dm.aliyuncs.com/';
};