<template>
  <div class="hello">
  {{msg}}
  <img class="as" src="../assets/img/logo.png">
  </div>
</template>

<script>
var _this;
import {index} from '../assets/js/index';//文件上传
export default {
  name: 'hello',
  data () {
  	_this=this;
    return {
    	//msg:'123'
    }
  },
  computed: {
    msg(){
        return _this.$store.state.changableNum
    },
  },
  mounted:function(){
    index.one();
  },
}
</script>

<style lang="scss" scoped>
.hello{
	.as{
		width: 1rem;
	}
}

</style>
