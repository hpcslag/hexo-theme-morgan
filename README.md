# Hexo Theme - Morgan
This is a [Hexo Theme](https://hexo.io/), Style-Framework based on [Tocas-UI](https://tocas-ui.com).

# Install

1. Move command to your hexo `themes` folder.

```
git clone https://github.com/hpcslag/hexo-theme-morgan.git themes/tocas-ui-morgan
```

2. Modify `_config.yml` on main folder:


```yaml
theme: tocas-ui-morgan
```

3. Restart Hexo Server.

# Config Setup
You can also setup something in this theme, follow this description.

Modify `/themes/_config.yml` :

### Disquz Comment
If you want to enable **Disqus** feature, please set `enabled_disqus` value to `true`, and also paste your url (before need to create your own Disqus URL) to `disqus_url`.

| Config Key Name  | Value Description |
| ---------------- | ----------------- |
| disqus_url [string] | https://[your-site-name].disqus.com/embed.js      |
| enabled_disquzs [boolean] | true      |

### Excerpt Length (ReadMore Less)

Set how long text you want to break, and system will insert **Read More** button after short content.

| Config Key Name  | Value Description |
| ---------------- | ----------------- |
| excerpt_length [int] | 400 |

### Slogan
Slogan conents is the animate that dispay on `Header`, if you just setting less then 2 slogan, then animate will not be play.

| Config Key Name  | Value Description |
| ---------------- | ----------------- |
| slogan [array] | [ "Hallo, dit is mijn blog", "嗨，這是我的博客!","안녕하세요, 제 블로그입니다.", "Hi, This is my blog!", "こんにちは、私のブログへようこそ!", "مرحبا، مرحبا بك في مدونتي" ] |
| slogan_random_display [boolean] | false |
| slogan_color [Color] | "white" |

Turn on the `slogan_random_display`, can make your slogan random show at every time visit website.

`slogan_color` can just set the color name of string (if browser support), or `rgb()`,`rgba()`, `#ffffff` ...etc

### Blog Title Colors

You can set the big title text color, and also background color:

| Config Key Name  | Value Description |
| ---------------- | ----------------- |
| title_color [Color] | #404040 |
| title_background_color [Color] | #f7f7f7 |

### Menu Text Colors

| Config Key Name  | Value Description |
| ---------------- | ----------------- |
| menu_text_color [Color] | #5a5a5a |
| menu_background_color [Color] | #f7f7f7 |

Above mentioned that key-value is not like this picture, but you can find theme color reference after the chapter.

![](http://i.imgur.com/iTme1vy.png)

### Summary Article Text Colors

This setting just can modify the title color on `index` page, it will not affect `article` reading page.

| Config Key Name  | Value Description |
| ---------------- | ----------------- |
| article_color [Color] | #3498db |
| article_color_hover [Color] | #34b2db |
| article_color_active [Color] | #2075c1 |

### About Me Widget
About Me is the widget on this theme, you can modify it to hide or show on the `index` page.

| Config Key Name  | Value Description |
| ---------------- | ----------------- |
| enabled_about_me [boolean] | true |
| about_me_text [string] | "About Me" |
| about_me_content [string] | "I am a dedicated person with a..." |

### Footer Content (Copyright)
Add your copyright information in this config, if keep setting be null, it will show default value information.

| Config Key Name  | Value Description |
| ---------------- | ----------------- |
| footer_big_content [string] | "" |
| footer_small_content [string] | "" |


# Screenshot
Default Style:
![](http://i.imgur.com/0udrykv.png)

Blue-light Style:
![](http://i.imgur.com/FpAcAcH.png)

# Theme Color Reference

### Blue-light
**Screenshot:**

![](http://i.imgur.com/FpAcAcH.png)

**Reference setting:**

| Config Key Name  | Value Description |
| ---------------- | ----------------- |
| slogan_color [Color] | white |
| menu_text_color [Color] | white |
| menu_background_color [Color] | #333333 |
| title_color [Color] | white |
| title_background_color [Color] | #34bed0 |

# LICENSE
Hexo Theme - Morgan is released under the [MIT License.](https://github.com/hpcslag/hexo-theme-morgan/blob/master/LICENSE)
