<template>
  <v-layout align-center row wrap>
    <v-flex
      xs12
      class="display-1"
    >
      Single Chat
    </v-flex>
    <v-flex
      xs2
      class="title"
    >
      message
    </v-flex>
    <v-flex xs8>
      <v-text-field v-model="msg" label="메시지를 입력하세요" @keyup.enter="sendMsg" />
    </v-flex>
    <v-flex xs2>
      <v-btn
        color="success"
        class="title black--text"
        @click="sendMsg"
      >
        전송
      </v-btn>
    </v-flex>

    <v-flex
      xs12
      class="headline"
    >
      TimeLine
    </v-flex>
    <v-flex
      xs12
      text-xs-left
    >
      <v-card>
        <v-list>
          <template v-for="(msg, i) in recMsg">
            <v-list-item :key="i">
              <v-list-item-content>
                <v-list-item-title class="body-1" v-text="msg" />
              </v-list-item-content>
            </v-list-item>
            <v-divider v-if="i+1 < recMsg.length" :key="`divider-${i}`" />
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import io from 'socket.io-client'
const socket = io('http://localhost:3000')

export default {
  name: 'Single',
  data: () => ({
    msg: '',
    recMsg: ['채팅방에 입장하였습니다.']
  }),
  beforeMount() {
    socket.on('sendMsg', (result) => {
      if (result) {
        this.recMsg.push(result)
      } else {
        alert('응답이 없습니다.')
      }
    })
  },
  methods: {
    sendMsg(event) {
      if (this.msg) {
        socket.emit('sendMsg', this.msg)
      } else {
        alert('메시지가 없습니다.')
      }
    }
  }

}
</script>

<style scoped>

</style>
