/** 一个链接领略中文互联网的魅力 */
export function genZhUrlChain(url: string, options?: {}) {
  let curUrl = url;
  for (const SITE of SITES) {
    curUrl = SITE(curUrl);
  }

  return curUrl;
}

const SITES = [
  // 少数派
  (url) => `https://sspai.com/link?target=${url}`,
  // 知乎
  (url) => `https://link.zhihu.com/?target=${url}`,
  // 简书
  (url) => `https://link.juejin.cn/?target=${url}`,
  // 抖音百科
  (url) => `https://www.baike.com/redirect_link?url=${url}`,
  // 酷安
  (url) => `https://www.coolapk.com/link?url=${url}`,
  // CSDN
  (url) => `https://link.csdn.net/?target=${url}`,
  // 豆瓣
  (url) => `https://www.douban.com/link2/?url=${url}`,
  // 哔哩哔哩游戏
  (url) => `https://game.bilibili.com/linkfilter/?url=${url}`,
  // Gitee
  (url) => `https://gitee.com/link?target=${url}`,
  // oschina
  (url) => `https://www.oschina.net/action/GoToLink?url=${url}`,
  // 微博
  (url) => `https://weibo.cn/sinaurl?u=${url}`,
  // 语雀
  (url) => `https://www.yuque.com/r/goto?url=${url}`,
];
