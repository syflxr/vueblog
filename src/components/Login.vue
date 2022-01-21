<template>
    <div class="login_container">
        <div class="login_box">
            <!--头像区域-->
            <div class="avatar_box">
                <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F21%2Fc0%2Ff5%2F21c0f5d2f4b6325808b548d2f94e0ef3.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644922390&t=671c0945e8f03c576bb59ea499d74a62" width="130" height="130" border-radius="50%" alt="">
            </div>
            <!--登录表单区域-->
            <el-form ref="loginFormRef" :model="form" :rules="formRules" label-width="80px" class="login_form">
                <!--用户名-->
                <el-form-item label="账号" prop="username">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <!--密码-->
                <el-form-item label="密码" prop="password">
                    <el-input v-model="form.password" type="password"></el-input>
                </el-form-item>

                <!-- 按钮区域-->
                <el-form-item class="btns">
                    <el-button type="primary" @click="login" round>登录</el-button>
                    <el-button type="info" @click="resetLoginForm" round>重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                form:{
                    username:'syf12',
                    password: '12345'
                },
                formRules:{
                    username:[{ required: true, message: "请输入用户名", trigger: "blur" },
                        { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur"}],
                    password:[{ required: true, message: "请输入密码", trigger: "blur" },
                        { min: 6, max: 15, message: "长度在 6 到 15 个字符", trigger: "blur"}]
                }
            }
        },
        methods:{
            resetLoginForm(){
                console.log(this)
                this.$refs.loginFormRef.resetFields();
            },login(){
                this.$refs.loginFormRef.validate(async (valid)=>{
                    if(valid){
                        this.$axios.post('login',this.form).then((res)=>{
                            console.log(res)
                            this.$router.push("/blogs")
                        })
                    }
                    // console.log(valid)
                    // if(!valid) return;
                    // console.log(this.form.username)
                    // console.log(this.form.password)
                    // // const {data:res}=await this.$axios.post('login',this.form);
                    // // console.log(res1)
                    //
                    //
                    // const result=await this.$axios.post('login',this.form);
                    // if(result['status']=200) return console.log("登录失败")
                    // console.log("登录成功")
                    // console.log(result);
                })
            }
        }
    }
</script>

<style scoped>


.login_container{
    background-color: #2b4b6b;
    height: 100%;
}
.login_box{
    width:450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);


}
.avatar_box{
    height:130px;
    width:130px;
    border:1px solid #eee;
    box-shadow: 0 0 10px #ddd;
    border-radius:50%;
    padding:10px;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
    /*头像超出头像框部分隐去*/
    overflow:hidden;
}
.login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}
.btns{
    display: flex;
    justify-content: flex-end;
}
</style>