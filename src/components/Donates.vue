<template>
    <v-card class="pt-4 donatesnow" :dark="dark" elevation="4" style="background: none">
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="headline">网站开发进度</v-list-item-title>
                <v-list-item-subtitle>web development progress</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-card-text>
            目前网页主体部分已经迭代完成，与此同时我们服务器也在做一些更加有趣的功能，
            <br />有兴趣的朋友们可以参加到我们网页的开发当中。
        </v-card-text>
<!--        <v-card-actions>-->
<!--            <v-btn-->
<!--                class="ma-2"-->
<!--                elevation="0"-->
<!--                :style="'background: ' + color + '; color: white;'"-->
<!--                :href="link"-->
<!--                v-text="text"-->
<!--            />-->
<!--        </v-card-actions>-->
    </v-card>
</template>

<script>
export default {
    data: () => ({
        color: "#7d61cd",
        link: "https://afdian.net/@flyingsky",
        text: "爱发电",
    }),
    props: {
        dark: {
            type: Boolean,
            required: true,
        },
    },
};
</script>
<style>

</style>
