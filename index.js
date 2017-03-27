/**
 * @file index
 * Created by SmilnigXinyi on 2017/3/27.
 */

const emailpusher = require('./src/ali.emailpusher')

exports.mail = {
    getQuery: emailpusher.getQuery,
    getUrl: emailpusher.getUrl
};