$(Document).ready(function(){
    $("button").click(function(){
        var amount=$("input").val();
        var rate=$("#service").val();
        var no=$("#no").val();
        var res=amount*rate/100/no;
        $("label").text(res);
    });
});