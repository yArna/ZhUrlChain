/** 一个链接领略中文互联网的魅力 */
export function genZhUrlChain(url: string, options?: {}): string {
  let curUrl = url;
  for (const SITE of SITES) {
    curUrl = SITE(curUrl);
  }

  return curUrl;
}

const SITES = [
  // 少数派
  (url: string) => `https://sspai.com/link?target=${encodeURIComponent(url)}`,
  // 知乎
  (url: string) => `https://link.zhihu.com/?target=${encodeURIComponent(url)}`,
  // 简书
  (url: string) => `https://link.juejin.cn/?target=${encodeURIComponent(url)}`,
  // 抖音百科
  (url: string) =>
    `https://www.baike.com/redirect_link?url=${encodeURIComponent(url)}`,
  // 酷安
  (url: string) =>
    `https://www.coolapk.com/link?url=${encodeURIComponent(url)}`,
  // CSDN
  (url: string) => `https://link.csdn.net/?target=${encodeURIComponent(url)}`,
  // 豆瓣
  (url: string) =>
    `https://www.douban.com/link2/?url=${encodeURIComponent(url)}`,
  // 哔哩哔哩游戏（只能复制链接）
  //   (url:string) => `https://game.bilibili.com/linkfilter/?url=${encodeURIComponent(url)}`,
  // Gitee
  (url: string) => `https://gitee.com/link?target=${encodeURIComponent(url)}`,
  // oschina
  (url: string) =>
    `https://www.oschina.net/action/GoToLink?url=${encodeURIComponent(url)}`,
  // 微博
  (url: string) => `https://weibo.cn/sinaurl?u=${encodeURIComponent(url)}`,
  // 语雀
  (url: string) =>
    `https://www.yuque.com/r/goto?url=${encodeURIComponent(url)}`,
];
