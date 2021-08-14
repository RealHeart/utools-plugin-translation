export default interface Lang {
    name: string,
    google: string,
    baidu: string,
    tencent: string
}

export const lang = {
    chinese: {
        name: '中文',
        google: 'zh-CN',
        baidu: 'zh',
        tencent: 'zh'
    },
    english: {
        name: '英语',
        google: 'en',
        baidu: 'en',
        tencent: 'en'
    },
    japanese: {
        name: '日语',
        google: 'ja',
        baidu: 'jp',
        tencent: 'jp'
    }
}