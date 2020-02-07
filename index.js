function Display(){
  var con = document.getElementById("dsp");
  var var_more_text = document.getElementById("more_text");
  if(con.style.display=='none')
  {
    con.style.display = 'inline';
    var_more_text.innerHTML = "개발과정 기록 접기";
  }
  else
  {
    con.style.display = 'none';
    var_more_text.innerHTML = "개발과정 기록 더보기";
  }
}
