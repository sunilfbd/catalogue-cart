import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";


Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    dealList: [
      {
        "key": "2092036b41a263b6750ba00b47b06ca7",
        "title": "1 hour Photoshoot session ",
        "price": 10000,
        "cause": {
          "name": "Science"
        },
        "media": [
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/JasminHurtado_084_01262018_lbswrx",
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/13_bwdlln",
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/DANNYIMG_002001262018_kpk6cf",
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/IMG_0068_kkzkcy"
        ]
      },
      {
        "key": "72c5ab4dd5bd5531fe3cdaf65d1ae395",
        "title": "Basic Introduction to Javascript",
        "price": 2000,
        "cause": {
          "name": "Children's Rights"
        },
        "media": [
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/Selection_022_czmogy",
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/vsc1_uu3ayr"
        ]
      },
      {
        "key": "47ccf7763ef63b78774a4b24620126ed",
        "title": "3 Donut Bar Stools - 30\" Seat Height and Swivel",
        "price": 45000,
        "cause": {
          "name": "Environment"
        },
        "media": [
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/IMG_0647_bictyq"
        ]
      },
      {
        "key": "caa2365cf9d5d80d62099e3456c9e0b2",
        "title": "Thai Cooking Class from makebistro",
        "price": 15000,
        "cause": {
          "name": "Food\t"
        },
        "media": [
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/22426056_10210413952292912_1556573906_o_lywce4"
        ]
      },
      {
        "key": "64f2e2859c9438b3b5e04ce28d6c0cb7",
        "title": "Totem Godess of Divine Self Love - Plush Creature Art",
        "price": 14000,
        "cause": {
          "name": "Global Warming\t"
        },
        "media": [
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/plush1_z5vjbj",
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/plush2_z9tkjr",
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/plush3_qfq8bt"
        ]
      },
      {
        "key": "f3433a7cd00956fa9f81922a14265eb6",
        "title": "Synergy of the Rain Sprits - Mixed Media Fiber Art",
        "price": 40000,
        "cause": {
          "name": "Global Warming\t"
        },
        "media": [
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/fiber1_i6a61b",
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/fiber3_a7viqg",
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/fiber2_lwyreb"
        ]
      },
      {
        "key": "4c7af01b510bc712f585a12bf606f06d",
        "title": "Mandala of the Senses - Painting",
        "price": 70000,
        "cause": {
          "name": "Global Warming\t"
        },
        "media": [
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/painting1_rl7qou",
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/painting2_g3u6kt",
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/painting3_uuqdga"
        ]
      },
      {
        "key": "ce221787bc244e5eb5b7de96db323a4c",
        "title": "Creative Brainstorming Session",
        "price": 50000,
        "cause": {
          "name": "Science"
        },
        "media": [
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/BrainStorm_nezbjt"
        ]
      },
      {
        "key": "c4362e111dc2790852f39fbbac87019d",
        "title": "1-Year Subscription for DeciZone PROFESSIONAL Account ($204 reg. price)",
        "price": 18000,
        "cause": {
          "name": "Education"
        },
        "media": [
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/iPhone-3phones-dz_g6qp6u",
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/3Screens-dz_kdy3jt",
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/DZ-LogoTagline-Horiz-SQUARE-Blue-608x606_zeesz0"
        ]
      },
      {
        "key": "bb6aaf78c00b4d7ad67b27ff85635ac1",
        "title": "One Private Yin Yoga Lesson",
        "price": 15000,
        "cause": {
          "name": "Environment"
        },
        "media": [
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/static1.squarespace-2_rghb9c"
        ]
      },
      {
        "key": "1df540043347f5df38a3240342ada1c2",
        "title": "Thai Yoga Therapy - 7-Day Program",
        "price": 105000,
        "cause": {
          "name": "Environment"
        },
        "media": [
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/static1.squarespace-1_sx13zn"
        ]
      },
      {
        "key": "ac9bd5ec830197693b93cc1bb86a5480",
        "title": "Purpose Mapping",
        "price": 37500,
        "cause": {
          "name": "Education"
        },
        "media": [
          "https://res.cloudinary.com/bakesale/image/upload/h_150,c_fill/PurposeMappingLogo_xfaeos.png"
        ]
      }
    ],
    productInBag: [],
    myWishlist: []
  },
  mutations: {
    updatedBagCount (state, addProduct) {
      state.productInBag.push(addProduct)
    },
    updateWishlist (state,addToWishlist ) {
      state.myWishlist.push(addToWishlist)
    }
    // this.$store.dispatch('getData');
  },
  actions: {
    // getData() {
    //   axios.get('https://bakesaleforgood.com/api/deals')
    //   .then((response) => {
    //     response.data
    //       // console.log(response.data);
    //   });
    // }
  },
  modules: {
    //
  }
});
