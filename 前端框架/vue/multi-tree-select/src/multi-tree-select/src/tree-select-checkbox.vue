<template>
    <label class="x-checkbox x-tree-select-checkbox">
        <span class="x-checkbox-item"
            :class="{
              'is-checked': val === 1,
              'is-indeterminate': val === 2,
            }">
            <span class="x-checkbox-background"></span>
            <span class="x-checkbox-cbx"></span>
        </span>
        <span class="x-checkbox-text">
            <slot></slot>
        </span>
    </label>
</template>

<script>
export default{
    props:{
        val: {
            type: Number,
            default: 0,
        }
    }
}
</script>

<style scoped>
@charset "UTF-8";
@-moz-keyframes x-checkbox-bouncing {
  10%,
  50%,
  80%,
  100% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  30% {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
  }
  70% {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
  }
  90% {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);
  }
}
@-webkit-keyframes x-checkbox-bouncing {
  10%,
  50%,
  80%,
  100% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  30% {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
  }
  70% {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
  }
  90% {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);
  }
}
@keyframes x-checkbox-bouncing {
  10%,
  50%,
  80%,
  100% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  30% {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
  }
  70% {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
  }
  90% {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);
  }
}
.x-checkbox .x-checkbox {
  display: inline-block;
  position: relative;
  cursor: pointer;
  white-space: nowrap;
  font-size: 14px;
  float: left;
}
.x-checkbox .x-checkbox + .x-checkbox {
  margin-left: 15px;
}
.x-checkbox .x-checkbox-item {
  position: relative;
}
.x-checkbox .x-checkbox-item * {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 2px;
  display: inline-block;
  width: 18px;
  height: 18px;
  left: 0;
  position: absolute;
  top: 0;
}
.x-checkbox .x-checkbox-item .x-checkbox-background {
  background-color: #fff;
  border-radius: 2px;
  -webkit-transition: all .2s ease-in-out;
  -o-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}
.x-checkbox .x-checkbox-item .x-checkbox-cbx {
  border: solid 1px #2d8cf0;
  -webkit-transition: all .1s ease-in-out .15s;
  -o-transition: all .1s ease-in-out .15s;
  transition: all .1s ease-in-out .15s;
}
.x-checkbox .x-checkbox-item .x-checkbox-input {
  opacity: 0;
  outline: none;
  -ms-touch-action: none;
  touch-action: none;
  padding: 0;
}
.x-checkbox .x-checkbox-item.is-checked .x-checkbox-background {
  background-color: #2d8cf0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
.x-checkbox .x-checkbox-item.is-checked.is-focus .x-checkbox-background {
  -webkit-animation: x-checkbox-bouncing .5s ease-in-out .2s 1 normal forwards;
  -o-animation: x-checkbox-bouncing .5s ease-in-out .2s 1 normal forwards;
  animation: x-checkbox-bouncing .5s ease-in-out .2s 1 normal forwards;
}
.x-checkbox .x-checkbox-item.is-checked .x-checkbox-cbx {
  border-color: #fff;
  border-radius: 0;
  height: 5px;
  left: 4px;
  top: 5px;
  width: 10px;
  border-right: none;
  border-top: none;
  border-width: 2px;
  box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.1);
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.x-checkbox .x-checkbox-item.is-disabled .x-checkbox-background {
  background-color: #f7f7f7;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
.x-checkbox .x-checkbox-item.is-disabled .x-checkbox-cbx {
  border-color: #fff;
  border-radius: 0;
  height: 5px;
  left: 4px;
  top: 5px;
  width: 10px;
  border: none;
}
.x-checkbox .x-checkbox-item.is-disabled.is-checked .x-checkbox-cbx {
  border: 2px solid;
  border-right: none;
  border-top: none;
  border-color: #e6e6e6;
  box-shadow: none;
}
.x-checkbox .x-checkbox-item.is-disabled + .x-checkbox-text {
  cursor: not-allowed;
  color: #e6e6e6;
}
.x-checkbox .x-checkbox-item.is-indeterminate .x-checkbox-background {
  -webkit-animation: bouncing .5s ease-in-out .2s 1 normal forwards;
  -o-animation: bouncing .5s ease-in-out .2s 1 normal forwards;
  animation: bouncing .5s ease-in-out .2s 1 normal forwards;
  background-color: #2d8cf0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
.x-checkbox .x-checkbox-item.is-indeterminate .x-checkbox-cbx {
  border-color: #fff;
  -webkit-border-radius: 0;
  border-radius: 0;
  border-right: none;
  border-top: none;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
  height: 5px;
  left: 4px;
  top: 5px;
  width: 10px;
  border-width: 2px;
  border-left: none;
}
.x-checkbox .x-checkbox-group:before,
.x-checkbox .x-checkbox-group:after {
  content: " ";
  display: table;
}
.x-checkbox .x-checkbox-group:after {
  clear: both;
  visibility: hidden;
  font-size: 0;
  height: 0;
}
.x-checkbox .x-checkbox-text {
  cursor: pointer;
  display: inline-block;
  height: 18px;
  left: 0;
  line-height: 18px;
  padding-left: 23px;
  position: relative;
  text-align: left;
  top: 0;
}
.x-tree-select-checkbox.x-checkbox .x-checkbox-item {
  height: 36px;
  line-height: 36px;
}
.x-tree-select-checkbox.x-checkbox .x-checkbox-item * {
  height: 16px;
  width: 16px;
}
.x-tree-select-checkbox.x-checkbox .x-checkbox-item .x-checkbox-background {
  transition: none;
  animation: initial;
}
.x-tree-select-checkbox.x-checkbox .x-checkbox-item .x-checkbox-cbx {
  transition: none;
  animation: initial;
}
.x-tree-select-checkbox.x-checkbox .x-checkbox-item.is-checked .x-checkbox-background,
.x-tree-select-checkbox.x-checkbox .x-checkbox-item.is-indeterminate .x-checkbox-background {
  transition: none;
  animation: initial;
}
.x-tree-select-checkbox.x-checkbox .x-checkbox-item.is-checked .x-checkbox-cbx,
.x-tree-select-checkbox.x-checkbox .x-checkbox-item.is-indeterminate .x-checkbox-cbx {
  transition: none;
  animation: initial;
  height: 5px;
  width: 10px;
  left: 3px;
}

</style>
