# Aliyun-Kit
Ali cloud kit (╯‵□′)╯︵┻━┻

## 阿里云 - 邮件推送

#### 使用

建议设置环境变量值，程序中可不传递

aliyun.accessKeyID

aliyun.accessKeySecret

#### Doc

[单一发信接口 SingleSendMail](https://help.aliyun.com/document_detail/29444.html?spm=5176.doc29426.6.570.agYUjQ)

[公共参数](https://help.aliyun.com/document_detail/29440.html?spm=5176.doc29444.2.3.PT3Fad)

[签名机制](https://help.aliyun.com/document_detail/29442.html?spm=5176.doc29440.2.2.X0TTCW)

[Nodejs Crypto](https://nodejs.org/dist/latest-v7.x/docs/api/crypto.html)

[浅谈nodejs中的Crypto模块](https://cnodejs.org/topic/504061d7fef591855112bab5)

[HMAC_SHA1和SHA1的区别](http://blog.csdn.net/yinkai1205/article/details/8313589)

#### Demo

``` javascript
const mail = require('../index').mail;

request
    .get(mail.getUrl())
    .query(mail.getQuery({
        AccountName: 'mail@xyz.cn',
        ToAddress: 'xx@qq.com',
        Subject: 'Test',
        FromAlias: 'Admin',
        HtmlBody: '<h1>demo</h1>',
        TextBody: 'demo'
    }, 'GET', 'accessKeyID', 'accessKeySecret'))
    .end(function (err, res) {});
```


## toISOString
 
[toISOString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)

#### Examples

``` javascript
var today = new Date('05 October 2011 14:48 UTC');

console.log(today.toISOString()); // Returns 2011-10-05T14:48:00.000Z
```

#### Polyfill

``` javascript
if (!Date.prototype.toISOString) {
  (function() {

    function pad(number) {
      if (number < 10) {
        return '0' + number;
      }
      return number;
    }

    Date.prototype.toISOString = function() {
      return this.getUTCFullYear() +
        '-' + pad(this.getUTCMonth() + 1) +
        '-' + pad(this.getUTCDate()) +
        'T' + pad(this.getUTCHours()) +
        ':' + pad(this.getUTCMinutes()) +
        ':' + pad(this.getUTCSeconds()) +
        '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
        'Z';
    };

  }());
}
```

