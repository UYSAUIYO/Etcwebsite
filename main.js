import Vue from 'vue';
import axios from 'axios';
import VueAxios from "vue-axios";
import App from './App.vue';
import vuetify from './plugins/vuetify';
import MetaInfo from 'vue-meta-info';
import collapse from "../src/assets/collapse";
import ImageViewer from 'vue2-viewer';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import hevueImgPreview from 'hevue-img-preview';
import APlayer from '@moefe/vue-aplayer';


Vue.use(MetaInfo);
Vue.use(APlayer, {
	defaultCover: 'https://avatars.githubusercontent.com/u/20062482?v=4',
	productionTip: true,
});
Vue.use(VueAxios,axios);
Vue.use(collapse);
Vue.use(ImageViewer);
Vue.use(ElementUI);
Vue.use(hevueImgPreview);
Vue.config.productionTip = false;

new Vue({
	vuetify,
	render: h => h(App),
	mounted() {
		document.dispatchEvent(new Event('render-event'))
	}
}).$mount('#app');
