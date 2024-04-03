# 🀄️ 🌏 🔗 ZhUrlChain | 一个链接领略中文互联网的魅力

## 链接
- 🔗 👉 [ZhUrlChain | 一个链接领略中文互联网的魅力](https://www.yuque.com/r/goto?url=https%3A%2F%2Fweibo.cn%2Fsinaurl%3Fu%3Dhttps%253A%252F%252Fwww.oschina.net%252Faction%252FGoToLink%253Furl%253Dhttps%25253A%25252F%25252Fgitee.com%25252Flink%25253Ftarget%25253Dhttps%2525253A%2525252F%2525252Fwww.douban.com%2525252Flink2%2525252F%2525253Furl%2525253Dhttps%252525253A%252525252F%252525252Flink.csdn.net%252525252F%252525253Ftarget%252525253Dhttps%25252525253A%25252525252F%25252525252Fwww.coolapk.com%25252525252Flink%25252525253Furl%25252525253Dhttps%2525252525253A%2525252525252F%2525252525252Fwww.baike.com%2525252525252Fredirect_link%2525252525253Furl%2525252525253Dhttps%252525252525253A%252525252525252F%252525252525252Flink.juejin.cn%252525252525252F%252525252525253Ftarget%252525252525253Dhttps%25252525252525253A%25252525252525252F%25252525252525252Flink.zhihu.com%25252525252525252F%25252525252525253Ftarget%25252525252525253Dhttps%2525252525252525253A%2525252525252525252F%2525252525252525252Fsspai.com%2525252525252525252Flink%2525252525252525253Ftarget%2525252525252525253Dhttps%252525252525252525253A%252525252525252525252F%252525252525252525252Fgithub.com%252525252525252525252FyArna%252525252525252525252FZhUrlChain)
 
 

<img height="307" src="https://github.com/yArna/ZhUrlChain/assets/82231420/c42fb5b3-ad19-4246-bac1-de0f4cffa919">


## Usege


```shell
$ npx jsr add @yarna/zh-url-chain
```

```ts
import { genZhUrlChain } from "@yarna/zh-url-chain";

let urlChain = genZhUrlChain("https://google.com")
```

## 这是什么？

在网站中跳转到第三方链接时，会有一个跳出提示的页面，这常被称为 「链接过滤器/Link Filter」、「链接垫片/Link Shims」、「中间页/Intermediary Page」。

在上古时代，这或许是为了维护搜索引擎权重（但早就不再有效），或许是为了统计出站点击量。但后来这更多的是一种防止恶意链接的安全措施（例如外链一个和当前网站外观一样的钓鱼站点诱骗用户输入密码）。

不仅仅是中文互联网的站点，很多网站都有类似的机制，比如
[Facebook](https://www.facebook.com/flx/warn/?u=http%3A%2F%2Fnon-facebook.com%2F%3Ffbclid%3DIwAR0koRn7KxO7EW0SVPxn4jV446dMtx5fB1bHwu71h0pPK1doPFlkh3O5Ga4_aem_AahKPAEkqEvzML8pINns9UHYq-fPnvYlOZazR7EyrsFbTsmmsw2E9Ljudt8Aiz_N09RTXOdAKDSBVqge0xV2ZYf2&h=AT0LOfIDDnxefB8WXjh_CKrOEeumT4uS5ZIuYN-WUKsHaIiKyY6ti5fLHkXZ3k6CvBKMlplZd8hflh6GD726lezJoScEpE1M9PjVT0teVePCfElYgRBr-LjZnWvw1ZII), [Steam](https://steamcommunity.com/linkfilter/steamgifts.com)

但是，为什么我们的感受中这种机制在中文互联网站点中更为常见呢？因为这种机制在国外的站点只在比较大型的网站中使用，而且为了保持一定的用户体验，往往不是每个页面的外链都会触发，遇到的概率没有那么大。

而国内的站点只要稍微大一点，就会使用这种机制，因为的国内的备案网站，会时常被网信办的爬虫检查（还有云服务提供商的自查），如果检查到某个外链有不符合国内法规的问题，会影响备案和运营，所以有很强的动机把外站链接都做成是动态跳转的，不被静态抓取，避免麻烦。

🫡 所以这种「外部链接跳转页」在中文世界大放异彩，它不仅是一道坚固的网络安全防线，保护亿万网民免受恶意链接和网络诈骗的侵扰，更是一项创新的技术实践，体现了中文互联网对于用户体验和内容管理的深思熟虑与不懈努力。
通过这一机制，中文互联网站点展现了其对于维护网络环境健康、促进信息安全的高度责任感，同时也彰显了对于法律法规的尊重与遵循。外部链接跳转页的普及和优化，不仅提升了用户的网络体验，还为网站运营者提供了有效的版权保护和法律风险防控手段。
这一机制的成功运用，是中文互联网智慧的结晶，是技术与法规相结合的典范，是中文互联网不断创新、追求卓越的生动体现。让我们为外部链接跳转页在中文世界中的大放异彩点赞，为它所带来的积极影响和贡献致以崇高的敬意！



### Next
下次让我们去到欧罗巴，领略 Cookie Policy 弹窗的魅力。
