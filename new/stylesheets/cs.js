//展开和收缩
$(".zhan").live('click', function () {
    var strid = $(this).attr("dataid");
    $(this).css('display', 'none');
    $('.zs' + strid).css('display', 'block');
    $('.shou' + strid).css('display', 'block');
});
$(".shou").live('click', function () {
    var strid = $(this).attr("dataid");
    $(this).css('display', 'none');
    $('.zs' + strid).css('display', 'none');
    $('.zhan' + strid).css('display', 'block');
});