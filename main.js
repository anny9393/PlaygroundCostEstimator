Vue.component('dropdown-delivery', {
	template: `
		<div class="anchor-wrap">
			<button @click='toggleShow' class='anchor'>Delivery destination</button>
			<div v-if='showMenu' class='menu'>
				<div class='menu-item' v-for='item in this.items' @click='itemClicked(item)'>{{item}}</div>
			</div>
		</div>
	`,
	data: function() {
		return {
			showMenu: false
		}
	},
	props: {
		onClick: 'function',
		items: {
			type: 'Object',
			default: []
		}
	},
	methods: {
		toggleShow: function() {
			this.showMenu = !this.showMenu;
		},
		itemClicked: function(item) {
			this.toggleShow();
			this.onClick(item);
		}
	}
}),

Vue.component('dropdown-floor', {
	template: `
		<div class="anchor-wrap">
			<button @click='toggleShow' class='anchor'>Floor Option</button>
			<div v-if='showMenu' class='menu'>
				<div class='menu-item' v-for='item in this.items' @click='itemClicked(item)'>{{item}}</div>
			</div>
		</div>
	`,
	data: function() {
		return {
			showMenu: false
		}
	},
	props: {
		onClick: 'function',
		items: {
			type: 'Object',
			default: []
		}
	},
	methods: {
		toggleShow: function() {
			this.showMenu = !this.showMenu;
		},
		itemClicked: function(item) {
			this.toggleShow();
			this.onClick(item);
		}
	}
}),

Vue.component('dropdown-installation', {
	template: `
		<div class="anchor-wrap">
			<button @click='toggleShow' class='anchor'>Installation required</button>
			<div v-if='showMenu' class='menu'>
				<div class='menu-item' v-for='item in this.items' @click='itemClicked(item)'>{{item}}</div>
			</div>
		</div>
	`,
	data: function() {
		return {
			showMenu: false
		}
	},
	props: {
		onClick: 'function',
		items: {
			type: 'Object',
			default: []
		}
	},
	methods: {
		toggleShow: function() {
			this.showMenu = !this.showMenu;
		},
		itemClicked: function(item) {
			this.toggleShow();
			this.onClick(item);
		}
	}
}),

Vue.component('dropdown-state', {
	template: `
		<div class="anchor-wrap">
			<button @click='toggleShow' class='anchor'>Select State</button>
			<div v-if='showMenu' class='menu'>
				<div class='menu-item' v-for='item in this.items' @click='itemClicked(item)'>{{item}}</div>
			</div>
		</div>
	`,
	data: function() {
		return {
			showMenu: false
		}
	},
	props: {
		onClick: 'function',
		items: {
			type: 'Object',
			default: []
		}
	},
	methods: {
		toggleShow: function() {
			this.showMenu = !this.showMenu;
		},
		itemClicked: function(item) {
			this.toggleShow();
			this.onClick(item);
		}
	}
}),
Vue.component ('dropdown-design', {
	template: `
		<div class="anchor-wrap">
			<button @click='toggleShow' class='anchor'>Select Design</button>
			<div v-if='showMenu' class='menu'>
				<div class='menu-item' v-for='item in this.items' @click='itemClicked(item)'>{{item}}</div>
			</div>
		</div>
	`,
	data: function() {
		return {
			showMenu: false
		}
	},
	props: {
		onClick: 'function',
		items: {
			type: 'Object',
			default: []
		}
	},
	methods: {
		toggleShow: function() {
			this.showMenu = !this.showMenu;
		},
		itemClicked: function(item) {
			this.toggleShow();
			this.onClick(item);
		}
	}
})


const app = new Vue ({
    el: "#app",
    data: {
        activeDesignObject: {},
        activeState: '',
        activeDesign: '',
        activeDesignPrice: '',
        installationCost: '',
        deliveryPrice: '',
        activeDeliveryCities: [],
        activeFloorOptions: [],
        floorOptionPrice: '',
        states: [],
        ids: [],
        totalPrice: 0,
        installationSelect: ['Yes', 'No'],
        statesCities: {
          "NSW": ['Sydney Metro'],
          "QLD": ['Brisbane Metro'],
          "VIC": ['Melbourne Metro']
        },
        catalogueItems: [	{
            "id":  1002,
            "img": "img/1002.png",
            "price": {
              "unit": 7000,
              "installation": 500,
              "floor": {
                "NSW": {
                  "rubber": 100,
                  "mulch": 150
                },
                "QLD": {
                  "rubber": 70,
                  "mulch": 80,
                  "smthg": 100
                },
                "VIC": {
                  "rubber": 70,
                  "mulch": 80,
                  "smthg": 100
                }
              },
              "delivery": {
                "Sydney Metro": 100,
                "Brisbane Metro": 200,
                "Melbourne Metro": 300
              }
            }
          },
          {
            "id": 1026,
            "img": "img/1026.png",
            "price": {
              "unit": 5000,
              "installation": 500,
              "floor": {
                "NSW": {
                  "rabbor": 100,
                  "malch": 150
                },
                "VIC": {
                  "rabbor": 70,
                  "malch": 80,
                  "smthg": 100
                }
              },
              "delivery": {
                "Sydney Metro": 100,
                "Brisbane Metro": 200
              }
            }
          }],
          imgCatalog: 'https://placehold.it/200x150'
    },
    methods: {
    changeDesign: function(design) {
      this.activeDesign = design;
      for (let i in this.catalogueItems) {
        if (this.catalogueItems[i].id == this.activeDesign) {
          this.activeDesignObject = this.catalogueItems[i]
          this.activeDesignPrice = this.catalogueItems[i].price.unit;
          this.updateTotal()
          let floorOptionobject = this.activeDesignObject.price.floor[this.activeState];
          this.activeFloorOptions = Object.keys(floorOptionobject);
          let allDeliveryCitiesObject = Object.keys(this.activeDesignObject.price.delivery);
          let availableCitiesInState = this.statesCities[this.activeState];
          for (let cityInStateIndex in availableCitiesInState) {
            for (let cityInActiveObjectIndex in allDeliveryCitiesObject) {
              if (availableCitiesInState[cityInStateIndex] == allDeliveryCitiesObject[cityInActiveObjectIndex]) {
                this.activeDeliveryCities.push(availableCitiesInState[cityInStateIndex]);
              };
            };
          };


        }}},
    getInstallationCost: function (el) {
      if (el == "Yes") {
      for (let i in this.catalogueItems) {
      if (this.catalogueItems[i].id == this.activeDesign) {
        this.installationCost = this.catalogueItems[i].price.installation;
        this.updateTotal()
        }}}
      else if (el == "No") {
        this.installationCost = 0;
        this.updateTotal()
      }
    },
    retrieveStates: function() {
      this.states = Object.keys(this.statesCities);
    },
    retrieveDesigns: function(input, field) {
      for (let i=0; i < input.length; ++i)
      this.ids.push(input[i][field]);
      return this.ids;
    },
    // retrieveFloorOptionsByState: function() {
    //   let floorOptionobject = this.activeDesignObject.price.floor[this.activeState];
    //   this.activeFloorOptions = Object.keys(floorOptionobject);
    // },
    getFloorPrice: function(el) {
      this.floorOptionPrice = this.activeDesignObject.price.floor[this.activeState][el];
      this.updateTotal()
    },
    getDeliveryPrice: function(city) {
      this.deliveryPrice = this.activeDesignObject.price.delivery[city];
      this.activeDeliveryCities = [];
      this.updateTotal()
    },
    changeState: function(state) {
      this.activeState = state;
    },
    updateTotal: function() {
      this.totalPrice = this.activeDesignPrice+this.installationCost+this.floorOptionPrice+this.deliveryPrice;
    }
  },
  mounted() {
    this.retrieveStates(),
    this.retrieveDesigns (this.catalogueItems, "id")
  }
})