# Hexo Theme - Morgan
這是一個 [Hexo 主題](https://hexo.io/), 此版本使用 [Tocas-UI](https://tocas-ui.com) 2.2 版框架打造而成.

# 安裝

1. 把`摩根`主題安裝到 `themes` 目錄.

```
git clone https://github.com/hpcslag/hexo-theme-morgan.git themes/tocas-ui-morgan
```

2. 修改 `/_config.yml` 檔案，這個檔案是在 hexo 根目錄底下。 (不要修改到主題資料的檔案)


```yaml
theme: tocas-ui-morgan
```

3. 重新啟動 Hexo Server.

# 代碼上色

摩根用 [`hexo-prism-plugin`](https://github.com/ele828/hexo-prism-plugin) 來為代碼顯示顏色.

![](http://i.imgur.com/qcA4ZCY.png)

請按照以下方式安裝 (安裝在 hexo 目錄下)

```
npm i -S hexo-prism-plugin
```
安裝後，編輯 hexo 的 `/_config.yml`: 
 
```yaml
highlight:
  enable: false
```

然後在 `/_config.yml` 最後尾加入以下代碼:

```yaml
prism_plugin:
  mode: 'preprocess'    # realtime/preprocess
  theme: 'default'
  line_number: false    # default false
```

提示: 你可以更換 prism 的佈景, 請參考: [Prism Offical](http://prismjs.com/)

修改後, 請 clean hexo:

```
hexo clean
```

# 升級

你需要升級 `Morgan` 佈景, 請在以下輸入:
```shell
cd themes/tocas-ui-morgan/ && git pull && cd ../..
```

請注意 `Morgan` 目錄下的 _config.yml 需要備份。


# 設定
以下是基礎的摩根佈景設置，如果你需要的話。

請修改 `/themes/tocas-ui-morgan/_config.yml` :

### Disquz 評論系統
要打開 Disquz 評論，請把 `enabled_disqus` 這個欄位設定為 `true`, 然後把你的 DisqusURL 貼在 `disqus_url` 欄位。

| Config Key Name  | Value Description |
| ---------------- | ----------------- |
| disqus_url [string] | https://[your-site-name].disqus.com/embed.js      |
| enabled_disquzs [boolean] | true      |

### 口號、會動的副標題
口號是一個陣列，他會把你想要的副標題，用動畫呈現。 (動態副標題至少要大於 1 個口號)

| Config Key Name  | Value Description |
| ---------------- | ----------------- |
| slogan [array] | [ "Hallo, dit is mijn blog", "嗨，這是我的博客!","안녕하세요, 제 블로그입니다.", "Hi, This is my blog!", "こんにちは、私のブログへようこそ!", "مرحبا، مرحبا بك في مدونتي" ] |
| slogan_random_display [boolean] | false |
| slogan_color [Color] | "white" |

`slogan_random_display` 的設定是隨機在陣列中顯示口號。

`slogan_color` 可以設定為顏色的 CSS (支援 rgb, hex, rgba ...etc)。

### 部落格標題顏色

你可以把部落格標題顏色或背景更換 (所有的背景設定 background 可以設定為圖片 url(...) ):

| Config Key Name  | Value Description |
| ---------------- | ----------------- |
| title_color [Color] | #404040 |
| title_background_color [Color] | #f7f7f7 |

### 菜單的文字顏色或背景顏色更換

| Config Key Name  | Value Description |
| ---------------- | ----------------- |
| menu_text_color [Color] | #5a5a5a |
| menu_background_color [Color] | #f7f7f7 |

上面提到的佈景設定，預設都不是像這張圖片 (顏色佈景可以另外調整)，你可以參考最下面章節的佈景配色參考。

![](http://i.imgur.com/iTme1vy.png)

### 文字字顏色調整

這個設定只有在 `首頁` 生效， `文章` 中不會受到影響。

| Config Key Name  | Value Description |
| ---------------- | ----------------- |
| article_color [Color] | #3498db |
| article_color_hover [Color] | #34b2db |
| article_color_active [Color] | #2075c1 |

### `關於我` 小部件
`關於我` 小部件，會在首頁中顯示，可修改它的文字內容，或是否要開啟。

| Config Key Name  | Value Description |
| ---------------- | ----------------- |
| enabled_about_me [boolean] | true |
| about_me_text [string] | "About Me" |
| about_me_content [string] | "I am a dedicated person with a..." |

### 頁尾文字內容設定 (Copyright)
你可以自由修改頁尾的文字，總共有分大標題和小標題。

| Config Key Name  | Value Description |
| ---------------- | ----------------- |
| footer_big_content [string] | "" |
| footer_small_content [string] | "" |


# 螢幕截圖
Default Style:
![](http://i.imgur.com/0udrykv.png)

Blue-light Style:
![](http://i.imgur.com/FpAcAcH.png)

# 佈景配色參考

### Blue-light
**Screenshot:**

![](http://i.imgur.com/FpAcAcH.png)

**參考設置:**

| Config Key Name  | Value Description |
| ---------------- | ----------------- |
| slogan_color [Color] | white |
| menu_text_color [Color] | white |
| menu_background_color [Color] | #333333 |
| title_color [Color] | white |
| title_background_color [Color] | #34bed0 |

# 待完成清單 (於下一版中)

 - 增加更多配色
 - 更方便的配色設置頁面
 - 更新 Tocas 框架
 - 更新主題視覺

# LICENSE
Hexo Theme - Morgan is released under the [MIT License.](https://github.com/hpcslag/hexo-theme-morgan/blob/master/LICENSE)
