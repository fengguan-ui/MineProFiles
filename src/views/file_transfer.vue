<template>
  <div class="app-container cxgl-container">
    <div class="selection-container">
      <div class="select-box left">
        <div class="select-box-title">
          <input type="checkbox" class="checkbox-all" id="checkbox-all1" />
          <label for="checkbox-all1"></label>
          <span>列表一</span>
        </div>
        <div class="select-content">
          <ul class="unselect-ul">
            <li>
              <input
                type="checkbox"
                class="checkboxs"
                id="tyue-checkbox-blue1"
              />
              <label for="tyue-checkbox-blue1"></label>
              <span>备选项1</span>
            </li>
            <li>
              <input
                type="checkbox"
                class="checkboxs"
                id="tyue-checkbox-blue2"
              />
              <label for="tyue-checkbox-blue2"></label>
              <span>备选项2</span>
            </li>
            <li>
              <input
                type="checkbox"
                class="checkboxs"
                id="tyue-checkbox-blue3"
              />
              <label for="tyue-checkbox-blue3"></label>
              <span>备选项3</span>
            </li>
            <li>
              <input
                type="checkbox"
                class="checkboxs"
                id="tyue-checkbox-blue4"
              />
              <label for="tyue-checkbox-blue4"></label>
              <span>备选项4</span>
            </li>
            <li>
              <input
                type="checkbox"
                class="checkboxs"
                id="tyue-checkbox-blue5"
              />
              <label for="tyue-checkbox-blue5"></label>
              <span>备选项5</span>
            </li>
            <li>
              <input
                type="checkbox"
                class="checkboxs"
                id="tyue-checkbox-blue6"
              />
              <label for="tyue-checkbox-blue6"></label>
              <span>备选项6</span>
            </li>
            <li>
              <input
                type="checkbox"
                class="checkboxs"
                id="tyue-checkbox-blue7"
              />
              <label for="tyue-checkbox-blue7"></label>
              <span>备选项7</span>
            </li>
            <li>
              <input
                type="checkbox"
                class="checkboxs"
                id="tyue-checkbox-blue8"
              />
              <label for="tyue-checkbox-blue8"></label>
              <span>备选项8</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="arrows-box">
        <div class="arrow-btns">
          <button class="arrow-btn right">›</button>
          <button class="arrow-btn left">‹</button>
        </div>
      </div>
      <div class="select-box right">
        <div class="select-box-title">
          <input type="checkbox" class="checkbox-all" id="checkbox-all2" />
          <label for="checkbox-all2"></label>
          <span>列表二</span>
        </div>
        <div class="select-content">
          <ul class="selected-ul">
            <li>
              <input
                type="checkbox"
                class="checkboxs"
                id="tyue-checkbox-blue9"
              />
              <label for="tyue-checkbox-blue9"></label>
              <span>备选项9</span>
            </li>
            <li>
              <input
                type="checkbox"
                class="checkboxs"
                id="tyue-checkbox-blue10"
              />
              <label for="tyue-checkbox-blue10"></label>
              <span>备选项10</span>
            </li>
            <li>
              <input
                type="checkbox"
                class="checkboxs"
                id="tyue-checkbox-blue11"
              />
              <label for="tyue-checkbox-blue11"></label>
              <span>备选项11</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
$(function () {
  //全选函数
  $(".checkbox-all").click(function () {
    if ($(this).prop("checked")) {
      $(this).parent().next().find(".checkboxs").prop("checked", true);
    } else {
      $(this).parent().next().find(".checkboxs").prop("checked", false);
    }
    btn_status();
  });

  //单个checkbox与全选的关系函数
  $(".select-content").on("click", ".checkboxs", function (e) {
    var checkedAll = $(this)
      .parents(".select-content")
      .prev()
      .find(".checkbox-all");
    var checkboxs = $(this).prop("checked");
    if (!checkboxs && checkedAll.prop("checked")) {
      checkedAll.prop("checked", false);
    } else if (checkboxs && !checkedAll.prop("checked")) {
      var lis = $(this).parents("ul").children();
      for (var i = 0; i < lis.length; i++) {
        if ($(lis[i]).find(".checkboxs").prop("checked")) {
          if (i == lis.length - 1) {
            checkedAll.prop("checked", true);
          }
        } else {
          break;
        }
      }
    }
    stopFunc(e);
  });
  $(".select-content").on("click", "li", function () {
    $(this).children(".checkboxs").click();
    btn_status();
  });
  // 动态判断改变btn状态
  function btn_status() {
    var btn1 = document.getElementsByClassName("right")[0];
    var btn2 = document.getElementsByClassName("left")[1];
    var left_ul = document.getElementsByClassName("unselect-ul");
    var right_ul = document.getElementsByClassName("selected-ul");
    var left_ul_li = left_ul[0].children;
    var right_ul_li = right_ul[0].children;
    var left_btn = false;
    var right_btn = false;
    for (var i = 0; i < left_ul_li.length; i++) {
      if (left_ul_li[i].firstElementChild.checked == true) {
        left_btn = true;
      }
    }
    for (var i = 0; i < right_ul_li.length; i++) {
      if (right_ul_li[i].firstElementChild.checked == true) {
        right_btn = true;
      }
    }
    if (left_btn) {
      btn1.classList.add("btn-cursor");
    } else {
      btn1.classList.remove("btn-cursor");
    }
    if (right_btn) {
      btn2.classList.add("btn-cursor");
    } else {
      btn2.classList.remove("btn-cursor");
    }
  }
  //左右移按钮点击事件
  $(".arrow-btn").click(function () {
    var checkboxs,
      origin,
      target,
      num = 0;
    if ($(this).hasClass("right")) {
      origin = $(".unselect-ul");
      target = $(".selected-ul");
    } else {
      origin = $(".selected-ul");
      target = $(".unselect-ul");
    }
    checkboxs = origin.find(".checkboxs");
    for (var i = 0; i < checkboxs.length; i++) {
      if ($(checkboxs[i]).prop("checked")) {
        var that = $(checkboxs[i]).parent().clone();
        that.children("input").prop("checked", false);
        target.append(that);
        $(checkboxs[i]).parent().remove();
      } else {
        num++;
      }
    }
    if (checkboxs.length == num) {
      //					alert('未选中任何一项');
    } else {
      origin.parent().prev().find(".checkbox-all").prop("checked", false);
    }
    btn_status();
  });
});

function stopFunc(e) {
  e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
}
</script>


<style>
* {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
  cursor: pointer;
  position: relative;
}
.selection-container {
  height: 350px;
  margin: 10px;
}
.select-box {
  width: 250px;
  height: 100%;
  float: left;
  border: 1px solid #ebeef5;
  border-radius: 4px;
}
.arrows-box {
  width: 110px;
  height: 100%;
  float: left;
  position: relative;
}
.select-content {
  width: 100%;
  height: 320px;
  overflow-y: auto;
  overflow-x: hidden;
}
.select-box-title {
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  font-family: "微软雅黑";
  padding: 0 6%;
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  background: #f5f7fa;
  border-bottom: 1px solid #ebeef5;
  box-sizing: border-box;
  color: #000;
}
/*.checkbox-all {
	float:left;
}
*/
.select-box-title label:before {
  left: -14px !important;
  top: 4px !important;
}
.select-box-title label:after {
  left: -10px !important;
  top: 5px !important;
}
.checkboxs {
  vertical-align: middle;
}
.unselect-ul {
  padding: 10px 0;
}
.selected-ul {
  padding: 10px 0;
}
.select-content li {
  padding: 5px 15px;
  font-size: 12px;
  font-family: "微软雅黑";
}
.select-box input[type="checkbox"] {
  position: absolute;
  left: 13px;
  top: 3px;
  width: 20px;
  height: 20px;
  opacity: 0;
}
.select-box label {
  position: absolute;
  left: 30px;
  top: 9px;
  height: 20px;
  line-height: 20px;
}
.select-box span {
  padding-left: 20px;
}
.select-box label:before {
  content: "";
  position: absolute;
  left: -14px;
  top: -3px;
  width: 12px;
  height: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
}
.select-box label:after {
  content: "";
  position: absolute;
  left: -10px;
  top: -2px;
  width: 4px;
  height: 8px;
  border: 0;
  border-right: 1px solid #fff;
  border-bottom: 1px solid #fff;
  background: #fff;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
}
.select-box input[type="checkbox"]:checked + label:before {
  background: #00a0e8;
  border-color: #00a0e8;
}
.select-box input[type="checkbox"]:checked + label:after {
  background: #00a0e8;
}
.arrow-btns {
  width: 100%;
  position: absolute;
  top: 50%;
  margin-top: -45px;
}
.btn-cursor {
  background-color: #409eff !important;
  border: 1px solid #409eff !important;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
}
.btn-cursor svg {
  fill: #fff !important;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
}
/*.btn-cursor {
	cursor:not-allowed !important;
}
*/
.arrow-btn {
  display: block;
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 25px;
  background: #eee;
  margin: 0 auto 5px;
  cursor: pointer;
  border: 1px solid #dcdfe6;
  background-color: #f5f7fa;
  color: #c0c4cc;
  outline: none;
}
.arrow-btn svg {
  padding: 11px;
  width: 17px;
  height: 17px;
  color: white;
  fill: #c0c4cc;
}
</style>

