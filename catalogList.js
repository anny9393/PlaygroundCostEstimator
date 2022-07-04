Vue.component ('catalog', {
    props: ['catalogueItems', 'img'],
    template: `<div class="catalog-wrap"> 
        <catalogue-item v-for="item of catalogueItems" :key="item.id" :img="img" :catalogue-item="item">
        </catalogue-item>
        </div> `            
  
});
Vue.component ('catalogue-item ', {
    props: ['catalogueItem', 'img'],
    template: `<div class="catalogue-item"> 
                <img :src="img">
                <p class="item-title">{{ catalogueItem.id }}</p>
                </div>` })
