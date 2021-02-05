<template>
    <div class="ir-wrapper">
        <h5>Tol: {{icons.length||0}}</h5>
        <section class="ir-rows">
            <div  v-for="(ico,index) in icons" :key="'ico_'+index"
                  class="icon-node">
                <i :class="placeStand+' '+ico"></i>
                <p>{{ico}}</p>
            </div>
        </section>
    </div>
</template>

<script>
    import "./../assets/font/mdi-v5/mdi-v5.css"
    export default {
        name: "demo_icon",
        props:{
            prefix:{
                type:String,
                default:'.mdi-'
            },
            placeStand: {
                type:String,
                default:'mdi'
            }
        },
        data() {
            return {
                icons: []
            }
        },
        mounted() {
            this.getIconsArr()
        },
        methods:{
            /**
             * 提取ICON
             */
            getIconsArr () {
                let data = []
                let docSheets = document.styleSheets||[]
                for ( let sheets of  docSheets ) {
                    if(sheets.cssRules.length!==0){
                        for (let index in sheets.cssRules) {
                            let reStr = sheets.cssRules[index].selectorText||sheets.cssRules[index].cssText
                            if(reStr!=undefined&&reStr.startsWith(this.prefix)){
                                data.push(
                                    reStr.split('::')[0].replace('.','')
                                )
                            }
                        }
                    }
                }
                // 数组去重
                let set = new Set(data)
                this.icons = new Array(...set)
            }
        }
    }
</script>

<style scoped lang="scss">
    .ir-wrapper{
        padding: 1.2rem;
        height: 30rem;
        overflow: auto;
        .ir-rows{
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            justify-content: space-between;
            .icon-node{
                transition: .1s ease-in-out;
                cursor: pointer;
                width: 25%;
                padding: .6rem;
                text-align: center;
                &:hover{
                    background: #7436E6;
                    color: #FFF;
                }
                i{
                    font-size: 24px;
                }
            }
        }
    }
</style>
