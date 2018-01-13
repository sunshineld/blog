var txt = '<nav>\n' +
    '\t\t\t\t<h3>欢迎您来到管理后台</h3>\n' +
    '\t\t\t\t<p>登陆名：<strong>Admin</strong><br/>身　份：<strong>超级管理员</strong></p>\n' +
    '\t\t\t\t<dl>\n' +
    '\t\t\t\t\t<dt><span class="icon news"></span>文章管理</dt>\n' +
    '\t\t\t\t\t<dd>\n' +
    '\t\t\t\t\t\t<a href="add.html">-&emsp;发布文章</a>\n' +
    '\t\t\t\t\t\t<a href="list.html">-&emsp;文章列表</a>\n' +
    '\t\t\t\t\t</dd>\n' +
    '\t\t\t\t</dl>\n' +
    '\t\t\t</nav>';

    document.write(txt);

//    导航收缩展开
    $(function(){
        $('dt').click(function(){
            var obj=$(this).next();
            if($(this).next().css('display')=='block'){
                obj.hide('fast');
                $(this).removeClass('on');
            }else{
                obj.show('fast');
                $(this).addClass('on');
            }
        });
    });