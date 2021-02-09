<template>
<div class="container">
    <div class="w1200">
        <div class="loginbox clearfix">
            <div class="loginleft fl">
                <h3 class="pt20 tx-center">啦啦啦啦啦啦</h3>
                <p class="bgRed">123<span class="pl10 pr10">•</span>456</p>
            </div>
            <div class="loginright fr">
                <div class="loginrightTabCon">
                    <div class="login-input clearfix mb30">
                        <div class="login-input-l login-input-u fl">
                            <i></i>
                        </div>
                        <div class="login-input-r">
                            <input type="text" placeholder="请输入账号" v-model="userName" />
                        </div>
                    </div>
                    <div class="login-input clearfix mb7">
                        <div class="login-input-l login-input-p fl">
                            <i></i>
                        </div>
                        <div class="login-input-r">
                            <input type="password" placeholder="请输入密码" v-model="password"/>
                        </div>
                    </div>
                    <div class="login-submit">
                        <input type="submit" value="登录" @click="userLogin()" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import './static/index.scss'
import { mapMutations, mapGetters } from 'vuex'
export default {
    data() {
        return {
            userName: '',
            password: ''
        }
    },
    computed: {
        ...mapGetters(['userInfo'])
    },
    setup () {
    },
    methods: {
        userLogin () {
            console.log(this.userName, this.password)
            this.$axios.get('http://localhost:8888/login', {params: {phone: this.userName, password: this.password}}).then(res =>{
                console.log(res)
            })

        },
        ...mapMutations({
            setUserInfo: 'SET_USER_INFO'
        }),
        setUserInfoMent () {
            const data = {
                userName: '666',
                phone: '15035404266'
            }
            this.setUserInfo(data)
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bgRed {
    background: #de4f51;
    height: 40px;
    line-height: 40px;
    color: #fff;
    text-align: center;
    width: 300px;
    margin: 0 auto;
}
.loginleft h3 {
    margin-bottom: 40px;
    border-bottom: none;
}
</style>