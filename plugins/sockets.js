import Vue from 'vue'
import io from 'socket.io-client'

Vue.prototype.$sockOpen = io('http://localhost:3000/')
