<template>
    <div class="iphone-perspective" :style="extraRoot">
        <div class="iphone-device">
            <!-- 前-背板 -->
            <div class="iphone-front-s"></div>
            <!-- 前 -->
            <div class="iphone-front">
                <div class="notch">
                    <div class="camera"></div>
                    <div class="speaker"></div>
                </div>
            </div>
            <!-- 后 -->
            <div class="iphone-back">
                <div class="iphone-cam-group">
                    <div class="iphone-ba-cam1"></div>
                    <div class="iphone-ba-cam2"></div>
                    <div class="iphone-ba-light"></div>
                    <div class="iphone-ba-spot"></div>
                </div>
                <div class="iphone-brand">
                    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="1184"
                         xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200" fill="currentColor">
                        <path d="M584 232.992q32-11.008 64-42.016 36-36.992 52.992-80t16.992-79.008V18.976q-2.016-6.016-2.016-8 0-0.992-0.512-2.016t-0.512-2.016l-2.016-7.008-7.008 2.016q-100.992 23.008-144 86.016-44 62.016-44.992 148v8l7.008-0.992q39.008-4 60-10.016z m340 512q-50.016-15.008-88.992-71.008-39.008-56.992-39.008-128 0-64.992 36.992-118.016 20-28.992 66.016-68l4.992-4.992-4-4.992q-32-40-63.008-60.992-56.992-40-130.016-39.008-44 0-104.992 20-56.992 20-82.016 20-20 0-79.008-18.016-63.008-18.016-107.008-18.016-52 0-96 22.016-43.008 22.016-76.992 66.016-68 88-68 224.992 0 74.016 22.016 148.992 22.016 74.016 66.016 152 88.992 156 183.008 156 31.008 0 80.992-20 47.008-19.008 80.992-19.008 36.992 0 87.008 18.016 56 20 84.992 20 80 0 158.016-119.008 50.016-76 72.992-150.016l2.016-7.008z"
                              p-id="1185"></path>
                    </svg>
                </div>
            </div>
            <!-- 后-背板 -->
            <div class="iphone-back-s"></div>
            <!-- 侧边-左 -->
            <div class="iphone-left iphone-side"></div>
            <!-- 侧边-右 -->
            <div class="iphone-right iphone-side"></div>
            <!-- 侧边-上 -->
            <div class="iphone-top iphone-side"></div>
            <!-- 侧边-下 -->
            <div class="iphone-bottom iphone-side"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PhoneColor",

        props: {
            main: {
                type: String,
                default: '#bf2a2a'
            },
            side: {
                type: String,
                default: '#ede9e8'
            },
            cam: {
                type: String,
                default: '#ede9e8'
            },
            camRing: {
                type: String,
                default: '#bf2a2a'
            },
            logo: {
                type: String,
                default: '#ede9e8'
            },
            animateSpeed: {
                type:Number,
                default: 12
            }
        },
        computed:{
           extraRoot(){
               const {
                   main,
                   side,
                   cam,
                   camRing,
                   logo,
                   animateSpeed = 12
               } = this

               return {
                   '--main': main,
                   '--side': side,
                   '--cam': cam,
                   '--camRing': camRing,
                   '--logo': logo,
                   '--dur': `${animateSpeed}s`
               }
           }
        }
    }
</script>

<style scoped>
    @import "index.css";
</style>