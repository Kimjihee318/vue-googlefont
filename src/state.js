import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    showOption: {
      show: true,
      defaultIndex: [0,1,2,3,4],
      payloadIndex: [],
      colors: [
        {color: 'white'},
        {color: 'red'},
        {color: 'yellow'},
        {color: 'blue'}
      ],
      colorIn: 'white'
    },
    asideOption: {
      categories: [
        {name: 'Serif', checked: true},
        {name: 'Sans Serif', checked: true},
        {name: 'Display', checked: true},
        {name: 'HandWriting', checked: true},
        {name: 'MonoSpace', checked: true},
      ],
      sorting: [
        'trendeing','popular','dateAdded'
      ],
      language: [
        'english','korean','japanese','chinese','french'
      ]
    },
    fonts: [
      { 
        information: {
          name: 'roboto',
          designer: 'christmas',
          sorting: 100,
          language: ['english','korean'],
          defaultOptions: {
            text: '안녕하세요.',
            fontSize: 40,
            fontWeight: '400',
            show: true,
          },
          stringArr: [
            {val: 'paragraph', content: 'my name is jiheekim'},
            {val: 'alphabet', content: 'abcdefghijklmnopqrstuvw'},
            {val: 'message', content: '안녕하세요.'},
            {val: 'number', content: '123456789'}
          ],
          weightArr: [
            {val: 'light', content: '300'},
            {val: 'regular', content: '400'},
            {val: 'medium', content: '500'},
            {val: 'bold', content: '600'}
          ]
        },
        style: {
          'Serif': true, 
          'Sans Serif': false, 
          'Display': true,
          'HandWriting': true,
          'MonoSpace': false,
        }
      },
      {
        information: {
          name: 'roboting',
          designer: 'christmas',
          sorting: 'trending',
          language: ['english','japanese'],
          defaultOptions: {
            text: 'Developer & Designer',
            fontSize: 40,
            fontWeight: '400',
            show: true,
          },
          stringArr: [
            {val: 'paragraph', content: 'my name is jiheekim'},
            {val: 'alphabet', content: 'abcdefghijklmnopqrstuvw'},
            {val: 'message', content: 'Developer & Designer'},
            {val: 'number', content: '123456789'}
          ],
          weightArr: [
            {val: 'light', content: '300'},
            {val: 'regular', content: '400'},
            {val: 'medium', content: '500'},
            {val: 'bold', content: '600'}
          ]
        },
        style: {
          'Serif': true, 
          'Sans Serif': false, 
          'Display': true,
          'HandWriting': true,
          'MonoSpace': false
        }
      },
      {
        information: {  
          name: 'robotong',
          designer: 'christmas',
          sorting: 'trending',
          language: ['japanese','korean'],
          defaultOptions: {
            text: 'KIM JIHEE',
            fontSize: 40,
            fontWeight: '400',
            show: true,
          },
          stringArr: [
            {val: 'paragraph', content: 'my name is jiheekim'},
            {val: 'alphabet', content: 'abcdefghijklmnopqrstuvw'},
            {val: 'korean', content: 'KIM JIHEE'},
            {val: 'number', content: '123456789'}
          ],
          weightArr: [
            {val: 'light', content: '300'},
            {val: 'regular', content: '400'},
            {val: 'medium', content: '500'},
            {val: 'bold', content: '600'}
          ]
        },
        style: {
          'Serif': false, 
          'Sans Serif': true, 
          'Display': true,
          'HandWriting': true,
          'MonoSpace': false
        }
      },
      {
        information: {  
          name: 'robotang',
          designer: 'christmas',
          sorting: 'trending',
          language: ['japanese','korean'],
          defaultOptions: {
            text: 'KIM JIHEE',
            fontSize: 40,
            fontWeight: '400',
            show: true,
          },
          stringArr: [
            {val: 'paragraph', content: 'my name is jiheekim'},
            {val: 'alphabet', content: 'abcdefghijklmnopqrstuvw'},
            {val: 'korean', content: 'KIM JIHEE'},
            {val: 'number', content: '123456789'}
          ],
          weightArr: [
            {val: 'light', content: '300'},
            {val: 'regular', content: '400'},
            {val: 'medium', content: '500'},
            {val: 'bold', content: '600'}
          ]
        },
        style: {
          'Serif': false, 
          'Sans Serif': true, 
          'Display': true,
          'HandWriting': true,
          'MonoSpace': false
        }
      },
      {
        information: {  
          name: 'robot',
          designer: 'christmas',
          sorting: 'trending',
          language: ['japanese','korean'],
          defaultOptions: {
            text: 'KIM JIHEE',
            fontSize: 40,
            fontWeight: '400',
            show: true,
          },
          stringArr: [
            {val: 'paragraph', content: 'my name is jiheekim'},
            {val: 'alphabet', content: 'abcdefghijklmnopqrstuvw'},
            {val: 'korean', content: 'KIM JIHEE'},
            {val: 'number', content: '123456789'}
          ],
          weightArr: [
            {val: 'light', content: '300'},
            {val: 'regular', content: '400'},
            {val: 'medium', content: '500'},
            {val: 'bold', content: '600'}
          ]
        },
        style: {
          'Serif': false, 
          'Sans Serif': true, 
          'Display': true,
          'HandWriting': true,
          'MonoSpace': false
        }
      },
      {
        information: {  
          name: 'robit',
          designer: 'christmas',
          sorting: 'trending',
          language: ['japanese','korean'],
          defaultOptions: {
            text: 'KIM JIHEE',
            fontSize: 40,
            fontWeight: '400',
            show: true,
          },
          stringArr: [
            {val: 'paragraph', content: 'my name is jiheekim'},
            {val: 'alphabet', content: 'abcdefghijklmnopqrstuvw'},
            {val: 'korean', content: 'KIM JIHEE'},
            {val: 'number', content: '123456789'}
          ],
          weightArr: [
            {val: 'light', content: '300'},
            {val: 'regular', content: '400'},
            {val: 'medium', content: '500'},
            {val: 'bold', content: '600'}
          ]
        },
        style: {
          'Serif': false, 
          'Sans Serif': true, 
          'Display': true,
          'HandWriting': true,
          'MonoSpace': false
        }
      },
      {
        information: {  
          name: 'robat',
          designer: 'christmas',
          sorting: 'trending',
          language: ['japanese','korean'],
          defaultOptions: {
            text: 'KIM JIHEE',
            fontSize: 40,
            fontWeight: '400',
            show: true,
          },
          stringArr: [
            {val: 'paragraph', content: 'my name is jiheekim'},
            {val: 'alphabet', content: 'abcdefghijklmnopqrstuvw'},
            {val: 'korean', content: 'KIM JIHEE'},
            {val: 'number', content: '123456789'}
          ],
          weightArr: [
            {val: 'light', content: '300'},
            {val: 'regular', content: '400'},
            {val: 'medium', content: '500'},
            {val: 'bold', content: '600'}
          ]
        },
        style: {
          'Serif': false, 
          'Sans Serif': true, 
          'Display': true,
          'HandWriting': true,
          'MonoSpace': false
        }
      },
      {
        information: {  
          name: 'rob',
          designer: 'christmas',
          sorting: 'trending',
          language: ['japanese','korean'],
          defaultOptions: {
            text: 'KIM JIHEE',
            fontSize: 40,
            fontWeight: '400',
            show: true,
          },
          stringArr: [
            {val: 'paragraph', content: 'my name is jiheekim'},
            {val: 'alphabet', content: 'abcdefghijklmnopqrstuvw'},
            {val: 'korean', content: 'KIM JIHEE'},
            {val: 'number', content: '123456789'}
          ],
          weightArr: [
            {val: 'light', content: '300'},
            {val: 'regular', content: '400'},
            {val: 'medium', content: '500'},
            {val: 'bold', content: '600'}
          ]
        },
        style: {
          'Serif': false, 
          'Sans Serif': true, 
          'Display': true,
          'HandWriting': true,
          'MonoSpace': false
        }
      },
      {
        information: {  
          name: 'robbbbbbbb',
          designer: 'christmas',
          sorting: 'trending',
          language: ['japanese','korean'],
          defaultOptions: {
            text: 'KIM JIHEE',
            fontSize: 40,
            fontWeight: '400',
            show: true,
          },
          stringArr: [
            {val: 'paragraph', content: 'my name is jiheekim'},
            {val: 'alphabet', content: 'abcdefghijklmnopqrstuvw'},
            {val: 'korean', content: 'KIM JIHEE'},
            {val: 'number', content: '123456789'}
          ],
          weightArr: [
            {val: 'light', content: '300'},
            {val: 'regular', content: '400'},
            {val: 'medium', content: '500'},
            {val: 'bold', content: '600'}
          ]
        },
        style: {
          'Serif': false, 
          'Sans Serif': true, 
          'Display': true,
          'HandWriting': true,
          'MonoSpace': false
        }
      },
    ]
  },
  getters: {
    isVisible : function(state){
      let fonts = state.fonts
      let options = state.asideOption.categories
      function isVisible(options, font){
        for(let i =0; i<options.length; i++) {
          if(options[i].checked && font.style[options[i].name]) return true
        }
        return false
      }
      return fonts.map(font => isVisible(options,font))
    }
  },
  mutations: {
    textVmodel (state, message) {
      state.fonts[message.num].information.defaultOptions.text = message.value
    },
    weightVmodel (state, weight) {
      state.fonts[weight.num].information.defaultOptions.fontWeight = weight.value
    },
    sizeVmodel (state, size) {
      state.fonts[size.num].information.defaultOptions.fontSize = size.value
    },
    colorVmodel (state, color) {
      state.showOption.colorIn = color.color
    },
    clickPlus (state) {
      state.showOption.show = !state.showOption.show
    },
    clickCheck (state, payload){
      state.asideOption.categories[payload].checked = !state.asideOption.categories[payload].checked
    }
  },
  actions: {
    //
  }
})