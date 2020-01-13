{%- set ccIcon = '<i class="fa fa-fw fa-creative-commons"></i>' %}
{%- set ccText = theme.creative_commons.license | upper %}

{% if page.copyright %}
<div>
<ul class="post-copyright">
  <li class="post-copyright-title">
    <strong>本文标题{{ __('symbol.colon') }} </strong>
    {{- page.title }}
  </li>
  <li class="post-copyright-author">
    <strong>{{ __('post.copyright.author') + __('symbol.colon') }} </strong>
    <a href="/" title="访问 {{ theme.author }} 的个人博客">{{- page.author or author }}</a>
  </li>
  <li class="post-copyright-title">
    <strong>{{ __('post.posted') + __('symbol.colon') }} </strong>
    {{ page.date.format("YYYY年MM月DD日 - HH:MM") }}
  </li>
  <li class="post-copyright-title">
    <strong>{{ __('post.edited') + __('symbol.colon') }} </strong>
    {{ page.updated.format("YYYY年MM月DD日 - HH:MM") }}
  </li>
  <li class="post-copyright-link">
    <strong>{{ __('post.copyright.link') + __('symbol.colon') }}</strong>
    {{ next_url(page.permalink, page.permalink, {title: page.title}) }}
    <span class="copy-path"  title="点击复制文章链接"><i class="fa fa-clipboard" data-clipboard-text="{{ page.permalink }}"  aria-label="复制成功！"></i></span>
  </li>
  <li class="post-copyright-license">
    <strong>{{ __('post.copyright.license_title') + __('symbol.colon') }} </strong>
    {{- __('post.copyright.license_content', next_url(ccURL, ccIcon + ccText)) }}
  </li>
</ul>
</div>
<script type="text/javascript" src="https://cdn.bootcss.com/jquery/2.0.0/jquery.min.js"></script>
<script type="text/javascript" src="/js/sweetalert.js"></script>
<script type="text/javascript" src="/js/clipboard.min.js"></script>
<script> 
  var clipboard = new ClipboardJS('.fa-clipboard');
  $(".fa-clipboard").click(function(){
    clipboard.on('success', function(){
      swal({   
        title: "",   
        text: '复制成功',
        icon: "success", 
        showConfirmButton: true
      });
    });
  });
</script>
{% endif %}