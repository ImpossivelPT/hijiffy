<template>
    <div class="pageFooter d-flex flex-column">

        <div class="container">
            <div class="links row text-center align-items-center">
                <div class="col-sm-2">Community</div>
                <div class="col-sm-2">Company</div>
                <div class="col-sm-4">
                    <img class="logoHiJiffy" src="@/assets/images/global/LogoHiJiffy-1-smaller2.png" alt="Logi HiJiffy">
                </div>
                <div class="col-sm-2">Help desk</div>
                <div class="col-sm-2">Blog</div>
            </div>
        </div>

        <div class="divider"></div>

        <div class="social text-center">
            <img src="@/assets/icons/social/linkedin.svg" alt="Linkedin">
            <img src="@/assets/icons/social/facebook.svg" alt="Facebook">
            <img src="@/assets/icons/social/twitter-1.svg" alt="Twitter">
            <img src="@/assets/icons/social/youtube.svg" alt="Youtube">
        </div>

        <div class="copyright text-center">
            © HiJiffy 2021. We Love our users!
        </div>

    </div>
</template>

<script>
export default {
    name: 'pageFooter',
    data: function() {
        return {
            user: 'Fábio Garcia'
        }
    }
}
</script>

<style lang="scss" scoped>
.pageFooter {
    padding: 20px 38px;
    background-color: #F5F6F8;
    flex: 0 1 auto;
    z-index: 2;

    .links{
        color: #000;
        
        .logoHiJiffy{
            height: 55px;
        }
    }

    .divider{
        margin-top: 45px;
        height: 1px;
        border-bottom: 1px solid #7b7b7c;
    }

    .social{
        
        margin-top: 42px;
        
        img{
            height: 40px;
            margin: 0 20px;
        }
    }

    .copyright{
        margin-top: 32px;
        color: #313132;
    }
}
</style>
