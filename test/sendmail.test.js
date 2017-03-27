/**
 * @file sendmail.test
 * Created by SmilnigXinyi on 2017/3/27.
 */

const mail = require('../index').mail;
const should = require('should');
const request = require('superagent');

describe('Ali Kit - mail push', () => {
    describe('# emailpusher - method: GET', () => {
        it('should push email success with GET', done => {
            const params = {
                AccountName: 'mail@xyz.cn',
                ToAddress: 'xx@qq.com',
                Subject: 'Test',
                FromAlias: 'Admin',
                HtmlBody: '<h1>demo</h1>',
                TextBody: 'demo'
            };

            const url = mail.getUrl();
            const query = mail.getQuery(params, 'GET', 'accessKeyID', 'accessKeySecret');

            request
                .get(url)
                .query(query)
                .end((err, res) => {
                    done(err)
                });
        })
    });

    describe('# emailpusher - method: POST', () => {
        it('should push email success with POST', done => {
            const params = {
                AccountName: 'mail@xyz.cn',
                ToAddress: 'xx@qq.com',
                Subject: 'Test',
                FromAlias: 'Admin',
                HtmlBody: '<h1>demo</h1>',
                TextBody: 'demo'
            };

            const url = mail.getUrl();
            const query = mail.getQuery(params, 'POST', 'accessKeyID', 'accessKeySecret');

            request
                .post(url)
                .send(query)
                .end((err, res) => {
                    done(err)
                });
        })
    })
});