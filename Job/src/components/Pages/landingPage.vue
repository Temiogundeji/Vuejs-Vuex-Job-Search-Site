<template>
    <div id="body">
        <section class="hero is-primary is-medium">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Jobsite
                    </h1>
                    <h2 class="subtitle">
                         Job application made easy...
                    </h2>
                </div>
            </div>
        </section>
         <section class="hero is-light" id="searchBox">
            <div class="hero-body">
                <div class="container">
                <div class="columns">
                <div class="column">
                    <div class="field">
                    <div class="control">
                        <input id="input"  class="input" type="text" placeholder="Job title, Keyword or company name" v-model="instname">
                    </div>
                    </div>
                </div>
                <div class="column">
                    <div class="field">
                    <div class="control">
                        <input id="input"  class="input" type="text" placeholder="City, province or region" v-model="instname">
                    </div>
                    </div>
                </div>
                <div class="column is-one-fifth">
                    <a  class="button is-success">SEARCH</a>
                </div>
                </div>
            </div>
         </div>
        </section>
        <section class="container categories-list">
            <h2>Popular Categories</h2>
            <categories-list></categories-list>
            <categories-list></categories-list>
            <a id="all-categories" class="button is-success">Browse All Categories</a>
        </section>
        <hr>
        <section>
            <job-list></job-list>
        </section>
        <!-- Customer testimonies goes here -->
        <section id="cta-btn" class="hero is-primary">
            <div class="hero-body">
                <div class="container">
                    <h1 id="left" class="title">
                        Looking for qualified candidates
                    </h1>
                    <a id="right" class="button is-primary is-inverted is-outlined">Post A Job</a>
                </div>
            </div>
        </section>
        <site-footer></site-footer>
    </div>
</template>
<script>
    import siteFooter from '@/components/Layout/siteFooter';
    import categoriesList from '@/components/views/categoriesList.vue';
    import jobList from '@/components/views/jobList.vue';
    export default {
        name: 'landing-page',
        components: {
            'categories-list':categoriesList,
            'job-list':jobList,
            'siteFooter':siteFooter
        }
    }
</script>
<style scoped>
    input[type=text]{
        max-width:100%;
        width:100%;
    }
    .is-light{
        margin-bottom:60px;
    }
    .categories-list h2{
        color:#555;
        font-size:24px;
        margin-bottom:60px;
    }
    #all-categories{
        margin: auto;
        margin-top:60px;
        margin-bottom:60px;
    }
    #left{
        float:left;
    }
    #right{
        float:right;
    }
    #cta-btn{
        margin-top:60px;
        margin-bottom:60px;
    }
</style>