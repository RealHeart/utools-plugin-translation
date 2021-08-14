import { http } from "../utils";
import ApiInfo from "./api-info";
import { Md5 } from "ts-md5";
import Lang from "./lang";
function str2utf8(str: string) {
    return eval('\'' + encodeURI(str).replace(/%/gm, '\\x') + '\'');
}
export default async function baidu(text: string, srcLang: Lang, toLang: Lang) {
    const appid = ApiInfo.baidu.id
    const key = ApiInfo.baidu.key

    const q = text
    const salt = (new Date).getTime();
    let str = appid + q + salt + key
    const sign = Md5.hashStr(str)
    const from = srcLang.baidu
    const to = toLang.baidu


    const data = await http.get('https://fanyi-api.baidu.com/api/trans/vip/translate', {
        q,
        from,
        to,
        appid,
        salt,
        sign
    })
    console.log(data);
    const error = data.error_code
    if (error) {
        return {
            dst: '错误: ' + error,
            src: text
        }
    }
    const result = data.trans_result[0]
    const dst = result.dst

    return {
        dst: dst,
        src: text
    }
}