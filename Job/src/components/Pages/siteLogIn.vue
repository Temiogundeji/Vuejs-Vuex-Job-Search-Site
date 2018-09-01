<template>
    <div id="login-form">
        <section class="section is-medium">
            <div class="container">
                <div class="columns">
                    <div class="column is-one-third"></div>
                     <div id="form-container" class="column is-one-third">
                         <section class="form-header">
                             <!-- <h3>Log In to Jobsite </h3> -->
                         </section>
                         <div class="field">
                            <p class="control has-icons-left has-icons-right">
                                <input class="input" type="email" placeholder="Email">
                                <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                                </span>
                                <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                                </span>
                            </p>
                        </div>
                    <div class="field">
                        <p class="control has-icons-left">
                            <input class="input" type="password" placeholder="Password">
                            <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                        </p>
                    </div>
                       <a id="login-button" class="button is-success is-rounded">Log In</a>
                       <a>Forget passwrod</a>
                       <hr>
                       <section class="section">
                           <h3>Create an Account</h3>
                       </section>
                    </div>
                    <div class="column is-one-third"></div>
                </div>
            </div>
        </section>
        <site-footer></site-footer>
    </div>
</template>
<script>
    import siteFooter from '@/components/Layout/siteFooter.vue'
    export default{
        name:'site-login',
        components:{
            'site-footer':siteFooter
        }
    }
</script>
<style scoped>
    .button{
        margin:0 40%;
        margin-top:5%;
    }
    #form-container{
        background-color:#fff;
        padding:5% 5%;
        border-radius: 2%;
    }
    #login-form{
        background-color:rgb(190,190,190)
    }
    #form-header{
        font-size:24px;
        color:#555;
        text-align:center;
    }
    #login-button{
        padding:7%;
    }
    .field{
        margin-top: 10%;
    }
</style>
