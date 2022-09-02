(function () {
    'use strict';

    clearCookie();
    var wenjuan_url = location.href;
    if(wenjuan_url.includes('/vm/')){
       wenjuan_url = wenjuan_url.replace('/vm/','/vj/');
       alert('已切换至PC端地址，请再次点击书签进行自动填写^-^');
       location.href = wenjuan_url;
       return;
    }
    if (window.location.href.indexOf('https://www.wjx.cn/wjx/join/complete.aspx') != -1) {
        window.location.href = wenjuan_url;
    } else if (window.location.href == wenjuan_url) {
    } else {
        return
    }

    window.scrollTo(0, document.body.scrollHeight)

    var lists = document.querySelectorAll('.ulradiocheck')
    var ccc = 0;
    var liangbiao_index = 0;
    var xiala_index = 0;
    var ops;
    var bili;
    var temp_flag;
    var tiankong_list;
    var liangbiao_lists;
    var min_options;

    tiankong_list = ['H00613'];
    bili = [100];
    document.querySelector('#q1').value = tiankong_list[danxuan(bili)]

    tiankong_list = ['熊飞鸿'];
    bili = [100];
    document.querySelector('#q2').value = tiankong_list[danxuan(bili)]

    let today = formatDate();
    tiankong_list = [today];
    bili = [100];
    document.querySelector('#q3').value = tiankong_list[danxuan(bili)]

    tiankong_list = ['13080789465'];
    bili = [100];
    document.querySelector('#q4').value = tiankong_list[danxuan(bili)]

    ops = lists[ccc].querySelectorAll('li')
    ccc += 1
    bili = [100];
    ops[danxuan(bili)].click()

    ops = lists[ccc].querySelectorAll('li')
    ccc += 2
    bili = [0, 100];
    ops[danxuan(bili)].click()

    ops = lists[ccc].querySelectorAll('li')
    ccc += 1
    bili = [0, 100];
    ops[danxuan(bili)].click()

    ops = lists[ccc].querySelectorAll('li')
    ccc += 2
    bili = [0, 100];
    ops[danxuan(bili)].click()

    ops = lists[ccc].querySelectorAll('li')
    ccc += 1
    bili = [0, 100];
    ops[danxuan(bili)].click()

    ops = lists[ccc].querySelectorAll('li')
    ccc += 1
    bili = [0, 100];
    ops[danxuan(bili)].click()

    ops = lists[ccc].querySelectorAll('li')
    ccc += 1
    bili = [100];
    ops[danxuan(bili)].click()

    ops = lists[ccc].querySelectorAll('li')
    ccc += 1
    bili = [100];
    ops[danxuan(bili)].click()

    ops = lists[ccc].querySelectorAll('li')
    ccc += 1
    bili = [100];
    ops[danxuan(bili)].click()

    function leijia(list,num){
        var sum = 0
        for(var i=0;i<num;i++){
            sum+=list[i];
        }
        return sum;
    }

    function randomNum(minNum, maxNum) {
        switch (arguments.length) {
            case 1:
                return parseInt(Math.random() * minNum + 1, 10);
                break;
            case 2:
                return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                break;
            default:
                return 0;
                break;
        }
    }

    function isInRange(num, start, end) {
        if (num >= start && num <= end) {
            return true;
        } else {
            return false;
        }
    }

    function danxuan(bili) {
        var pp = randomNum(1, 100)
        for (var i = 1; i <= bili.length; i++) {
            var start = 0;
            if (i != 1) {
                start = leijia(bili, i - 1)
            }
            var end = leijia(bili, i);
            if (isInRange(pp, start, end)) {
                return i - 1;
                break;
            }
        }
    }

    function clearCookie() {
        var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
        if (keys) {
            for (var i = keys.length; i--;) {
                document.cookie = keys[i] + '=0;path=/;expires=' + new Date(0).toUTCString();
                document.cookie = keys[i] + '=0;path=/;domain=' + document.domain + ';expires=' + new Date(0).toUTCString();
                document.cookie = keys[i] + '=0;path=/;domain=kevis.com;expires=' + new Date(0).toUTCString();
            }
        }
    }

    function formatDate() {
        var date = new Date();
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + '-' + m + '-' + d;
    }
})();
